import {TypeModel} from "./type.model";
import {ImageModel} from "./image-model";

export class PokemonModel {
  constructor(
    public id : number,
    public numero : number,
    public nom: string,
    public image : ImageModel,
    public poids : number,
    public taille : number,
    public evolution : string,
    public type : TypeModel
  ) {}
}
