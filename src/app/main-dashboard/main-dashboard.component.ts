import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { filter, tap, take, first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {

  disabled: boolean;
  color: string;

  cards$;
  cards;
  modifiedCards$;
  cards1: any[];
  cardsNext: any[];
  cardsPrev: any[];

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   // tap(x => console.log(x)),
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //   { title: 'Card 1', cols: 1, rows: 1 },
  //   { title: 'Card 2', cols: 1, rows: 1 },
  //   { title: 'Card 3', cols: 1, rows: 1 },
  //   { title: 'Card 4', cols: 1, rows: 1 }
  // ]
  //     }
  //     return [
      //   { title: 'Card 1', cols: 2, rows: 1 },
      //   { title: 'Card 2', cols: 1, rows: 1 },
      //   { title: 'Card 3', cols: 1, rows: 2 },
      //   { title: 'Card 4', cols: 1, rows: 1 }
  //    ];
  //   })
  // );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.cards$ = of(
      [ { title: 'Card 1', cols: 1, rows: 1 },
      { title: 'Card 2', cols: 1, rows: 1 },
      { title: 'Card 3', cols: 1, rows: 1 },
      { title: 'Card 4', cols: 2, rows: 1 },
      { title: 'Card 5', cols: 2, rows: 1 },
      { title: 'Card 6', cols: 2, rows: 1 },
      { title: 'Card 7', cols: 2, rows: 1 },
      { title: 'Card 8', cols: 2, rows: 1 },
      { title: 'Card 9', cols: 2, rows: 1 }
    ])
    ;
  // ).pipe(map(cards => cards.filter(card => card.title === 'Card 1')));

  // TODO: Try getting to show only one card at a time using observable rxjs operators

    this.cards$.subscribe(
      (cards => {
        this.cards = cards;
        this.cards.map(card => card.display = false);
        const index = 0;

        this.cards1 = [
          ...this.cards.slice(0, index),
          {
            ...this.cards[index],
            display: true
          },
          ...this.cards.slice(index + 1)
        ];

        this.cards = [];
        this.cards = [...this.cards1];
        this.cards$ = of([...this.cards1.filter(card => card.display === true)]);
      })
    );
  }

  prev(): void {
    // TODO: Index not coming , work around using findIndex
    let indexCheck;

    indexCheck = this.cards.findIndex(({display}) => display === true);
    const prevIndex = indexCheck === 0 ? this.cards.length - 1 : indexCheck - 1;
    this.cardsPrev = [...this.cards];
    this.cardsPrev.map(card => card.display = false);

    this.cards1 = [
      ...this.cardsPrev.slice(0, prevIndex),
      {
        ...this.cardsPrev[prevIndex],
        display: true
      },
      ...this.cardsPrev.slice(prevIndex + 1)
    ];

    this.cards = [...this.cards1];

    this.cards$ = of([...this.cards1.filter(card => card.display === true)]);

  }

  next(): void {
    // TODO: Index not coming , work around using findIndex
    let indexCheck;

    indexCheck = this.cards.findIndex(({display}) => display === true);
    let nextIndex = indexCheck + 1;
    this.cardsNext = [...this.cards];
    this.cardsNext.map(card => card.display = false);
    if (nextIndex === this.cardsNext.length) {
      nextIndex = 0;
    }
    this.cards1 = [
      ...this.cardsNext.slice(0, nextIndex),
      {
        ...this.cardsNext[nextIndex],
        display: true
      },
      ...this.cardsNext.slice(nextIndex + 1)
    ];
    this.cards = [...this.cards1];
    this.cards$ = of([...this.cards1.filter(card => card.display === true)]);
  }
}
