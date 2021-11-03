import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RegionesColombiaResponseItem {
  region: String;
  c_digo_dane_del_departamento: String;
  departamento: String;
  c_digo_dane_del_municipio: String;
  municipio: String;
}
export type RegionesColombiaResponse = RegionesColombiaResponseItem[];

@Injectable({
  providedIn: 'root',
})
export class RegionesColombiaService {
  constructor(private http: HttpClient) {}
  getData(): Observable<RegionesColombiaResponse> {
    return this.http.get<RegionesColombiaResponse>(
      'https://www.datos.gov.co/resource/xdk5-pm3f.json'
    );
  }
}
