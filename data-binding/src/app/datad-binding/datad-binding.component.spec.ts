import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatadBindingComponent } from './datad-binding.component';

describe('DatadBindingComponent', () => {
  let component: DatadBindingComponent;
  let fixture: ComponentFixture<DatadBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatadBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatadBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
