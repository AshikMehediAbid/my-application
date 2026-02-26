import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgClass, FormsModule, NgStyle], // NgClass will allow us to conditionally apply CSS classes to elements in our template
                                   // FormsModule for two-way data binding with ngModel
                                   // NgStyle for applying inline styles dynamically
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {

  myClass = "bg-primary"; // This property will be used to dynamically set the CSS class of an element in the template

  isActive = false;

  marks = 75;

  backColor = "";

  myCustomCss = {
    color : 'white',
    backgroundColor : 'orange',
    fontSize : '20px',
    padding : '10px',
    width: '200px',
    border: '1px solid black'
  }
}
