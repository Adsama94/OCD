import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  scroll(el) {
    let id = document.getElementById(el);
    id.scrollIntoView();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
