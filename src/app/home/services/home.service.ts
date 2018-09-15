import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

   homeData:any=[
    {category:"General",articles:[
      {articleId:"1",articleTitle:"Article 1",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"},
      {articleId:"2",articleTitle:"Article 2",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"},
      {articleId:"3",articleTitle:"Article 3",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"},
      {articleId:"4",articleTitle:"Article 4",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"}
    ]},
    {category:"Health",articles:[
      {articleId:"1",articleTitle:"Article 1",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"},
      {articleId:"2",articleTitle:"Article 2",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"},
      {articleId:"3",articleTitle:"Article 3",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"},
      {articleId:"4",articleTitle:"Article 4",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"}
    ]},
    {category:"Sceince & Technology",articles:[
      {articleId:"1",articleTitle:"Article 1",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"},
      {articleId:"2",articleTitle:"Article 2",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"},
      {articleId:"3",articleTitle:"Article 3",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"},
      {articleId:"4",articleTitle:"Article 4",articleDesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "+
      +"Magnam expedita nulla maxime officiis ea, est delectus quam deserunt eius incidunt.",updated:"50 min ago"}
    ]}
  ];

  getHomeContent(){
    return this.homeData;
  }

}
