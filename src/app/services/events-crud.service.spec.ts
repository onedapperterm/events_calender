import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { EventsCrudService } from './events-crud.service';

describe('EventsCrudService', () => {
  let service: EventsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(EventsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
