import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentInputComponent } from './dynamic-component-input.component';

describe('DynamicComponentInputComponent', () => {
  let component: DynamicComponentInputComponent;
  let fixture: ComponentFixture<DynamicComponentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
