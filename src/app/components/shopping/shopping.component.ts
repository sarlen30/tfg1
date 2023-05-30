import {Component, Input, OnInit} from '@angular/core';
import {CarritoService} from "../../services/CarritoService";
import {Producto} from "../../models/Producto";
import {Router} from "@angular/router";
import {PedidoService} from "../../services/PedidoService";
import {AuthService} from "../../services/AuthService";
import {LoginService} from "../../services/LoginService";
import {Usuario} from "../../models/Usuario";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  productos: Producto[];
  mensajeCompra: string= '';

  constructor(private carritoService: CarritoService, private router: Router,
              private pedidoService: PedidoService,
              private authService: AuthService,
          ) {
    this.productos = [];
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productos = this.carritoService.getProductos();
  }

  eliminarProducto(producto: Producto): void {
    this.carritoService.eliminarProducto(producto);
    this.obtenerProductos();
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
    this.obtenerProductos();
  }

  irAHome() {
    this.router.navigate(['']);
  }

  seguirComprando() {
    this.router.navigate(['dress']);
  }

  realizarPedido(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

   const idUser=  this.authService.getIdUsuario()
    const pedidoDto:any = {
      id: idUser,
      fecha: new Date().toISOString(),
    };
    console.log(pedidoDto)

    this.pedidoService.crearPedido(pedidoDto).subscribe(
      (response) => {
        console.log('Pedido creado exitosamente');
        this.carritoService.vaciarCarrito();
        this.obtenerProductos();
        this.mensajeCompra= 'Su compra se ha realizado con exito'
      },
      (error) => {
        console.error('Error al crear el pedido', error);
      }
    );
  }

}
