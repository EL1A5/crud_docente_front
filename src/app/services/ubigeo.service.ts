import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubigeo } from '../models/ubigeo.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UbigeoService {

  private apiServerURL = environment.apiBaseURL;

  constructor(private http: HttpClient) {}

  listarDepartamento(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerURL}/rest/util/listaDepartamentos`);
  }

  listaProvincias(paramDep: any): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerURL}/rest/util/listaProvincias/` + paramDep);
  }

  listaDistritos(paramDep: any, paramProv: any): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${this.apiServerURL}/rest/util/listaDistritos/` + paramDep + `/` + paramProv);
  }
}
