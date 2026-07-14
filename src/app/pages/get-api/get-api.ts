import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {

  // Second way to inject services
  _todoService = inject(Todo)

  todoList: any[] = [];
  
  constructor(private httpe: HttpClient)
  {
    var result = this._todoService.ConcatStrings("Learning", "Angular");
    console.log(result);
  }
  ngOnInit(){
    this.getTodos();
  }

  getTodos()
  {
    this._todoService.getTodos().subscribe( 
    {
      next: (response) =>
      {
        debugger;
        this.todoList = response as any[];
      }
    })
  }
}
