import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com o menu mobile fechado e não scrollado', () => {
    expect(component.isMenuOpen()).toBe(false);
    expect(component.isScrolled()).toBe(false);
  });

  it('deve alternar o menu mobile via toggleMenu() e fechar via closeMenu()', () => {
    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(true);

    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(false);

    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(true);

    component.closeMenu();
    expect(component.isMenuOpen()).toBe(false);
  });

  it('deve atualizar isScrolled ao simular rolagem de página', () => {
    // Simula scrollY > 20
    Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
    window.dispatchEvent(new Event('scroll'));
    expect(component.isScrolled()).toBe(true);

    // Simula volta ao topo scrollY <= 20
    Object.defineProperty(window, 'scrollY', { value: 10, writable: true });
    window.dispatchEvent(new Event('scroll'));
    expect(component.isScrolled()).toBe(false);
  });
});

