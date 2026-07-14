import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {

  todoList: any[] = [];
  
  constructor(private httpe: HttpClient)
  {

  }
  ngOnInit(){
    this.getTodos();
  }

  getTodos()
  {
    this.httpe.get("https://jsonplaceholder.typicode.com/todos").subscribe( (response) =>
    {
      this.todoList = response as any[];
    })
  }
}
