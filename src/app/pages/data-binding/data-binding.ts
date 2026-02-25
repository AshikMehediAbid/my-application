import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule], // Import FormsModule for ngModel
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  employeeName: string = 'Bob';
  deptName: string = 'HR';

  myClassName = "danger";
  inputType = "checkbox";

  showMessage(){
    alert("This is example of event binding");
  }

  selectedDept(event: Event){
    const value = (event.target as HTMLSelectElement).value;
    alert("Selected Department is : " + value);
  }
}
