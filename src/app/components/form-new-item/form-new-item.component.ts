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

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string) {
    this.newItemEvent.emit(item);
  }
}
