import {
  TestBed
} from '@angular/core/testing';

import {
  TwitterFeedService
} from './twitter-feed.service';

describe('TwitterFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitterFeedService = TestBed.get(TwitterFeedService);
    expect(service).toBeTruthy();
  });
});
