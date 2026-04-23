import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-forms',
  imports: [FormField, JsonPipe], // Field allows us to use field level features with signal based forms and manage individual form controls as signals.
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.css',
})
export class SignalForms {
empModel = signal(
  {
    name: '',
    email: '',
  }
)

empForm = form(this.empModel)

empForm2 = form(this.empModel,
  (schema) =>{
    required(schema.name, {"message": "Name is required"});
    required(schema.email, {'message': 'Email is required'});
    email(schema.email, {'message': 'Email is not valid'})
  }
);
}
