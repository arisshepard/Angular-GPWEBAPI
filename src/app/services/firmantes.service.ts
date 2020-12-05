import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirmantesService {
  private url = '/api';

  constructor(private http: HttpClient) {
    console.log('Servicio firmantes activado');
  }

  getFirmantes(): Observable<void> {
    return this.getQuery('Firmantes/Visibilidad').pipe(
      map((respuesta) => {
        console.log('Hola Mundo');
      })
    );
  }

  private getHeaders(): HttpHeaders {
    const token = '44d660ab912f40e2b3aeb8077f5ad478';

    const headers = new HttpHeaders();

    console.log(headers);

    return headers;
  }

  private getQuery(query: string): Observable<any> {
    const url = `${this.url}/${query}`;
    const headers = this.getHeaders();

    console.log('estamos aqui');

    return this.http.get(
      'https://comercialapi.azure-api.net/int/gxloop/api/Firmantes/Visibilidad'
    );
  }
}
