import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  TwitterFeed
} from '../models/twitter-feed.model';

@Injectable({
  providedIn: 'root'
})
export class TwitterFeedService {
  constructor(private http: HttpClient) {}
  getTwitterFeed(count) {
    return this.http.get < TwitterFeed > ('http://localhost:9000/getFeed?count=' + count);
  }
}
