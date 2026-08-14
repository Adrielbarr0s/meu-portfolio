import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  words: string[] = [
    'Desenvolvedor Java Júnior',
    'Desenvolvedor Backend',
    'Focado em Java & Spring Boot',
    'Entusiasta em Spring & Angular'
  ];
  dynamicText: string = '';
  private wordIndex: number = 0;
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private timer: any = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Roda o timer fora da zona para não travar a hidratação do SSR
      this.ngZone.runOutsideAngular(() => {
        this.typeLoop();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private typeLoop(): void {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    const nextText = currentWord.substring(0, this.charIndex);

    // Notifica o Angular para atualizar o template
    this.ngZone.run(() => {
      this.dynamicText = nextText;
      this.cdr.detectChanges();
    });

    let speed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      speed = 400;
    }

    this.timer = setTimeout(() => this.typeLoop(), speed);
  }
}
