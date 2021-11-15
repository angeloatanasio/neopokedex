import {Injectable} from "@angular/core";
import {TypeApi} from "./type.api";
import {BehaviorSubject, Observable} from "rxjs";
import {TypeModel} from "../models/type.model";
import {NouveauTypeModel} from "../models/nouveau-type.model";

@Injectable({
  providedIn:'root',
})
export class TypeFacade {
  $listTypeState : BehaviorSubject<Array<TypeModel>> = new BehaviorSubject<TypeModel[]>([]);

  constructor(private typeApi : TypeApi) {}

  findAll() : Observable<TypeModel[]> {
    this.typeApi.findAll()
      .subscribe((types) => {
        types.sort((typeA, typeB) => typeA.nom.localeCompare(typeB.nom, undefined, {ignorePunctuation: true})),
        this.$listTypeState.next(types)
      })

    return this.listeTypeState();
  }

  listeTypeState() : Observable<TypeModel[]> {
    return this.$listTypeState.asObservable();
  }

  enregistrerNouveauType(nouveauNomType: string) : Observable<TypeModel[]>{
    const listeTypes = [...this.$listTypeState.getValue()];

    const nouveauTypeASauvegarder = new NouveauTypeModel(nouveauNomType);
    this.typeApi.enregistrerNouveauType(nouveauTypeASauvegarder)
      .subscribe((nouveautype : TypeModel) => {
        listeTypes.push(nouveautype)
        listeTypes.sort((typeA, typeB) => typeA.nom.localeCompare(typeB.nom, undefined, {ignorePunctuation: true}));
      })
    this.$listTypeState.next(listeTypes);

    return this.listeTypeState();
  }
}
