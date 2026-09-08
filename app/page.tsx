"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, MoveRight, Sparkles } from 'lucide-react';

const projects = [
  { number: '01', slug: 'atlas', name: 'Atlas Arquitetura', type: 'Institucional · 2026', tone: 'sand' },
  { number: '02', slug: 'nexo', name: 'Nexo Studio', type: 'Branding · 2026', tone: 'blue' },
  { number: '03', slug: 'ora', name: 'Ora Skincare', type: 'E-commerce · 2026', tone: 'lilac' },
  { number: '04', slug: 'casa-norte', name: 'Casa Norte', type: 'Hospitalidade · 2026', tone: 'orange' },
];

const whatsappUrl = 'https://wa.me/5519989299432?text=Olá%2C%20Pedro!%20Tenho%20interesse%20em%20criar%20um%20site%20para%20minha%20marca.';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    );
    revealItems.forEach((item) => observer.observe(item));

    const updateParallax = () => {
      heroRef.current?.style.setProperty('--hero-offset', `${Math.min(window.scrollY * 0.18, 96)}px`);
    };
    const movePortrait = (event: PointerEvent) => {
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 18}px`);
      hero.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 18}px`);
    };
    const resetPortrait = () => {
      heroRef.current?.style.setProperty('--pointer-x', '0px');
      heroRef.current?.style.setProperty('--pointer-y', '0px');
    };
    updateParallax();
    window.addEventListener('scroll', updateParallax, { passive: true });
    heroRef.current?.addEventListener('pointermove', movePortrait);
    heroRef.current?.addEventListener('pointerleave', resetPortrait);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateParallax);
      heroRef.current?.removeEventListener('pointermove', movePortrait);
      heroRef.current?.removeEventListener('pointerleave', resetPortrait);
    };
  }, []);

  return <main>
    <section className="hero" id="inicio" ref={heroRef}>
      <nav className="nav nav-wide">
        <a href="#inicio" className="brand" aria-label="Pedro Gozetto, início"><span className="brand-mark" />PEDRO GOZETTO</a>
        <div className="nav-links"><a href="#sobre">Estúdio</a><a href="#projetos">Projetos</a></div>
        <a className="nav-cta pulse-cta" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <MessageCircle size={15} /></a>
      </nav>
      <div className="hero-grid shell">
        <div className="hero-copy reveal is-visible">
          <h1 className="title-shimmer">Sites que fazem a sua marca <em>ser lembrada.</em></h1>
          <p className="hero-description">Criamos experiências digitais com estratégia, design e uma atenção quase obsessiva pelos detalhes.</p>
          <div className="hero-actions"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary">Falar no WhatsApp <MessageCircle size={17} /></a><a href="#projetos" className="text-link">Ver projetos <MoveRight size={18} /></a></div>
        </div>
        <div className="hero-art"><img src="/pedro-hero-v2.png" alt="Pedro Gozetto" /></div>
      </div>
    </section>
    <section className="intro-section shell reveal" id="sobre">
      <p className="section-index">01 / SOBRE</p>
      <div className="intro-content"><p className="eyebrow"><Sparkles size={14} /> Quem está por trás</p><h2 className="text-detail">Sou Pedro, designer e estrategista digital para marcas que não querem parecer como todo mundo.</h2><div className="intro-bottom"><p>Transformo boas ideias em sites claros, vivos e impossíveis de ignorar. Cada projeto começa entendendo a essência da marca — e termina com uma experiência que dá vontade de explorar.</p><div className="stats"><div><strong>04</strong><span>projetos em destaque</span></div><div><strong>100%</strong><span>feito sob medida</span></div></div></div></div>
    </section>
    <section className="work-section" id="projetos">
      <div className="shell work-heading"><div><p className="section-index">02 / PROJETOS</p><h2>Trabalhos<br /><em>selecionados.</em></h2></div><p>Quatro universos visuais criados para traduzir ambição em presença digital.</p></div>
      <div className="project-grid shell">{projects.map((project) => <Link href={`/projetos/${project.slug}`} className="project-card reveal" key={project.slug}><div className={`project-visual ${project.tone}`}><span className="project-number">{project.number}</span><div className="mockup"><i /><b /><u /></div><span className="view-project">VER CASE <ArrowUpRight size={14} /></span></div><div className="project-meta"><div><p>{project.type}</p><h3>{project.name}</h3></div><ArrowUpRight size={20} /></div></Link>)}</div>
    </section>
    <footer id="contato"><div className="footer-orb" /><div className="shell footer-content reveal"><p className="eyebrow"><span /> Próximo projeto</p><h2 className="text-detail">Tem uma boa ideia?<br /><em>Vamos dar forma a ela.</em></h2><div className="contact-actions"><a className="footer-email" href="mailto:pedro@gozetto.com.br">pedro@gozetto.com.br <ArrowUpRight /></a><a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Conversar no WhatsApp</a></div><div className="footer-bottom"><p>© 2026 PEDRO GOZETTO</p><div><a href="mailto:pedro@gozetto.com.br"><Mail size={17} /> E-mail</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div></div></div></footer>
  </main>;
}
