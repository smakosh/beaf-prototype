import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-haircut',
  templateUrl: './haircut.component.html',
  styleUrls: ['./haircut.component.css']
})
export class HaircutComponent implements OnInit {

  voteA = 0;
  voteB = 0;
  focusA: string;
  focusB: string;
  hide = 'hide';
  constructor() { }

  ngOnInit() {
  }

  voteAfter()  {

    if (this.voteB === 1) {

      this.voteA = 0;
    }
    // tslint:disable-next-line:one-line
    else  {

      this.voteA = 1;
      this.focusA = 'focused_vote_A';
      this.hide = 'hidden';
    }
  }

  voteBefore() {

    if (this.voteA === 1) {

      this.voteB = 0;
    }
    // tslint:disable-next-line:one-line
    else  {

      this.voteB = 1;
      this.focusB = 'focused_vote_B';
      this.hide = 'hidden';
    }
  }

}
