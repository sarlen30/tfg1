import {Component, OnInit} from '@angular/core';
import {ProductoService} from "../../../services/ProductoService";
import {Producto} from "../../../models/Producto";
import {CarritoService} from "../../../services/CarritoService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.scss']
})
export class DressComponent implements OnInit {

  constructor(private productosService: ProductoService, private carritoService: CarritoService, private router: Router,
  ) {
  }

  products: Array<Producto> = new Array<Producto>();

  ngOnInit() {
this.getProductos();
  }

  private getProductos(): void {
    this.productosService.findAllProducts().subscribe(
      (producto: Array<Producto>) => this.products = producto
    )
  }
  comprarProducto(producto: Producto): void {
      this.carritoService.agregarProducto(producto);
      this.router.navigate(['/carrito']);
  }
}
