import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    imagen: ['', [Validators.required]],
    });

  id: String = "";

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productoServicio: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.cargarProducto();
  }

  cargarProducto(){
    this.productoServicio.buscarProducto(this.id)
    .subscribe(producto => {
    this.fgValidator.controls["id"].setValue(producto.id);
    this.fgValidator.controls["nombre"].setValue(producto.nombre);
    this.fgValidator.controls["precio"].setValue(producto.precio);
    this.fgValidator.controls["imagen"].setValue(producto.imagen);
    });
  }

  actualizarProducto(){
    let producto = new Producto();
    producto.id = this.fgValidator.controls["id"].value;
    producto.nombre = this.fgValidator.controls["nombre"].value;
    producto.precio = parseInt(this.fgValidator.controls["precio"].value);
    producto.imagen = this.fgValidator.controls["imagen"].value;
    this.productoServicio.actualizarProducto(producto).subscribe({
      next: (producto) => {
        alert("Producto actualizado");
        this.router.navigate(["/productos"]);
      },
      error: (error) => {alert("error actualizando el producto");}
    });
  }

}
