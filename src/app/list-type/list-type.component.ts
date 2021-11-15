import {Component, OnInit} from '@angular/core';
import {TypeFacade} from "./type.facade";
import {TypeModel} from "../models/type.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-type',
  templateUrl: './list-type.component.html',
  styleUrls: ['./list-type.component.scss']
})
export class ListTypeComponent implements OnInit {
  $listType : Observable<TypeModel[]> = new Observable<TypeModel[]>();
  nouveauType : boolean = false;

  constructor(private typeFacade : TypeFacade,
              private router : Router) { }

  ngOnInit(): void {
    this.$listType = this.typeFacade.findAll();
  }

  ouvrirFormulaireNouveauType() {
    this.nouveauType = true;
  }

  enregistrerNouveauType(nouveauNomType: string) {
    console.log("Liste type component - value nouveau nom type : ",nouveauNomType)
    this.typeFacade.enregistrerNouveauType(nouveauNomType);
    this.nouveauType = false;
  }

  annuler(event: void) {
    this.nouveauType = false;
  }
}
