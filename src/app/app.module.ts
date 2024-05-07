import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './component/list/list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    HomePageComponent,
    SearchBarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
