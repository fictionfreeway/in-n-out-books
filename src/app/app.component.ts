/*
Title: app.component.ts
Author: William Watlington
Date: 27 November 2022
Description: app component for books app
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out Books";
  }
}
