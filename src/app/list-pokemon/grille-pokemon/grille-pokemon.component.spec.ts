import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillePokemonComponent } from './grille-pokemon.component';

describe('GrillePokemonComponent', () => {
  let component: GrillePokemonComponent;
  let fixture: ComponentFixture<GrillePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
