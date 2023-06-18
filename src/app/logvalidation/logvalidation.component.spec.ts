import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogvalidationComponent } from './logvalidation.component';

describe('LogvalidationComponent', () => {
  let component: LogvalidationComponent;
  let fixture: ComponentFixture<LogvalidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogvalidationComponent]
    });
    fixture = TestBed.createComponent(LogvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
