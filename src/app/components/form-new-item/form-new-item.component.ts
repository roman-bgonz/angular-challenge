import { City } from '../../services/data.service';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
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
export class FormNewItemComponent implements AfterViewInit {
  @Input() label: string;
  @Input() className = 'btn-primary';
  @Input() selection!: City;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  @ViewChild('newItem') newItem!: ElementRef;

  ngAfterViewInit(): void {
    this.newItem.nativeElement.focus();
  }

  onAddNewItem(): void {
    this.newItemEvent.emit(this.newItem.nativeElement.value);
    this.onClear();
  }

  onUpdateItem(): void {
    const ciudad: City = {
      _id: this.selection._id,
      name: this.newItem.nativeElement.value,
    };
    this.updateItemEvent.emit(ciudad);
    this.onClear();
  }

  private onClear(): void {
    this.newItem.nativeElement.value = '';
  }
}
