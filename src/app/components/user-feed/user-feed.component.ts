import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss']
})
export class UserFeedComponent implements OnInit {
  @Input() feedToRender;
  constructor() {}
  ngOnInit() {}
}
