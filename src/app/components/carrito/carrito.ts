import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0;
  mostrarBoleta = false;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
    this.total = this.carrito.reduce((acc, item) => acc + item.precio, 0);
  }

  generarBoleta() {
    this.mostrarBoleta = true;
  }
}
