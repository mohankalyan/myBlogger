import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit,OnDestroy {

  category:String='';
  paramsSubscription:Subscription;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.category= this.route.snapshot.params['category'];
    this.paramsSubscription = this.route.params
                          .subscribe(
                            (params: Params) => {
                              this.category=params['category'];
                            }
                          );
  }
  
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
