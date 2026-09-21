import type { CSSProperties } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  BadgeCheck,
  HeartHandshake,
  Mail,
  Medal,
  MessageCircle,
  MoveRight,
  Worm,
  Wrench,
} from 'lucide-react';
import { FooterTypewriter } from '@/components/footer-typewriter';
import { SiteMotion } from '@/components/site-motion';

const projects = [
  {
    number: '01',
    name: 'Pedro Gozetto Judô',
    type: 'Criador de Conteúdo',
    accent: '#48C9FF',
    icon: Medal,
    url: 'https://site-pgozettojudo.vercel.app/',
  },
  {
    number: '02',
    name: 'Tatiane Camilo',
    type: 'Psicóloga',
    accent: '#D98E7B',
    icon: HeartHandshake,
    url: 'https://site-tatiane-w2q6.vercel.app/',
  },
  {
    number: '03',
    name: 'Doutor Minhoca',
    type: 'Minhocultor',
    accent: '#B9EF48',
    icon: Worm,
    url: 'https://doutorminhoca.vercel.app/',
  },
  {
    number: '04',
    name: 'Gaiotto Automotivo',
    type: 'Mecânica Automotiva',
    accent: '#FF8533',
    icon: Wrench,
    url: 'https://site-mecanica-gaiotto.vercel.app/',
  },
];

