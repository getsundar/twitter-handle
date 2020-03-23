import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  TwitterFeed
} from '../models/twitter-feed.model';
import {
  retry,
  catchError
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterFeedService {
  constructor(private http: HttpClient) {}
  getTwitterFeed(count) {
    return this.http.get < TwitterFeed > ('http://magiclab-twitter-interview.herokuapp.com/sundharasenthil/api?count=' + count).pipe(
      retry(), // retry a failed request
      // catchError() => if the error has to be handled. Current requirement is to skip error
    );
  }
}
