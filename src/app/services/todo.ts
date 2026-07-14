import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  //store
  //api
  //subject
  //functions

  http = inject(HttpClient);

  ConcatStrings(str1: string, str2: string)
  {
    debugger;
    var result = str1 + " " + str2;
    return result;
  }

  getTodos()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
