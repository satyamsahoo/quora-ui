import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStepsWrapperComponent } from './order-steps-wrapper.component';

describe('OrderStepsWrapperComponent', () => {
  let component: OrderStepsWrapperComponent;
  let fixture: ComponentFixture<OrderStepsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStepsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStepsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
