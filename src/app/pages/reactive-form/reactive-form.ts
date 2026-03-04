import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  empForm = new FormGroup(
    {
      name: new FormControl('' , [Validators.required, Validators.minLength(4)] ),
      role: new FormControl(''),
      department: new FormControl(''),
      salary: new FormControl(0)
    }
  )
}
