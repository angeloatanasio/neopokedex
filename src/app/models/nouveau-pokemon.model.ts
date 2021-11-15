
export class NouveauPokemonModel {
  constructor(
    public numero : number,
    public nom: string,
    public poids : number,
    public taille : number,
    public evolution : string,
    public typeId : number
  ) {}
}
