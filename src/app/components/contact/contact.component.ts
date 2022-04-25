import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @ViewChild('contactForm') contactForm: NgForm;

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

  onSubmit(): void {
    console.log('Form values', this.contactForm);
  }
}
