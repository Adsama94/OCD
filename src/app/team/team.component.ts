import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  games = [1, 2, 3, 4, 5].map(() => `https://picsum.photos/500/300?random&t=${Math.random()}`);
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
