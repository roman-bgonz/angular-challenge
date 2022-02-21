import { Component, OnInit } from "@angular/core";

interface IContactForm {
  name: string;
  checkAdult: boolean;
  department: string;
  comment: string;
}

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  constructor() {}

  model: IContactForm = {
    name: "",
    checkAdult: false,
    department: "",
    comment: "",
  };

  ngOnInit(): void {}

  onSubmit(form: any): void {
    console.log("Form values", form);
  }
}
