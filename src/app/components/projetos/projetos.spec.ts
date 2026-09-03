import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projetos } from './projetos';

describe('Projetos', () => {
  let component: Projetos;
  let fixture: ComponentFixture<Projetos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projetos],
    }).compileComponents();

    fixture = TestBed.createComponent(Projetos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com o filtro "Todos" e listar todos os 6 projetos', () => {
    expect(component.filtroAtivo()).toBe('Todos');
    expect(component.projetosFiltrados().length).toBe(6);
  });

  it('deve filtrar corretamente os projetos de Backend', () => {
    component.setFiltro('Backend');
    const filtrados = component.projetosFiltrados();
    expect(filtrados.length).toBe(4);
    expect(filtrados.every((p) => p.categories.includes('Backend'))).toBe(true);
  });

  it('deve filtrar corretamente os projetos de Frontend', () => {
    component.setFiltro('Frontend');
    const filtrados = component.projetosFiltrados();
    expect(filtrados.length).toBe(4);
    expect(filtrados.every((p) => p.categories.includes('Frontend'))).toBe(true);
  });

  it('deve filtrar corretamente os projetos de Automação', () => {
    component.setFiltro('Automação');
    const filtrados = component.projetosFiltrados();
    expect(filtrados.length).toBe(2);
    expect(filtrados.every((p) => p.categories.includes('Automação'))).toBe(true);
  });

  it('deve atualizar os cards renderizados no DOM ao mudar o filtro', async () => {
    component.setFiltro('Automação');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');
    expect(cards.length).toBe(2);
  });

  it('deve garantir que todos os links externos possuam rel="noopener noreferrer"', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const externalLinks = compiled.querySelectorAll('a[target="_blank"]');
    expect(externalLinks.length).toBeGreaterThan(0);

    externalLinks.forEach((link) => {
      const rel = link.getAttribute('rel');
      expect(rel).toContain('noopener');
      expect(rel).toContain('noreferrer');
    });
  });
});

