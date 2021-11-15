import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {PokemonModel} from "../../models/pokemon.model";

@Component({
  selector: 'app-grille-pokemon',
  templateUrl: './grille-pokemon.component.html',
  styleUrls: ['./grille-pokemon.component.scss']
})
export class GrillePokemonComponent implements OnInit {

  @Input() $listePokemonWithImage : Observable<PokemonModel[]> = new Observable<PokemonModel[]>();
  @Output() retourAccueilEvent : EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {}

  retourAccueil() {
    this.retourAccueilEvent.emit();
  }
}
