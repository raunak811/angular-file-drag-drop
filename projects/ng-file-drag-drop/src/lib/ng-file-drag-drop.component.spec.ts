import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFileDragDropComponent } from './ng-file-drag-drop.component';

describe('NgFileDragDropComponent', () => {
  let component: NgFileDragDropComponent;
  let fixture: ComponentFixture<NgFileDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFileDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFileDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
