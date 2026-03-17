import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe,JsonPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  department = "Development";

  upperCasePipeExample = "This is an example of UpperCase Pipe";

  lowerCasePipeExample = "This is an example of LowerCase Pipe";

  titleCasePipeExample = "tHIS is AN exaMPle of TitleCase Pipe which is used to transForm the first letter of each word to uppercase and the rest to lowercase";

  date = new Date();

  students = [ "Abid", "Ali", "Ahmed", "Ayesha"];
  text = "This is an example of Slice Pipe which is used to slice a portion of an array or string based on the specified start and end indices";

  studentObj = {
    name: "Abid Ali",
    age: 25,
    department: "Development"
  }
}
