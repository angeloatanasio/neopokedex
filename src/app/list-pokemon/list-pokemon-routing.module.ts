import {NgModule} from "@angular/core";
import {FormulaireNouveauPokemonComponent} from "./formulaire-nouveau-pokemon/formulaire-nouveau-pokemon.component";
import {RouterModule} from "@angular/router";
import {ListPokemonComponent} from "./list-pokemon.component";
import {GrillePokemonComponent} from "./grille-pokemon/grille-pokemon.component";

const routes = [
  {path: 'list-pokemon', component: ListPokemonComponent},
  {path: 'nouveau-pokemon', component : FormulaireNouveauPokemonComponent},
  {path: 'grille-pokemon', component : GrillePokemonComponent},
];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ListPokemonRoutingModule {

}
