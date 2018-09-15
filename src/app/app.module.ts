import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RowCardsComponent } from './home/row-cards/row-cards.component';
import { NotificationsComponent } from './home/notifications/notifications.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RowCardsComponent,
    NotificationsComponent,
    CarouselComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
