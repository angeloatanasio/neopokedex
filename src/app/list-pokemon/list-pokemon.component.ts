import { Component, OnInit } from '@angular/core';
import {PokemonModel} from "../models/pokemon.model";
import {Observable} from "rxjs";
import {PokemonFacade} from "./pokemon.facade";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  $listePokemon : Observable<PokemonModel[]> = new Observable<PokemonModel[]>();
  $listePokemonithImage : Observable<PokemonModel[]> = new Observable<PokemonModel[]>();
  formulaireNouveauPokemon = false;
  grillePokemon = false;

  constructor(private pokemonFacade : PokemonFacade) { }

  ngOnInit(): void {
    this.$listePokemon = this.pokemonFacade.findAll();
  }

  ouvrirFormulaireNouveauPokemon() {
    this.formulaireNouveauPokemon = true;
  }

  ouvrirGrille() {
    this.grillePokemon = true;
    this.$listePokemonithImage = this.pokemonFacade.listePokemonsState();
  }

  enregisterNouveauPokemon(formulaireNouveauPokemon: { data: FormGroup; formData: FormData }) {
    this.pokemonFacade.enregistrerNovueauPokemon(formulaireNouveauPokemon);
    this.formulaireNouveauPokemon = false;
  }

  annulerEnregistrmeent($event: void) {
    this.formulaireNouveauPokemon = false;
  }

  retourListePokemon() {
    this.grillePokemon = false;
  }
}
