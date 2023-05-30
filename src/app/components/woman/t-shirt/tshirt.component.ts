import {Component, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Producto} from "../../../models/Producto";
import {ProductoService} from "../../../services/ProductoService";
import {CarritoService} from "../../../services/CarritoService";
import {Router} from "@angular/router";
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.scss']
})
export class TshirtComponent implements OnInit {
  products: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private router: Router
) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.findAllProducts().subscribe(
      (productos: Producto[]) => {
        this.products = productos;
      },
      (error: any) => {
        console.error("Error al obtener los productos:", error);
      }
    );
  }

  comprarProducto(producto: Producto): void {
    this.carritoService.agregarProducto(producto);
    this.router.navigate(['/carrito']);
  }
}

