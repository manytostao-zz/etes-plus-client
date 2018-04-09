import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomenclativesComponent } from './nomenclatives.component';

describe('NomenclativesComponent', () => {
  let component: NomenclativesComponent;
  let fixture: ComponentFixture<NomenclativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomenclativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomenclativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
