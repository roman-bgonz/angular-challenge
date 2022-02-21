import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selection = '';

  cities = ['Ciudad de México', 'Monterrey', 'Guadalajara'];

  criteria = '';

  onClickedCity(city: string): void {
    this.selection = city;
  }

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  clear(): void {
    this.selection = '';
  }
}
