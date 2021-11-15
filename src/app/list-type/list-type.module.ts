import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormulaireNouveauTypeComponent} from "./formulaire-nouveau-type/formulaire-nouveau-type.component";
import {ListTypeRoutingModule} from "./list-type-routing.module";
import {ListTypeComponent} from "./list-type.component";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [FormulaireNouveauTypeComponent, ListTypeComponent],
  exports: [
    FormulaireNouveauTypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ListTypeRoutingModule,
    TranslateModule
  ]
})
export class ListTypeModule { }
