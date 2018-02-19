import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableGridComponent } from './selectable-grid.component';

describe('SelectableGridComponent', () => {
  let component: SelectableGridComponent;
  let fixture: ComponentFixture<SelectableGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectableGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
