import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { SiteMotion } from '@/components/site-motion';

const cases = {
  'pedro-gozetto-judo': {
    name: 'Pedro Gozetto Judô',
    type: 'Criador de Conteúdo',
    number: '01',
    color: '#48C9FF',
    url: 'https://site-pgozettojudo.vercel.app/',
    description:
      'Uma presença digital enérgica para apresentar conteúdo, trajetória e projetos ligados ao judô.',
  },
  'tatiane-camilo': {
    name: 'Tatiane Camilo',
    type: 'Psicóloga',
    number: '02',
    color: '#D98E7B',
    url: 'https://site-tatiane-w2q6.vercel.app/',
    description:
      'Uma experiência acolhedora e clara para aproximar pessoas do cuidado psicológico.',
  },
  'doutor-minhoca': {
    name: 'Doutor Minhoca',
    type: 'Minhocultor',
    number: '03',
    color: '#B9EF48',
    url: 'https://doutorminhoca.vercel.app/',
    description:
      'Um site de identidade orgânica que transforma conhecimento sobre minhocultura em uma experiência acessível.',
  },
  'gaiotto-automotivo': {
    name: 'Gaiotto Automotivo',
    type: 'Mecânica Automotiva',
    number: '04',
    color: '#FF8533',
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
      className="min-h-screen overflow-hidden bg-[#050814] text-[#F6F8FF]"
      style={{ '--case': project.color } as CSSProperties}
    >
      <SiteMotion />
      <nav className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.18em] transition-opacity hover:opacity-70"
        >
          <span className="relative grid h-7 w-7 place-items-center rounded-[9px] border border-[#7DA3FF]/70 bg-[#0C1D4A]">
            <span className="h-2 w-2 rounded-full bg-[#9DB8FF] shadow-[0_0_13px_#6E9BFF]" />
          </span>
          PEDRO GOZETTO
        </Link>
        <Link
          href="/#projetos"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] font-semibold text-[#DCE5FA] transition hover:border-white/25 hover:bg-white/[0.08]"
        >
          <ArrowLeft
            className="transition-transform group-hover:-translate-x-1"
            size={14}
          />
          Todos os projetos
        </Link>
      </nav>

      <section className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-14 sm:px-8 lg:px-12 lg:pb-32 lg:pt-20">
        <div
          aria-hidden
          className="absolute left-1/2 top-0 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[var(--case)] opacity-[0.14] blur-3xl"
        />
        <div className="reveal max-w-4xl">
          <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-[#9BB8FF]">
            <Sparkles size={14} className="text-[var(--case)]" />
            {project.number} / {project.type.toUpperCase()}
          </p>
          <h1 className="mt-6 text-[clamp(3.8rem,9vw,9rem)] font-semibold leading-[0.84] tracking-[-0.095em] text-white">
            {project.name}
          </h1>
          <p className="mt-7 max-w-xl text-[16px] leading-7 text-[#A9B7D4]">
            {project.description}
          </p>
          <a
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-[var(--case)] px-5 py-3.5 text-[13px] font-bold text-[#06101F] transition duration-300 hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_18px_48px_color-mix(in_srgb,var(--case),transparent_58%)]"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            Visitar site
            <ExternalLink
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              size={17}
            />
          </a>
        </div>

        <div className="reveal case-frame relative mt-14 min-h-[340px] overflow-hidden rounded-[2rem] border border-white/10 p-5 sm:min-h-[460px] sm:p-8">
          <div className="case-surface absolute inset-0 -z-10" aria-hidden />
          <div className="absolute left-1/2 top-1/2 grid h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/25 sm:h-[21rem] sm:w-[21rem]">
            <div className="grid h-[8rem] w-[10rem] place-items-center rounded-2xl border border-white/40 bg-[#071022]/85 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:h-[11rem] sm:w-[15rem]">
              <div className="w-full">
                <span className="block h-1.5 w-10 rounded-full bg-white/70" />
                <span className="mt-5 block h-10 w-[88%] rounded-md bg-[var(--case)] sm:h-14" />
                <span className="mt-3 block h-8 w-[65%] rounded-md border border-white/25" />
              </div>
            </div>
          </div>
          <span className="absolute bottom-5 right-5 rounded-full border border-white/10 bg-[#071022]/50 px-3 py-2 text-[9px] font-semibold tracking-[0.16em] text-white/75 backdrop-blur">
            PROJETO DIGITAL / 2026
          </span>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#080E1C]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:px-12 lg:py-28">
          <div className="reveal">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#86A9FE]">
              DESAFIO
            </p>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,5.6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-white">
              Uma presença à altura do que a marca já entrega no mundo real.
            </h2>
          </div>
          <div className="reveal rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-[#86A9FE]">
              RESPOSTA
            </p>
            <p className="mt-5 text-[15px] leading-7 text-[#AFBDD8]">
              Construímos uma experiência de navegação limpa, marcante e pensada
              para colocar as histórias, o olhar e o ritmo da marca no centro de
              cada tela.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--case)] transition hover:brightness-125"
              >
                Conhecer o projeto
                <ArrowUpRight
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={17}
                />
              </a>
              <Link
                href="/#contato"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#D9E4FF] transition hover:text-white"
              >
                Começar um projeto
                <ArrowUpRight
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={17}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
