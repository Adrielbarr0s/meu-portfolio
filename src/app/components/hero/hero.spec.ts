import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com o título principal pré-definido para otimização de SEO no SSR', () => {
    expect(component.dynamicText).toBe('Desenvolvedor Java Júnior');
  });

  it('deve limpar o timer de animação ao destruir o componente (ngOnDestroy)', () => {
    const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');
    fixture.destroy();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});

