import { Injectable } from '@angular/core';
import {Producto} from "../models/Producto";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: Producto[];

  constructor() {
    this.productos = [];
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  eliminarProducto(producto: Producto): void {
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }

  getProductos(): Producto[] {
    return this.productos;
  }

  vaciarCarrito(): void {
    this.productos = [];
  }
}
