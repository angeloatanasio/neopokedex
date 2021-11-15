import {NgModule} from "@angular/core";
import {FormulaireNouveauTypeComponent} from "./formulaire-nouveau-type/formulaire-nouveau-type.component";
import {RouterModule} from "@angular/router";
import {ListTypeComponent} from "./list-type.component";

const routes = [

  {
    path: 'list-type',
    component: ListTypeComponent
  },
  {
    path: 'nouveau-type',
    component: FormulaireNouveauTypeComponent
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class ListTypeRoutingModule{}
