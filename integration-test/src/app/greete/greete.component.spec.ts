import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeteComponent } from './greete.component';

describe('GreeteComponent', () => {
  let component: GreeteComponent;
  let fixture: ComponentFixture<GreeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
