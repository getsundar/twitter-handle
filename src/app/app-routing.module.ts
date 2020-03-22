import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  TwitterFeedComponent
} from './components/twitter-feed/twitter-feed.component';

const routes: Routes = [{
  path: '',
  component: TwitterFeedComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
