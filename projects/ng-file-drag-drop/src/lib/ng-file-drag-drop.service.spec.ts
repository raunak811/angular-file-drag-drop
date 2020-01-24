import { TestBed } from '@angular/core/testing';

import { NgFileDragDropService } from './ng-file-drag-drop.service';

describe('NgFileDragDropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFileDragDropService = TestBed.get(NgFileDragDropService);
    expect(service).toBeTruthy();
  });
});
