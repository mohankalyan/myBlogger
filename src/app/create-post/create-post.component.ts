import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {


  categories:any=['General','Health','Science & Technology','Business','Entertainment','Sports'];
  myPost:any={};

  constructor() {
    this.categories=['General','Health','Science & Technology','Business','Entertainment','Sports'];;
   }

  ngOnInit() {
  }

}
