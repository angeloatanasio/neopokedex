import {Component, Input, OnInit} from '@angular/core';
import {PokemonModel} from "../../../models/pokemon.model";
import {ImageModel} from "../../../models/image-model";
import {TypeModel} from "../../../models/type.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemon: PokemonModel;
  image : any;
  constructor() {
    this.pokemon = new PokemonModel(0, 0, '',
      new ImageModel('', '', []),0, 0,'',
      new TypeModel(0, '', ''));
  }

  ngOnInit(): void {
    if(this.pokemon.image) {
      console.log("type :",this.pokemon.image.type);
      this.image = 'data:'+this.pokemon.image.type+';base64,'+this.pokemon.image.picByte;
    }
  }

}
