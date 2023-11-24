import { Component } from '@angular/core';

@Component({
  selector: 'app-empresas-colaboradoras',
  templateUrl: './empresas-colaboradoras.component.html',
  styleUrls: ['./empresas-colaboradoras.component.css']
})
export class EmpresasColaboradorasComponent {
  empresas = [
    {
      nombre: 'Empresa 1',
      logo: 'ruta/logo-empresa1.jpg',
      descripcion: 'Descripción de la Empresa 1.',
      mostrarDescripcion: false
    },
    {
      nombre: 'Empresa 2',
      logo: 'ruta/logo-empresa2.jpg',
      descripcion: 'Descripción de la Empresa 2.',
      mostrarDescripcion: false
    },
    // Agrega más empresas según sea necesario
  ];

  toggleDescripcion(empresa: any): void {
    empresa.mostrarDescripcion = !empresa.mostrarDescripcion;
  }
}