import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css'],
})
export class ContactReactiveComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  name = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.name = params['name'];
    });
    this.contactForm = this.initForm();
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdultR: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    });
  }
}
