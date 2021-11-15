import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireNouveauPokemonComponent } from './formulaire-nouveau-pokemon.component';

describe('PokemonComponent', () => {
  let component: FormulaireNouveauPokemonComponent;
  let fixture: ComponentFixture<FormulaireNouveauPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireNouveauPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireNouveauPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
