import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule], // Import FormsModule for ngModel. Without FormsModule, Angular wouldn’t know what ngModel is. [(ngModel)] creates two-way data binding.
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isShowTextBox : boolean = false;
  marks = 0;
  showSuccessLabel = signal(true)
  ToggleLabelVisbility(){
    this.showSuccessLabel.set(!this.showSuccessLabel());
  }

  courses : string[] = ["Angular", "React", "Vue"];

  studentList =[
    {name: "Alice", roll: 1},
    {name: "Bob", roll: 3},
    {name: "Cris", roll: 2},
  ];  

}
