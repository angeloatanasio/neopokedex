import {Injectable} from "@angular/core";
import {PokemonApi} from "./pokemon-api";
import {PokemonModel} from "../models/pokemon.model";
import {BehaviorSubject, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {NouveauPokemonModel} from "../models/nouveau-pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonFacade {

  $listePokemonState: BehaviorSubject<PokemonModel[]> = new BehaviorSubject<PokemonModel[]>([]);

  constructor(private pokemonApi: PokemonApi) {}

  findAll(): Observable<PokemonModel[]> {
    this.pokemonApi.findAll().subscribe((listePokemon) => this.$listePokemonState.next(listePokemon));
    console.log('listepokemon facade -> listePokemonState : ', this.$listePokemonState);
    return this.$listePokemonState.asObservable();
  }

  listePokemonsState() : Observable<PokemonModel[]>{
    return this.$listePokemonState.asObservable();
  }

  enregistrerNovueauPokemon(formulairePokemon: { data: FormGroup; formData: FormData }): Observable<PokemonModel[]> {
    const listePokemon = [...this.$listePokemonState.getValue()];
    const nouveauPokemon = new NouveauPokemonModel(
      formulairePokemon.data.value.numero,
      formulairePokemon.data.value.nom,
      formulairePokemon.data.value.poids,
      formulairePokemon.data.value.taille,
      formulairePokemon.data.value.evolution,
      formulairePokemon.data.value.type,
    );
    this.pokemonApi.enregistrerNouveauPokemon(nouveauPokemon, formulairePokemon.formData)
      .subscribe((nouveauPokemonEnregistre: PokemonModel) => {
        listePokemon.push(nouveauPokemonEnregistre),
          listePokemon.sort((pokemonA, pokemonB) => pokemonA.numero.toString().localeCompare(pokemonB.numero.toString(), undefined, {numeric: true}));

      })
    this.$listePokemonState.next([]);
    this.$listePokemonState.next(listePokemon);
    return this.$listePokemonState.asObservable();
  }
}
