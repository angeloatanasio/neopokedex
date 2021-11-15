import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PokemonModel} from "../models/pokemon.model";
import {Observable} from "rxjs";
import {NouveauPokemonModel} from "../models/nouveau-pokemon.model";
import {Api} from "../shared/api";

@Injectable({
  providedIn:'root'
})
export class PokemonApi extends Api {

  API_BACK = 'http://localhost:8080/api/pokemon';

  constructor(private http: HttpClient) {
    super();
  }

  findAll() : Observable<PokemonModel[]> {
    return this.http.get<PokemonModel[]>(`${this.API_BACK}/findAll`);
  }

  enregistrerNouveauPokemon(nouveauPokemon : NouveauPokemonModel, formData : FormData) : Observable<PokemonModel> {
    formData.append('pokemonModel', JSON.stringify(nouveauPokemon));
    return this.http.post<PokemonModel>(`${this.API_BACK}/save`, formData);
  }

  existeParNomOuNumero(data : string | number) : Observable<boolean> {
    return this.http.get<boolean>(`${this.API_BACK}/existe/${data}`)
  }

}
