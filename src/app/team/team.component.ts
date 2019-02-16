import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  games = [
    {
      "url": "assets/pictures/samplepic1.jpg",
      "name": "Sample1",
      "role": "Samplerole1"
    },
    {
      "url": "assets/pictures/samplepic2.jpg",
      "name": "Sample2",
      "role": "Samplerole2"
    },
    {
      "url": "assets/pictures/samplepic3.jpg",
      "name": "Sample3",
      "role": "Samplerole3"
    },
    {
      "url": "assets/pictures/samplepic4.jpg",
      "name": "Sample4",
      "role": "Samplerole4"
    },
    {
      "url": "assets/pictures/samplepic5.jpg",
      "name": "Sample5",
      "role": "Samplerole5"
    }
  ];
  gamesformatted = [];

  constructor() { }

  ngOnInit() {
    let j = -1;
    for (var i = 0; i < this.games.length; i++) {
      if (i % 3 == 0) {
        j++;
        this.gamesformatted[j] = [];
        this.gamesformatted[j].push(this.games[i]);
      }
      else {
        this.gamesformatted[j].push(this.games[i]);
      }
    }
  }
}
