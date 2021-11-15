import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ExisteValidatorService} from "../../shared/validators/existe-validator.service";
import {TypeApi} from "../type.api";

@Component({
  selector: 'app-formulaire-nouveau-type',
  templateUrl: './formulaire-nouveau-type.component.html',
  styleUrls: ['./formulaire-nouveau-type.component.scss']
})
export class FormulaireNouveauTypeComponent implements OnInit {
  @Output() nouveauTypeEvent : EventEmitter<string> = new EventEmitter<string>();
  @Output() annulerEnregistrementEvent : EventEmitter<void> = new EventEmitter<void>();
  formulaireNouveauType : FormGroup;
  nouveauNomType: FormControl;

  constructor(private builder : FormBuilder,
              private existeValidatorService : ExisteValidatorService) {
    this.formulaireNouveauType = new FormGroup({});
    this.nouveauNomType = new FormControl('',[Validators.pattern('[a-zA-Zéèà\'^ ]*'), Validators.required])
  }

  ngOnInit(): void {
    this.formulaireNouveauType = this.builder.group({
      nouveauNomType : this.nouveauNomType
    });

    this.nouveauNomType.valueChanges.subscribe(nouveauNom =>{
      this.nouveauNomType.setAsyncValidators(this.existeValidatorService.ValiderSiNumeroOuNomExiste(nouveauNom, TypeApi))
    })
  }

  validerNouveauType() {
    if(this.formulaireNouveauType.valid){
      this.nouveauTypeEvent.emit(this.nouveauNomType.value);
    }
  }

  annulerEnregistrement() {
    this.annulerEnregistrementEvent.emit();
  }
}
