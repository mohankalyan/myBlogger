import { HomeService } from './../home/services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  homeContent:any;
  constructor( private homeService:HomeService) { }

  ngOnInit() {
    this.homeContent=this.homeService.getHomeContent();
  }

  getLink = (cat) => "/categories/"+cat.categoryId;
}
