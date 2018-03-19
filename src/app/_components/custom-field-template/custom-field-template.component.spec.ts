import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldTemplateComponent } from './custom-field-template.component';

describe('CustomFieldTemplateComponent', () => {
  let component: CustomFieldTemplateComponent;
  let fixture: ComponentFixture<CustomFieldTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFieldTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFieldTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
