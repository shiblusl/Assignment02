import { Component, OnInit } from '@angular/core';
import {Card} from '../../shared/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public cardlist: Card[] = [];

  constructor() {
    this.cardlist = this.getCardlist();
  }
  private getCardlist(): Card[]{
    let allcard: Card[];
    allcard = [];
    allcard.push({title: 'Html/Css', count: 3, frequent: 'Weekly', body: 'This is html css test'});
    allcard.push({title: 'Javascript', count: 1, frequent: 'Weekly', body: 'This is Javascript test'});
    allcard.push({title: 'Angular', count: 2, frequent: 'Weekly', body: 'This is Angular test'});

    return allcard;
}
  ngOnInit(): void {
  }

}
