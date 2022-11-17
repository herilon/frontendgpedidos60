import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    imagen: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private productoServicio: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  crearProducto(){
    let producto = new Producto();
    producto.nombre = this.fgValidator.controls["nombre"].value;
    producto.precio = parseInt(this.fgValidator.controls["precio"].value);
    producto.imagen = this.fgValidator.controls["imagen"].value;
    this.productoServicio.crearProducto(producto).subscribe({
      next: (producto) => {
        alert("Producto almacenado");
        this.router.navigate(["/productos"]);
      },
      error: (error) => {alert("error almacenando el producto");}
    })
  }

}
