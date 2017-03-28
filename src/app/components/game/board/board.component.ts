import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tiles: number[] = [];

  constructor() {
    for(var i = 0; i < 64; i++ ) {
      this.tiles.push(i);
    }
  }

  ngOnInit() {
  }

}
