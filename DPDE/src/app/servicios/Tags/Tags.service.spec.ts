import { TestBed } from '@angular/core/testing';

import { TagsService } from './Tags.service';

describe('TagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsService = TestBed.get(TagsService);
    expect(service).toBeTruthy();
  });
});
