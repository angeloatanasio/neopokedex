import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PokemonFacade} from "../pokemon.facade";
import {TypeFacade} from "../../list-type/type.facade";
import {Observable} from "rxjs";
import {TypeModel} from "../../models/type.model";
import {PokemonModel} from "../../models/pokemon.model";
import {ExisteValidatorService} from "../../shared/validators/existe-validator.service";
import {PokemonApi} from "../pokemon-api";

@Component({
  selector: 'app-formulaire-nouveau-pokemon',
  templateUrl: './formulaire-nouveau-pokemon.component.html',
  styleUrls: ['./formulaire-nouveau-pokemon.component.scss']

})
export class FormulaireNouveauPokemonComponent implements OnInit{

  formulairePokemon : FormGroup = new FormGroup({});
  numero : FormControl;
  nom : FormControl;
  type : FormControl;
  image : FormControl;
  poids : FormControl;
  taille : FormControl;
  evolution : FormControl;
  $listeTypesExistants : Observable<TypeModel[]> = new Observable<TypeModel[]>();
  $listePokemonExistants : Observable<PokemonModel[]> = new Observable<PokemonModel[]>();
  @Output() nouveauPokemonEvent : EventEmitter<{data: FormGroup, formData : FormData}> =  new EventEmitter<{data: FormGroup, formData : FormData}>();
  @Output() annulerEnregistrementPokemonEvent : EventEmitter<void> =  new EventEmitter<void>();
  fichierASauvegarder :File = new File([], '');
  exclureNom : string = '';
  nbMaxNumeroAutorise: number = 5;

  constructor(private builder : FormBuilder,
              private pokemonFacade : PokemonFacade,
              private typeFacade : TypeFacade,
              private existeValidatorService : ExisteValidatorService) {
    this.numero = new FormControl('', [Validators.pattern('[0-9]*'), Validators.maxLength(this.nbMaxNumeroAutorise), Validators.required]);
    this.nom  = new FormControl('',  [Validators.pattern('[a-zA-zéè\'àç^ ]*'), Validators.required]);
    this.type  = new FormControl('', Validators.required);
    this.image  = new FormControl('');
    this.poids  = new FormControl(0,  Validators.pattern('^[0-9]+(([\\.\\,])+[0-9]{1,1})?$'));
    this.taille = new FormControl(0, Validators.pattern('^[0-9]+(([\\.\\,])+[0-9]{1,2})?$'));
    this.evolution  = new FormControl('');
  }

  ngOnInit(): void {
    this.formulairePokemon = this.builder.group({
      numero: this.numero,
      nom: this.nom,
      type: this.type,
      image: this.image,
      poids: this.poids,
      taille: this.taille,
      evolution: this.evolution,
    });
    this.nom.valueChanges.subscribe(nouveauNom => {
      if(this.nom.untouched) {
        this.nom.setAsyncValidators(this.existeValidatorService.ValiderSiNumeroOuNomExiste(nouveauNom, PokemonApi));
      }
    })

    this.numero.valueChanges.subscribe(nouveauNumero => {
      if(this.numero.untouched) {
        this.numero.setAsyncValidators(this.existeValidatorService.ValiderSiNumeroOuNomExiste(nouveauNumero, PokemonApi))
      }
    })
    this.$listeTypesExistants = this.typeFacade.findAll();
    this.$listePokemonExistants = this.pokemonFacade.listePokemonsState();
  }

  validerNouveauPokemon() {
    if(this.formulairePokemon.valid) {
      const formData : FormData = new FormData();
      if(this.fichierASauvegarder && this.fichierASauvegarder.name){
        formData.append('file', this.fichierASauvegarder, this.fichierASauvegarder.name);
      }
      this.nouveauPokemonEvent.emit( {
        data : this.formulairePokemon,
        formData
      });
    }
  }

  annulerEnregistrementPokemon() {
    this.annulerEnregistrementPokemonEvent.emit();
  }

  uploadFile(uploadFile: File) {
    this.fichierASauvegarder = uploadFile;
  }
}
