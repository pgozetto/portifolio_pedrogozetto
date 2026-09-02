import Link from 'next/link';
import { ArrowRight, ArrowUpRight, AtSign, Mail, MessageCircle, MoveRight, Sparkles } from 'lucide-react';

const projects = [
  { number: '01', slug: 'atlas', name: 'Atlas Arquitetura', type: 'Institucional · 2026', tone: 'sand' },
  { number: '02', slug: 'nexo', name: 'Nexo Studio', type: 'Branding · 2026', tone: 'blue' },
  { number: '03', slug: 'ora', name: 'Ora Skincare', type: 'E-commerce · 2026', tone: 'lilac' },
  { number: '04', slug: 'casa-norte', name: 'Casa Norte', type: 'Hospitalidade · 2026', tone: 'orange' },
];

export default function Home() {
  return <main>
    <section className="hero" id="inicio">
      <nav className="nav shell">
        <Link href="#inicio" className="brand" aria-label="Orbe Studio, início"><span className="brand-mark" />ORBE<span>®</span></Link>
        <div className="nav-links"><Link href="#sobre">Estúdio</Link><Link href="#projetos">Projetos</Link></div>
        <Link className="nav-cta" href="#contato">Vamos criar <ArrowUpRight size={15} /></Link>
      </nav>
      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Agência digital independente</p>
          <h1>Sites que fazem a sua marca <em>ser lembrada.</em></h1>
          <p className="hero-description">Criamos experiências digitais com estratégia, design e uma atenção quase obsessiva pelos detalhes.</p>
          <div className="hero-actions"><Link href="#projetos" className="button button-primary">Ver projetos <ArrowRight size={17} /></Link><Link href="#sobre" className="text-link">Conheça o estúdio <MoveRight size={18} /></Link></div>
        </div>
        <div className="hero-art" aria-label="Escultura digital abstrata em azul e preto"><div className="art-label top-label">ORBE / DIGITAL FORM</div><img src="/agency-hero.png" alt="Composição abstrata em azul e preto" /><div className="art-label bottom-label">EST. 2026 &nbsp;—&nbsp; SÃO PAULO, BR</div></div>
      </div>
      <div className="hero-foot shell"><p>Estratégia · Design · Desenvolvimento</p><a href="#projetos"><span>SCROLL TO EXPLORE</span><ArrowRight size={17} /></a></div>
    </section>
    <section className="intro-section shell" id="sobre">
      <p className="section-index">01 / SOBRE</p>
      <div className="intro-content"><p className="eyebrow"><Sparkles size={14} /> Quem está por trás</p><h2>Sou Pedro. Designer e estrategista digital para marcas que não querem parecer com todo mundo.</h2><div className="intro-bottom"><p>Transformo boas ideias em sites claros, vivos e impossíveis de ignorar. Cada projeto começa entendendo a essência da marca — e termina com uma experiência que dá vontade de explorar.</p><div className="stats"><div><strong>04</strong><span>projetos em destaque</span></div><div><strong>100%</strong><span>feito sob medida</span></div></div></div></div>
    </section>
    <section className="work-section" id="projetos">
      <div className="shell work-heading"><div><p className="section-index">02 / PROJETOS</p><h2>Trabalhos<br /><em>selecionados.</em></h2></div><p>Quatro universos visuais criados para traduzir ambição em presença digital.</p></div>
      <div className="project-grid shell">{projects.map((project) => <Link href={`/projetos/${project.slug}`} className="project-card" key={project.slug}><div className={`project-visual ${project.tone}`}><span className="project-number">{project.number}</span><div className="mockup"><i /><b /><u /></div><span className="view-project">VER CASE <ArrowUpRight size={14} /></span></div><div className="project-meta"><div><p>{project.type}</p><h3>{project.name}</h3></div><ArrowUpRight size={20} /></div></Link>)}</div>
    </section>
    <section className="process shell"><p className="section-index">03 / PROCESSO</p><div className="process-content"><h2>Do primeiro “e se?”<br />ao clique que <em>converte.</em></h2><div className="process-list">{['Imersão', 'Direção criativa', 'Design & desenvolvimento'].map((item, index) => <div className="process-item" key={item}><span>0{index + 1}</span><p>{item}</p><ArrowUpRight size={18} /></div>)}</div></div></section>
    <footer id="contato"><div className="footer-orb" /><div className="shell footer-content"><p className="eyebrow"><span /> Próximo projeto</p><h2>Tem uma boa ideia?<br /><em>Vamos dar forma a ela.</em></h2><a className="footer-email" href="mailto:ola@orbe.studio">ola@orbe.studio <ArrowUpRight /></a><div className="footer-bottom"><p>© 2026 ORBE STUDIO</p><div><a href="https://wa.me/5511999999999"><MessageCircle size={17} /> WhatsApp</a><a href="mailto:ola@orbe.studio"><Mail size={17} /> E-mail</a><a href="#inicio"><AtSign size={17} /> Instagram</a></div></div></div></footer>
  </main>;
}
