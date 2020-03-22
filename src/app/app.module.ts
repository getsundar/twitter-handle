import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  TwitterFeedComponent
} from './components/twitter-feed/twitter-feed.component';
import {
  Utils
} from './shared/utils';
import {
  MatCardModule
} from '@angular/material/card';
import {
  UserFeedComponent
} from './components/user-feed/user-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterFeedComponent,
    UserFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [Utils],
  bootstrap: [AppComponent]
})
export class AppModule {}
