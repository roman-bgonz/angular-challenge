import { City } from '../../services/data.service';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent {
  @Input() label: string;
  @Input() className = 'btn-primary';
  @Input() selection!: City;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  onAddNewItem(item: string): void {
    this.newItemEvent.emit(item);
  }

  onUpdateItem(item: City, change: string): void {
    const ciudad: City = {
      _id: item._id,
      name: change,
    };
    this.updateItemEvent.emit(ciudad);
  }
}
