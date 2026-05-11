import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit {

  roles: string[] = [
    "Analista de Sistemas",
    "Especialista Java 21",
    "Dev Full Stack",
    "Arquiteto de Soluções"
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.typeWriter();
    }
  }

  typeWriter() {
    const textElement = document.querySelector('.dynamic-text');
    if (!textElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 60; // Velocidade de escrita ágil

    const type = () => {
      const currentRole = this.roles[roleIndex];

      if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 25; // Apaga quase instantaneamente
      } else {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 60;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 1200; // Pausa curta ao terminar de escrever
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % this.roles.length;
        typeSpeed = 400;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  }
}