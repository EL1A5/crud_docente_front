import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from '../models/docente.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class DocenteService {

  private apiServerURL = environment.apiBaseURL;

  constructor(private http:HttpClient) { }
 

  listaDocente(filtro:string):Observable<Docente[]> {
      return this.http.get<Docente[]>(`${this.apiServerURL}/rest/crudDocente/listaDocentePorNombreLike/`+ filtro);
  }  

  registraDocente(obj: Docente): Observable<any>{
      return this.http.post(`${this.apiServerURL}/rest/crudDocente/registraDocente`, obj);
  }

  actualizaDocente(obj: Docente): Observable<any>{
    return this.http.put(`${this.apiServerURL}/rest/crudDocente/actualizaDocente`, obj);
  }

  eliminaDocente(id: any): Observable<any>{
    return this.http.delete(`${this.apiServerURL}/rest/crudDocente/eliminaDocente/` + id);
  }

}
