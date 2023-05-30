import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto} from "../models/Producto";
import {PedidoDto} from "../models/PedidoDto";
import {Usuario} from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private httpClient: HttpClient) {}


  crearPedido(pedidoDto: PedidoDto): Observable<void> {
    return this.httpClient.post<void>(`http://localhost:8080/pedido/create`, pedidoDto);
  }
}
