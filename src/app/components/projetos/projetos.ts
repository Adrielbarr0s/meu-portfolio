import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {
  filtroAtivo: string = 'Todos';

  setFiltro(categoria: string) {
    this.filtroAtivo = categoria;
  }
}

