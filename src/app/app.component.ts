import {
  Component
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-handle';
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:9000/getFeed').subscribe((data) => {
      debugger;
    });
  }
}
