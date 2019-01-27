import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/1280/500?random&t=${Math.random()}`);
//images = ['assets/pictures/img1.jpg','assets/pictures/img2.jpg','assets/pictures/img3.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
