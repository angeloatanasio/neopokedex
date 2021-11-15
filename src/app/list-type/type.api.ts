import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypeModel} from "../models/type.model";
import {NouveauTypeModel} from "../models/nouveau-type.model";
import {Api} from "../shared/api";

@Injectable({
  providedIn: 'root'
})
export class TypeApi extends Api{

  API_BACK = 'http://localhost:8080/api/type';

  constructor(private http: HttpClient){
    super();
  }

  findAll() : Observable<TypeModel[]> {
     return this.http.get<TypeModel[]>(`${this.API_BACK}/findAll`);
  }

  enregistrerNouveauType(nouveauType: NouveauTypeModel) :Observable<TypeModel>{
    return this.http.post<TypeModel>(`${this.API_BACK}/save`, nouveauType);
  }

  existeParNomOuNumero(data : string | number) : Observable<boolean> {
    return this.http.get<boolean>(`${this.API_BACK}/existe/${data}`)
  }
}
