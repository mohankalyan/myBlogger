import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-cards',
  templateUrl: './row-cards.component.html',
  styleUrls: ['./row-cards.component.scss']
})
export class RowCardsComponent implements OnInit {

  @Input() homeRow:any;
  
  constructor() { }

  ngOnInit() {
  }

  createLink = (cat,articleId) => "/categories/"+cat.categoryId+"/"+articleId;

}
