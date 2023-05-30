import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Producto} from "../models/Producto";


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private httpClient: HttpClient
  ) {    console.log(this.findAllProducts(),'hola')
  }

  //Methods
  findAllProducts(): Observable<Array<Producto>>{
    return this.httpClient.get<Array<Producto>>(`http://localhost:8080/producto/lista`);
  }
}
