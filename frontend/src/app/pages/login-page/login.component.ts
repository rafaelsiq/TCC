import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageSrc = 'assets/images/back-home-2.png'  
  imageAlt = 'background'
}
