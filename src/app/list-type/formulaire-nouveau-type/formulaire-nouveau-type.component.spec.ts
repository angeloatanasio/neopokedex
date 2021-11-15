import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireNouveauTypeComponent } from './formulaire-nouveau-type.component';

describe('TypeComponent', () => {
  let component: FormulaireNouveauTypeComponent;
  let fixture: ComponentFixture<FormulaireNouveauTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireNouveauTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireNouveauTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
