import { Injectable } from '@angular/core';
import {PokemonApi} from "../../list-pokemon/pokemon-api";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {TypeApi} from "../../list-type/type.api";
import {Api} from "../api";

@Injectable({
  providedIn: 'root'
})
export class ExisteValidatorService {

  data: any;
  constructor(private pokemonApi : PokemonApi,
              private typeApi : TypeApi) {}

  public ValiderSiNumeroOuNomExiste(exlureNumeroOuNom: string | number, apiName: Api) : AsyncValidatorFn {
    this.data = apiName === PokemonApi ? this.pokemonApi : this.typeApi;
    return (ctrl: AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.data.existeParNomOuNumero(ctrl.value)
        .pipe(map(elementSelectionne => (elementSelectionne && exlureNumeroOuNom !== ctrl.value ? {elementExisteDeja: true} : null)))
    }
  }
}
