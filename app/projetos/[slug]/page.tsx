import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const cases = {
  atlas: { name: 'Atlas Arquitetura', type: 'Institucional', number: '01', color: '#a79578', description: 'Uma plataforma editorial para tornar a arquitetura sentida antes mesmo de ser visitada.' },
  nexo: { name: 'Nexo Studio', type: 'Branding', number: '02', color: '#2361f0', description: 'Um sistema digital tão inquieto, inteligente e expressivo quanto o próprio estúdio.' },
  ora: { name: 'Ora Skincare', type: 'E-commerce', number: '03', color: '#a78ab9', description: 'Uma experiência de compra pensada para tornar o autocuidado mais sensorial e mais simples.' },
  'casa-norte': { name: 'Casa Norte', type: 'Hospitalidade', number: '04', color: '#bc623a', description: 'Uma viagem visual que convida o visitante a desacelerar antes mesmo da reserva.' },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = cases[slug as keyof typeof cases] ?? cases.atlas;
  return <main className="case-page" style={{ '--case': project.color } as React.CSSProperties}>
    <nav className="nav nav-wide"><Link href="/" className="brand"><span className="brand-mark" />PEDRO GOZETTO</Link><Link href="/#projetos" className="nav-cta"><ArrowLeft size={15} /> Todos os projetos</Link></nav>
    <section className="case-hero shell"><p className="eyebrow"><span /> {project.number} / {project.type}</p><h1>{project.name}</h1><p>{project.description}</p><div className="case-art"><div className="case-window"><i /><b /><u /></div><small>CASE STUDY · 2026</small></div></section>
    <section className="case-details shell"><div><p className="section-index">DESAFIO</p><h2>Uma presença à altura do que a marca já entrega no mundo real.</h2></div><div><p className="section-index">RESPOSTA</p><p>Construímos uma experiência de navegação limpa, marcante e pensada para colocar as histórias, o olhar e o ritmo da marca no centro de cada tela.</p><Link href="/#contato">Começar um projeto <ArrowUpRight size={17} /></Link></div></section>
  </main>;
}
