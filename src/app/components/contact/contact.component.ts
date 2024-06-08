import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    sujet: new FormControl(''),
    message: new FormControl(''),
  });

  ngOnInit(): void {}

  constructor() {}

  submit() {
    console.log(this.contactForm.value);
  }
}
