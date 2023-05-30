import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Producto} from "../models/Producto";
import {Usuario} from "../models/Usuario";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  //Methods
  create(data: Usuario): Observable<void>{
    return this.httpClient.post<void>(`http://localhost:8080/usuario/create`,data );
  }

  login(name :string){
    return this.httpClient.get<Usuario>(`http://localhost:8080/usuario/detailname/${name}`);
  }

}
