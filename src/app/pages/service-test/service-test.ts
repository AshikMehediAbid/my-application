import { Component } from '@angular/core';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-service-test',
  imports: [],
  templateUrl: './service-test.html',
  styleUrl: './service-test.css',
})
export class ServiceTest {

  // First way to inject services
  constructor(private _todoService : Todo)
  {
    debugger;
    const result = this._todoService.ConcatStrings("Hello", "World");
    console.log(result);
  }
}
