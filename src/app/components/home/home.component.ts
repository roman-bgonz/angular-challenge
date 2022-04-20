import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selection: City;

  cities: City[] = [];

  criteria = '';

  constructor(private readonly service: DataService) {}

  ngOnInit(): void {
    this.service.getCities().subscribe({
      next: (res) => (this.cities = [...res]),
    });
  }

  onCitySelected(city: City): void {
    this.selection = city;
  }

  addNewCity(city: string): void {
    this.service.addNewCity(city).subscribe((res) => {
      this.cities.push(res);
    });
  }

  updateCity(city: City): void {
    this.service.updateCity(city).subscribe(() => {
      const tempArr = this.cities.filter((c) => c._id !== city._id);
      this.cities = [...tempArr, city];
      this.clear();
    });
  }

  onCityDelete(id: string): void {
    if (confirm('Estás seguro?')) {
      this.service.deleteCity(id).subscribe(() => {
        const tempArr = this.cities.filter((c) => c._id !== id);
        this.cities = tempArr;
        this.clear();
      });
    }
  }

  clear(): void {
    this.selection = {
      _id: '',
      name: '',
    };
  }
}
