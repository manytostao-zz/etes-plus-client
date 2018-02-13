import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMasterDetailComponent } from './crud-master-detail.component';

describe('CrudMasterDetailComponent', () => {
  let component: CrudMasterDetailComponent;
  let fixture: ComponentFixture<CrudMasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudMasterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
