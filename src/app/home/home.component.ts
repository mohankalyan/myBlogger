import { HomeService } from './services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  homeContent:any;
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.homeContent=this.homeService.getHomeContent();
  }
 
}
