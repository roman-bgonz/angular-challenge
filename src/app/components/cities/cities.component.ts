import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `
    <li
      (click)="onClickedCity(city)"
      [ngClass]="{ 'alert alert-info': city === selection }"
    >
      {{ city | titlecase }}
    </li>
  `,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  @Input() city: string;
  @Input() selection: string;
  @Output() cityClickedEvent = new EventEmitter<string>();

  onClickedCity(city: string): void {
    this.cityClickedEvent.emit(city);
  }
}
