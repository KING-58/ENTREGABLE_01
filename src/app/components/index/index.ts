import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class IndexComponent {
  comidas = [
    { nombre: 'Ají de Gallina', precio: 18, imagen: 'AJI DE GALLINA.jpg' },
    { nombre: 'Ceviche', precio: 22, imagen: 'CEVICHE.jpg' },
    { nombre: 'Lomo Saltado', precio: 20, imagen: 'LOMO SALTADO.jpg' },
    { nombre: 'Arroz Chaufa', precio: 17, imagen: 'ARROZ CHAUFA.jpg' },
    { nombre: 'Papa a la Huancaína', precio: 12, imagen: 'PAPA A LA HUANCAINA.jpg' },
    { nombre: 'Anticuchos', precio: 15, imagen: 'ANTICUCHOS.jpg' },
    { nombre: 'Pollo a la Brasa', precio: 25, imagen: 'POLLO A LA BRASA.jpg' },
    { nombre: 'Tallarines Verdes', precio: 14, imagen: 'TALLARINES VERDES.jpg' },
    { nombre: 'Ocopa Arequipeña', precio: 13, imagen: 'OCOPA.jpg' },
    { nombre: 'MONSTRITO', precio: 13, imagen: 'MONSTRITO.jpg' },
    { nombre: 'CHICHARRON', precio: 13, imagen: 'CHICHARRON.jpg' },
    { nombre: 'CAUSA LIMEÑA', precio: 10, imagen: 'CAUSA LIMEÑA.jpg' }
  ];

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(comida: any) {
    this.carritoService.agregarProducto(comida);
    alert(`${comida.nombre} agregado al carrito`);
  }
}
