import { TestBed } from '@angular/core/testing';

import { AndroidMessagingService } from './android-messaging.service';

describe('AndroidMessagingService', () => {
  let service: AndroidMessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndroidMessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
