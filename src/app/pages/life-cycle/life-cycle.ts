import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck,OnDestroy{

  ngOnInit() // This method is called once the component has been initialized. It's a good place to perform component setup, such as fetching data or initializing properties.
  {
    console.log("ngOnInit:Life Cycle Component Initialized");

  }
  ngAfterContentInit() // This method is called after the component's content has been fully initialized. It's a good place to perform actions that depend on the content being available, such as manipulating the DOM or initializing child components.
  {
    console.log("ngAfterContentInit:Content Initialized");
  }
  ngAfterContentChecked() // This method is called after every check of the component's content. It's useful for performing actions that need to happen after the content has been checked for changes.
  {
    console.log("ngAfterContentChecked:Content Checked");
  }
  ngAfterViewInit() // This method is called after the component's view has been fully initialized. It's a good place to perform actions that depend on the view being available, such as manipulating the DOM or initializing child components.
  {
    console.log("ngAfterViewInit:View Initialized");
  }
  ngAfterViewChecked() // This method is called after every check of the component's view. It's useful for performing actions that need to happen after the view has been checked for changes.
  {
    console.log("ngAfterViewChecked:View Checked");
  }
  ngDoCheck() // This method is called during every change detection cycle. It's useful for performing custom change detection logic or for optimizing performance by avoiding unnecessary checks.
  {
    console.log("ngDoCheck:Change Detection Cycle");
  }
  ngOnDestroy() // This method is called just before the component is destroyed. It's a good place to perform cleanup tasks, such as unsubscribing from observables or releasing resources.
  {
    console.log("ngOnDestroy:Component Destroyed");
  }
}
