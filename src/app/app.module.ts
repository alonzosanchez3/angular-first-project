import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
import { ContentCardsComponent } from './content-cards/content-cards.component'

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
