import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListTypeComponent} from "./list-type/list-type.component";
import {SelectivePreloadingStrategyService} from "./selective-preloading-strategy.service";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";

const routes: Routes = [
  { path:'list-type',
    component: ListTypeComponent,
    loadChildren : () => import('./list-type/list-type.module').then(m => m.ListTypeModule),
    data : {preload : true}
  },
  { path : 'list-pokemon', component: ListPokemonComponent},
  { path: '', redirectTo: '/list-pokemon' , pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
    {
      enableTracing : true,
      preloadingStrategy : SelectivePreloadingStrategyService
    }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
