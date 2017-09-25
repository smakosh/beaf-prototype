import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  voteA = 0;
  voteB = 0;
  focusA: string;
  focusB: string;
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
    }
  }

}
