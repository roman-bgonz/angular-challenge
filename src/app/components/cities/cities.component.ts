import { City } from '../../services/data.service';
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
    <ul class="list-group">
      <li
        class="list-group-item mt-1"
        (click)="onCitySelected(city)"
        [ngClass]="{ active: city?._id === selection?._id }"
      >
        {{ city.name | titlecase }}
        <button
          *ngIf="city?._id === selection?._id"
          class="btn btn-danger float-end"
          type="button"
          (click)="onCityDelete(city._id)"
        >
          Delete
        </button>
      </li>
    </ul>
  `,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  @Input() city: City;
  @Input() selection: City;
  @Output() cityClickedEvent = new EventEmitter<City>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  onCitySelected(city: City): void {
    this.cityClickedEvent.emit(city);
  }

  onCityDelete(id: string): void {
    this.cityDeleteEvent.emit(id);
  }
}
