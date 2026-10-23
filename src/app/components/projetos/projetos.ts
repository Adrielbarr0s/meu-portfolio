import { Component, signal, computed } from '@angular/core';

export type ProjectCategory = 'Backend' | 'Frontend' | 'Automação';

export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  status: 'live' | 'dev';
  statusText: string;
  image: string;
  imageAlt: string;
  categories: ProjectCategory[];
  techs: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubLabel?: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {
  readonly filtros: readonly string[] = ['Todos', 'Backend', 'Frontend', 'Automação'];
  readonly filtroAtivo = signal<string>('Todos');

  readonly projetos = signal<Project[]>([
    {
      id: 'bilhetepro',
      title: 'BilhetePro',
      description: 'Aplicação escalável focada em gestão e automação de processos.',
      tag: 'Fullstack & Automação',
      status: 'dev',
      statusText: 'Em Desenvolvimento',
      image: 'assets/projects/bilhetepro.png',
      imageAlt: 'Dashboard BilhetePro',
      categories: ['Backend', 'Frontend', 'Automação'],
      techs: ['Java', 'Spring Boot', 'Angular', 'n8n'],
      githubUrl: 'https://github.com/Adrielbarr0s/BilhetePro',
      githubLabel: 'GitHub',
    },
    {
      id: 'euqueiroz',
      title: 'euqueiroz · Audiovisual & Estratégia',
      description: 'Plataforma institucional de alta conversão para direção criativa e audiovisual, com visor cinematográfico interativo (Color Grading A/B).',
      tag: 'Frontend',
      status: 'live',
      statusText: 'Live',
      image: 'assets/projects/euqueiroz.png',
      imageAlt: 'euqueiroz Audiovisual e Direção Criativa',
      categories: ['Frontend'],
      techs: ['Angular', 'TypeScript', 'CSS3', 'Vercel'],
      liveUrl: 'https://euqueiroz.vercel.app/',
      githubUrl: 'https://github.com/Adrielbarr0s/euqueiroz-portfolio',
      githubLabel: 'GitHub',
    },
    {
      id: 'nikole-cristina',
      title: 'Advocacia Nikole Cristina',
      description: 'Plataforma institucional de alta performance para serviços jurídicos, com foco em conversão e UX premium.',
      tag: 'Frontend',
      status: 'live',
      statusText: 'Live',
      image: 'assets/projects/nikole-cristina.png',
      imageAlt: 'Nikole Cristina Advocacia',
      categories: ['Frontend'],
      techs: ['Angular', 'TypeScript', 'SCSS', 'Vercel'],
      liveUrl: 'https://nikole-cristina-advocacia.vercel.app/',
      githubUrl: 'https://github.com/Adrielbarr0s/nikole-cristina-advocacia',
      githubLabel: 'GitHub',
    },
    {
      id: 'violencia-domestica',
      title: 'Combate à Violência',
      description: 'Plataforma colaborativa para conscientização e apoio, com foco em acessibilidade e segurança da informação.',
      tag: 'Social Impact',
      status: 'live',
      statusText: 'Live',
      image: 'assets/projects/violencia-domestica.png',
      imageAlt: 'Conscientização Social',
      categories: ['Frontend'],
      techs: ['Angular', 'TypeScript', 'CI/CD', 'SCSS'],
      liveUrl: 'https://violencia-domestica-g7xn.vercel.app/',
      githubUrl: 'https://github.com/Adrielbarr0s/violencia-domestica',
      githubLabel: 'GitHub',
    },
    {
      id: 'ai-agents',
      title: 'Laboratório de Agentes IA',
      description: 'Integrações avançadas com Google Gemini, pipelines de ETL e automação de rotinas complexas via n8n.',
      tag: 'AI & Automation',
      status: 'live',
      statusText: 'Active',
      image: 'assets/projects/ai-agents.png',
      imageAlt: 'Agentes de IA',
      categories: ['Automação', 'Backend'],
      techs: ['n8n', 'Gemini AI', 'PostgreSQL', 'Python'],
      githubUrl: 'https://github.com/Adrielbarr0s/ai-agents-n8n',
      githubLabel: 'GitHub Repo',
    },
    {
      id: 'pet-register',
      title: 'Sistema de Registro Pet',
      description: 'Aplicação completa para gerenciamento de pets, com frontend em Angular e backend robusto em Node.js.',
      tag: 'Fullstack',
      status: 'live',
      statusText: 'Live',
      image: 'assets/projects/pet-register.png',
      imageAlt: 'Registro Pet',
      categories: ['Backend', 'Frontend'],
      techs: ['Angular', 'Node.js', 'MySQL', 'Express'],
      liveUrl: 'https://pet-register-omega.vercel.app/',
      githubUrl: 'https://github.com/Adrielbarr0s/pet-register',
      githubLabel: 'GitHub',
    },
    {
      id: 'ecommerce-api',
      title: 'API REST E-Commerce',
      description: 'API RESTful desenvolvida em Java 21 e Spring Boot com autenticação JWT, PostgreSQL, Swagger e testes automatizados.',
      tag: 'Backend',
      status: 'live',
      statusText: 'Live',
      image: 'assets/projects/ecommerce-api.png',
      imageAlt: 'API REST E-Commerce',
      categories: ['Backend'],
      techs: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JWT'],
      githubUrl: 'https://github.com/Adrielbarr0s/ecommerce-api',
      githubLabel: 'GitHub Repo',
    },
    {
      id: 'spring-cloud-microservices',
      title: 'Microsserviços Spring Cloud',
      description: 'Arquitetura distribuída com Eureka Service Discovery, Spring Cloud Gateway, Config Server centralizado, JWT e comunicação integrada.',
      tag: 'Backend & Cloud',
      status: 'live',
      statusText: 'Live',
      image: 'assets/projects/spring-cloud-microservices.png',
      imageAlt: 'Arquitetura de Microsserviços Spring Cloud',
      categories: ['Backend'],
      techs: ['Spring Cloud', 'Eureka', 'Gateway', 'JWT'],
      githubUrl: 'https://github.com/Adrielbarr0s/Spring-cloud-microservices-architecture',
      githubLabel: 'GitHub Repo',
    },
  ]);

  readonly projetosFiltrados = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') {
      return this.projetos();
    }
    return this.projetos().filter((p) => p.categories.includes(filtro as ProjectCategory));
  });

  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}


