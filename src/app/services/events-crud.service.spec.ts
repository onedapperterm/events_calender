import { TestBed } from '@angular/core/testing';

import { EventsCrudService } from './events-crud.service';

describe('EventsCrudService', () => {
  let service: EventsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