const whatsappUrl =
  'https://wa.me/5519989299432?text=Olá%2C%20Pedro!%20Tenho%20interesse%20em%20criar%20um%20site%20para%20minha%20marca.';

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050814] text-[#F6F8FF]">
      <SiteMotion />

      <section
        className="hero relative isolate min-h-[760px] overflow-hidden border-b border-white/10 pt-[74px]"
        id="inicio"
      >
        <div aria-hidden className="hero-gridlines absolute inset-0 -z-20" />
        <div
          aria-hidden
          className="hero-aurora absolute -right-32 top-24 -z-10 h-[36rem] w-[36rem] rounded-full bg-[#2E6BFF]/25 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute left-[15%] top-[-16rem] -z-10 h-[33rem] w-[33rem] rounded-full bg-cyan-400/10 blur-3xl"
        />

        <nav className="site-nav fixed inset-x-0 top-0 z-50 flex h-[74px] w-full items-center border-b border-white/10 bg-[#060A14]/94 px-4 backdrop-blur-xl sm:px-6 lg:px-12">
          <a
            href="#inicio"
            className="flex shrink-0 items-center text-[11px] font-bold tracking-[0.14em] text-white transition-opacity hover:opacity-75"
            aria-label="Pedro Gozetto, início"
          >
            <span className="hidden min-[380px]:inline">PEDRO GOZETTO</span>
            <span className="min-[380px]:hidden">PG</span>
          </a>

          <div className="mx-3 flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-[#10182D]/95 px-2 py-1 text-[12px] font-medium text-[#DDE7FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:mx-8 sm:gap-3 sm:px-3 sm:py-1.5 sm:text-[13px]">
            <a
              className="rounded-full px-2.5 py-1.5 transition hover:bg-white/10 hover:text-white sm:px-4 sm:py-2"
              href="#sobre"
            >
              Estúdio
            </a>
            <a
              className="rounded-full px-2.5 py-1.5 transition hover:bg-white/10 hover:text-white sm:px-4 sm:py-2"
              href="#projetos"
            >
              Projetos
            </a>
          </div>

          <a
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[#AFC4FF]/65 bg-[#2E60DF] px-3 py-2 text-[11px] font-extrabold text-white shadow-[0_10px_30px_rgba(0,0,0,0.36)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#3D71F2] hover:shadow-[0_14px_38px_rgba(28,72,190,0.45)] sm:px-4"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={14} strokeWidth={2.2} />
            <span className="hidden min-[520px]:inline">Conversar</span>
            <ArrowUpRight
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              size={13}
            />
          </a>
        </nav>

        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 pb-14 pt-10 sm:px-8 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:px-12 lg:py-10">
          <div className="reveal max-w-3xl py-6 lg:py-10">
            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-[#9FB8EB]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5C8BFF] shadow-[0_0_14px_#4E7FFF]" />
              AGÊNCIA DIGITAL INDEPENDENTE
            </div>

            <h1 className="max-w-[850px] text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.085em] text-white">
              Sites que fazem
              <span className="block text-[#DCE7FF]">a sua marca</span>
              <em className="hero-gradient-text block font-serif font-normal tracking-[-0.075em]">
                ser lembrada.
              </em>
            </h1>

            <p className="mt-8 max-w-[430px] text-[15px] leading-7 text-[#AEBBD8] sm:text-base">
              Criamos experiências digitais com estratégia, design e uma atenção
              quase obsessiva pelos detalhes.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl border border-[#B9CCFF]/65 bg-[#315FDC] px-5 py-3.5 text-[13px] font-extrabold text-white shadow-[0_16px_36px_rgba(19,54,144,0.42)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#3C71F3] hover:shadow-[0_20px_42px_rgba(42,90,220,0.48)]"
              >
                Falar no WhatsApp
                <MessageCircle
                  className="transition-transform duration-300 group-hover:rotate-12"
                  size={17}
                />
              </a>
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.035] px-5 py-3.5 text-[13px] font-semibold text-[#D7E0F7] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
              >
                Ver projetos
                <MoveRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={17}
                />
              </a>
            </div>

            <div className="mt-12 hidden flex-wrap gap-3 text-[10px] font-medium tracking-[0.08em] text-[#8494B8] md:flex">
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                04 CASES SELECIONADOS
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                ESTRATÉGIA + DESIGN + DEV
              </span>
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-[590px] lg:justify-self-end">
            <div
              aria-hidden
              className="absolute inset-x-[6%] bottom-3 h-16 rounded-full bg-[#2361F5]/40 blur-3xl"
            />
            <div className="portrait-frame relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0A1227]/80 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(65,122,255,0.36),transparent_35%),linear-gradient(140deg,transparent_45%,rgba(103,146,255,0.11))]" />
              <div
                aria-hidden
                className="absolute inset-3 rounded-[1.45rem] border border-white/10"
              />
              <span className="absolute left-7 top-7 z-10 rounded-full border border-white/10 bg-[#071027]/75 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#D7E4FF] backdrop-blur">
                PEDRO GOZETTO
              </span>
              <Image
                src="/pedro-hero-v2.webp"
                alt="Pedro Gozetto"
                width={1024}
                height={1024}
                fetchPriority="high"
                decoding="async"
                className="hero-portrait relative z-[1] mx-auto block h-auto w-[104%] max-w-[560px] translate-y-5 object-contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="relative mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-9 lg:p-12">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#214CD4]/20 blur-3xl"
          />
          <div className="relative">
            <p className="mb-7 flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-[#B5C6EE]">
              <BadgeCheck size={15} className="text-[#89AEFF]" />
              QUEM ESTÁ POR TRÁS
            </p>
            <h2 className="max-w-4xl text-[clamp(2.35rem,5.1vw,5.7rem)] font-semibold leading-[0.93] tracking-[-0.075em] text-[#F4F7FF]">
              Sou Pedro, designer e estrategista digital para marcas que não
              querem parecer como todo mundo.
            </h2>

            <div className="mt-12 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1.2fr_0.8fr]">
              <p className="max-w-xl text-[16px] leading-7 text-[#C3CEE4]">
                Transformo boas ideias em sites claros, vivos e impossíveis de
                ignorar. Cada projeto começa entendendo a essência da marca — e
                termina com uma experiência que dá vontade de explorar.
              </p>
              <div className="hidden grid-cols-2 gap-3 md:grid">
                <div className="rounded-2xl border border-white/10 bg-[#091127]/70 p-4">
                  <strong className="block text-3xl font-semibold tracking-[-0.08em] text-white">
                    04
                  </strong>
                  <span className="mt-2 block text-[10px] font-semibold leading-4 tracking-[0.14em] text-[#AEBFE1]">
                    PROJETOS EM DESTAQUE
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#091127]/70 p-4">
                  <strong className="block text-3xl font-semibold tracking-[-0.08em] text-white">
                    100%
                  </strong>
                  <span className="mt-2 block text-[10px] font-semibold leading-4 tracking-[0.14em] text-[#AEBFE1]">
                    FEITO SOB MEDIDA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="relative border-y border-white/10 bg-[#080E1C] py-24 sm:py-32"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(52,94,219,0.2),transparent_37%)]"
        />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="reveal mb-12 grid gap-7 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-[#86A9FE]">
                02 / PORTFÓLIO
              </p>
              <h2 className="mt-5 text-[clamp(3.4rem,7vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-white">
                Trabalhos
                <em className="block font-serif font-normal tracking-[-0.08em] text-[#B4C9FF]">
                  selecionados.
                </em>
              </h2>
            </div>
            <p className="max-w-[320px] text-[16px] leading-7 text-[#C0CCE2]">
              Quatro sites criados por Pedro Gozetto para clientes reais.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => {
              const ProjectIcon = project.icon;

              return (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={'Visitar o site ' + project.name}
                  className="project-card reveal group relative isolate min-h-[300px] overflow-hidden rounded-[2rem] border border-white/10 p-5 sm:min-h-[350px] sm:p-6"
                  style={{ '--accent': project.accent } as CSSProperties}
                >
                  <div
                    className="project-surface absolute inset-0 -z-10"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_30%,rgba(2,6,18,0.72))]"
                    aria-hidden
                  />

                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-white/75">
                      {project.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-[#050A17]/30 px-2.5 py-1.5 text-[9px] font-semibold tracking-[0.12em] text-white/80 backdrop-blur">
                      ABRIR SITE
                      <ArrowUpRight
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        size={12}
                      />
                    </span>
                  </div>

                  <div className="project-orbit absolute left-1/2 top-[46%] grid h-[10.5rem] w-[10.5rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/25 sm:h-[12.5rem] sm:w-[12.5rem]">
                    <span className="project-icon grid h-20 w-20 place-items-center rounded-[1.35rem] border sm:h-24 sm:w-24">
                      <ProjectIcon size={42} strokeWidth={1.35} />
                    </span>
                    <span className="absolute h-[72%] w-px rotate-45 bg-gradient-to-b from-transparent via-white/70 to-transparent" />
                  </div>

                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 sm:inset-x-6 sm:bottom-6">
                    <div>
                      <p className="mb-1 text-[10px] font-semibold tracking-[0.13em] text-white/60">
                        {project.type.toUpperCase()}
                      </p>
                      <h3 className="text-xl font-semibold tracking-[-0.055em] text-white sm:text-2xl">
                        {project.name}
                      </h3>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#081026]">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer
        id="contato"
        className="relative overflow-hidden bg-[#060A14] px-5 pb-7 pt-24 sm:px-8 sm:pt-32 lg:px-12"
      >
        <div
          aria-hidden
          className="absolute -left-40 top-0 h-[35rem] w-[35rem] rounded-full bg-[#214BD6]/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute right-[-18rem] top-20 h-[30rem] w-[30rem] rounded-full bg-[#4F7FFF]/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1440px]">
          <div className="reveal max-w-5xl">
            <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-[#9AB8FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6C95FF] shadow-[0_0_13px_#6C95FF]" />
              PRÓXIMO PROJETO
            </p>
            <FooterTypewriter />

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                className="group inline-flex w-fit items-center gap-3 border-b border-white/50 pb-2 text-[clamp(1.2rem,2vw,1.65rem)] tracking-[-0.05em] text-white transition hover:border-white hover:text-[#BFD0FF]"
                href="mailto:pedro@gozetto.com.br"
              >
                pedro@gozetto.com.br
                <ArrowUpRight
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={20}
                />
              </a>
              <a
                className="group inline-flex w-fit items-center gap-2.5 rounded-2xl border border-[#B7CBFF]/70 bg-[#315FDC] px-5 py-3.5 text-[14px] font-extrabold text-white shadow-[0_16px_38px_rgba(5,12,34,0.55)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#3C71F3] hover:shadow-[0_20px_46px_rgba(32,78,205,0.5)] sm:ml-2"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle
                  className="transition-transform duration-300 group-hover:rotate-12"
                  size={17}
                />
                Conversar no WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-6 text-[10px] font-medium tracking-[0.12em] text-[#7F90B3] sm:mt-32 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 PEDRO GOZETTO</p>
            <div className="flex items-center gap-5">
              <a
                href="mailto:pedro@gozetto.com.br"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <Mail size={14} /> E-MAIL
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <MessageCircle size={14} /> WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
