import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}/productos`);
  }

  crearProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(`${this.url}/productos`, producto);
  }

  buscarProducto(id: String): Observable<Producto>{
    return this.http.get<Producto>(`${this.url}/productos/${id}`);
  }

  actualizarProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.url}/productos/${producto.id}`, producto);
  }
}
