import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];

  agregarProducto(producto: any) {
    this.carrito.push(producto);
  }

  obtenerCarrito(): any[] {
    return this.carrito;
  }

  limpiarCarrito() {
    this.carrito = [];
  }
}
