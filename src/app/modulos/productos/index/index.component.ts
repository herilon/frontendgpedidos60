import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  productos: Producto[] = [];
  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.productoServicio.obtenerProductos()
    .subscribe(productos => this.productos = productos);
  }

}
