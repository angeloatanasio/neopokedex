import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormulaireNouveauPokemonComponent} from "./formulaire-nouveau-pokemon/formulaire-nouveau-pokemon.component";
import {ListPokemonRoutingModule} from "./list-pokemon-routing.module";
import {ListPokemonComponent} from "./list-pokemon.component";
import {TranslateModule} from "@ngx-translate/core";
import {GrillePokemonComponent} from "./grille-pokemon/grille-pokemon.component";
import {SharedModule} from "../shared/shared.module";
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";



@NgModule({
  declarations: [FormulaireNouveauPokemonComponent, ListPokemonComponent, GrillePokemonComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ListPokemonRoutingModule,
        TranslateModule,
        SharedModule,
        RxReactiveFormsModule
    ],
  exports:[]
})
export class ListPokemonModule { }
