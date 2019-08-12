import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image1='assets/step1.jpg';
  image2='assets/step2.jpg';
  image3='assets/step3.jpg';
  image4='assets/step4.jpg';
  constructor() { }

  ngOnInit() {
  }

}
