import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';

const cases = {
  'pedro-gozetto-judo': {
    name: 'Pedro Gozetto Judô',
    type: 'Criador de Conteúdo',
    number: '01',
    color: '#47c8ff',
    url: 'https://site-pgozettojudo.vercel.app/',
    description:
      'Uma presença digital enérgica para apresentar conteúdo, trajetória e projetos ligados ao judô.',
  },
  'tatiane-camilo': {
    name: 'Tatiane Camilo',
    type: 'Psicóloga',
    number: '02',
    color: '#c97d6d',
    url: 'https://site-tatiane-w2q6.vercel.app/',
    description:
      'Uma experiência acolhedora e clara para aproximar pessoas do cuidado psicológico.',
  },
  'doutor-minhoca': {
    name: 'Doutor Minhoca',
    type: 'Minhocultor',
    number: '03',
    color: '#baf134',
    url: 'https://doutorminhoca.vercel.app/',
    description:
      'Um site de identidade orgânica que transforma conhecimento sobre minhocultura em uma experiência acessível.',
  },
  'gaiotto-automotivo': {
    name: 'Gaiotto Automotivo',
    type: 'Mecânica Automotiva',
    number: '04',
    color: '#ff842c',
    url: 'https://site-mecanica-gaiotto.vercel.app/',
    description:
      'Uma vitrine digital direta e robusta para comunicar confiança, serviços e atendimento automotivo.',
  },
};

export function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project =
    cases[slug as keyof typeof cases] ?? cases['pedro-gozetto-judo'];
  return (
    <main
      className="case-page"
      style={{ '--case': project.color } as React.CSSProperties}
    >
      <nav className="nav nav-wide">
        <Link href="/" className="brand">
          <span className="brand-mark" />
          PEDRO GOZETTO
        </Link>
        <Link href="/#projetos" className="nav-cta">
          <ArrowLeft size={15} /> Todos os projetos
        </Link>
      </nav>
      <section className="case-hero shell">
        <p className="eyebrow">
          <span /> {project.number} / {project.type}
        </p>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <a
          className="case-live-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          Visitar site <ExternalLink size={17} />
        </a>
        <div className="case-art">
          <div className="case-window">
            <i />
            <b />
            <u />
          </div>
          <small>PROJETO DIGITAL · 2026</small>
        </div>
      </section>
      <section className="case-details shell">
        <div>
          <p className="section-index">DESAFIO</p>
          <h2>
            Uma presença à altura do que a marca já entrega no mundo real.
          </h2>
        </div>
        <div>
          <p className="section-index">RESPOSTA</p>
          <p>
            Construímos uma experiência de navegação limpa, marcante e pensada
            para colocar as histórias, o olhar e o ritmo da marca no centro de
            cada tela.
          </p>
          <a href={project.url} target="_blank" rel="noreferrer">
            Conhecer o projeto <ArrowUpRight size={17} />
          </a>
          <br />
          <Link href="/#contato">
            Começar um projeto <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
