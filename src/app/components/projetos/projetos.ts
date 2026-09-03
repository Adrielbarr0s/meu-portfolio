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
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      imageAlt: 'Dashboard BilhetePro',
      categories: ['Backend', 'Frontend', 'Automação'],
      techs: ['Java', 'Spring Boot', 'Angular', 'n8n'],
      githubUrl: 'https://github.com/Adrielbarr0s/BilhetePro',
      githubLabel: 'GitHub',
    },
    {
      id: 'nikole-cristina',
      title: 'Advocacia Nikole Cristina',
      description: 'Plataforma institucional de alta performance para serviços jurídicos, com foco em conversão e UX premium.',
      tag: 'Frontend',
      status: 'live',
      statusText: 'Live',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800',
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
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
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
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
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
      image: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=800',
      imageAlt: 'Registro Pet',
      categories: ['Backend', 'Frontend'],
      techs: ['Angular', 'Node.js', 'MySQL', 'Express'],
      liveUrl: 'https://pet-register-omega.vercel.app/',
      githubUrl: 'https://github.com/Adrielbarr0s/pet-register',
      githubLabel: 'GitHub',
    },
    {
      id: 'api-java',
      title: 'API Robusta Java 21',
      description: 'Arquitetura de microsserviços containerizada focada em alta escalabilidade e conformidade técnica.',
      tag: 'Backend',
      status: 'dev',
      statusText: 'In Progress',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800',
      imageAlt: 'Código API Java',
      categories: ['Backend'],
      techs: ['Java 21', 'Docker', 'Maven', 'PostgreSQL'],
      githubUrl: 'https://github.com/Adrielbarr0s/primeiro-exemplo',
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


