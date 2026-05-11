import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Sobre } from './components/sobre/sobre';
import { Expertise } from './components/expertise/expertise';
import { Projetos } from './components/projetos/projetos';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Hero,
    Sobre,
    Expertise,
    Projetos,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'meu-portfolio';
}