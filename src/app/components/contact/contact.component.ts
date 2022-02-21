import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

interface IContactForm {
  name: string;
  checkAdult: boolean;
  department: string;
  comment: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}
  id = '';

  model: IContactForm = {
    name: '',
    checkAdult: false,
    department: '',
    comment: '',
  };

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  onSubmit(form: any): void {
    console.log('Form values', form);
  }
}
