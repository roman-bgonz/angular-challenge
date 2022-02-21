import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { FormNewItemComponent } from "./components/form-new-item/form-new-item.component";
import { CitiesComponent } from "./components/cities/cities.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { FormsModule } from "@angular/forms";
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormNewItemComponent,
    CitiesComponent,
    FilterPipe,
    ContactComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
