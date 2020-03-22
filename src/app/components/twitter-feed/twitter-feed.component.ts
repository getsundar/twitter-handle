import {
  Component,
  OnInit
} from '@angular/core';
import {
  TwitterFeedService
} from 'src/app/services/twitter-feed.service';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable,
  timer,
  of
} from 'rxjs';
import {
  TwitterFeed
} from 'src/app/models/twitter-feed.model';
import {
  catchError,
  map,
  switchMap
} from 'rxjs/operators';
import {
  Utils
} from 'src/app/shared/utils';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.scss']
})
export class TwitterFeedComponent implements OnInit {
  count = 5;
  feedToRender = [];
  constructor(private http: HttpClient, private twitterFeedService: TwitterFeedService, private utils: Utils) {}
  ngOnInit() {
    this.getFeed();
  }
  getFeed() {
    const refreshInterval$: Observable < any > = timer(0, 2000)
      .pipe(
        switchMap(() => this.twitterFeedService.getTwitterFeed(this.count)),
        catchError(error => of ('Error'))
      );
    refreshInterval$.subscribe((data) => {
      const parsedData = this.utils.testJSON(data);
      ((parsedData ? this.renderFeed(JSON.parse(data)) : null));
    });
  }
  renderFeed(feedToAdd) {
    feedToAdd.forEach(feed => {
      this.feedToRender.unshift(feed);
    });
  }
}
