import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-challenge";

  selection = "";

  cities = ["Ciudad de México", "Monterrey", "Guadalajara"];

  criteria = "";

  onClickedCity(city: string): void {
    this.selection = city;
  }

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  clear(): void {
    this.selection = "";
  }
}
