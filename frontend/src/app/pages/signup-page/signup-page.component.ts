import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageSrc = 'assets/images/back-home-2.png'  
  imageAlt = 'background'
}
