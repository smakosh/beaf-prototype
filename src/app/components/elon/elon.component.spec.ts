import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElonComponent } from './elon.component';

describe('ElonComponent', () => {
  let component: ElonComponent;
  let fixture: ComponentFixture<ElonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
