import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rafael Maciel - Portfólio",
  description:
    "Portfólio pessoal de Rafael Maciel Nogueira — Desenvolvedor Full Stack e Líder de Projetos (A.T.E.N.A., QualiSeed, Acesso Livre, Instituto Girassol e LEMA edu).",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* Cabeçalho / Navegação (escrito diretamente na página, sem componentizar) */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white hover:text-zinc-300 transition-colors"
          >
            Rafael<span className="text-emerald-500">.dev</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link
              href="/"
              className="text-white font-semibold transition-colors"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="hover:text-white transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/projetos"
              className="hover:text-white transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="/contato"
              className="rounded-lg bg-zinc-100 px-4 py-2 text-zinc-950 font-semibold hover:bg-white transition-colors"
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="mx-auto flex-1 w-full max-w-5xl px-6 py-16 space-y-20">
        {/* Seção Hero */}
        <section className="flex flex-col-reverse items-center justify-between gap-12 border-b border-zinc-800/80 pb-16 md:flex-row">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <span className="inline-block rounded-md border border-zinc-800 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-emerald-400">
              Desenvolvedor Full Stack &amp; Engenharia de Software
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Rafael Maciel Nogueira
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Estudante de Análise e Desenvolvimento de Sistemas (ADS) no{" "}
              <strong className="text-zinc-200">IFCE</strong> com atuação no
              planejamento, arquitetura limpa e desenvolvimento de sistemas
              completos como{" "}
              <strong className="text-zinc-200">A.T.E.N.A.</strong>,{" "}
              <strong className="text-zinc-200">QualiSeed</strong>,{" "}
              <strong className="text-zinc-200">Acesso Livre</strong>,{" "}
              <strong className="text-zinc-200">Instituto Girassol</strong> e{" "}
              <strong className="text-zinc-200">LEMA edu</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
              <Link
                href="/projetos"
                className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                Explorar Meus Projetos
              </Link>
              <Link
                href="/sobre"
                className="rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
              >
                Conhecer Minha Trajetória
              </Link>
            </div>
          </div>

          {/* Imagem de Perfil */}
          <div className="relative h-60 w-60 shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl sm:h-72 sm:w-72">
            <Image
              src="https://github.com/Rafaelmacie.png"
              alt="Foto de perfil de Rafael Maciel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Barra Visual: Os 5 Principais Projetos */}
        <section className="space-y-4">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Principais Projetos Desenvolvidos
            </span>
            <Link
              href="/projetos"
              className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Ver detalhes técnicos de cada projeto →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {/* 1. A.T.E.N.A. */}
            <Link
              href="/projetos"
              className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-center hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950 p-1">
                <Image
                  src="/Atena.svg"
                  alt="Logo A.T.E.N.A."
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  A.T.E.N.A.
                </p>
                <p className="text-[11px] text-emerald-400">
                  Projeto Principal
                </p>
              </div>
            </Link>

            {/* 2. QualiSeed */}
            <Link
              href="/projetos"
              className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-center hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white p-1.5 shadow-sm">
                <Image
                  src="/Qualiseed.png"
                  alt="Logo QualiSeed"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  QualiSeed
                </p>
                <p className="text-[11px] text-zinc-400">IA &amp; Sementes</p>
              </div>
            </Link>

            {/* 3. Acesso Livre */}
            <Link
              href="/projetos"
              className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-center hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950 p-1">
                <Image
                  src="/AcessoLivre.png"
                  alt="Logo Acesso Livre"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Acesso Livre
                </p>
                <p className="text-[11px] text-zinc-400">Acessibilidade</p>
              </div>
            </Link>

            {/* 4. Instituto Girassol */}
            <Link
              href="/projetos"
              className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-center hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950 p-1">
                <Image
                  src="/InstitutoGirassol.png"
                  alt="Logo Instituto Girassol"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Inst. Girassol
                </p>
                <p className="text-[11px] text-zinc-400">Impacto Social</p>
              </div>
            </Link>

            {/* 5. LEMA edu */}
            <Link
              href="/projetos"
              className="col-span-2 sm:col-span-1 group flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-center hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                <Image
                  src="/LEMA_edu.jpg"
                  alt="Logo LEMA edu"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  LEMA edu
                </p>
                <p className="text-[11px] text-zinc-400">Plataforma EdTech</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Seção Destaques Rápidos */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-3xl font-bold text-white">6º Sem.</p>
            <h2 className="mt-1 text-sm font-semibold text-emerald-400">
              Graduação em andamento
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Tecnologia em Análise e Desenvolvimento de Sistemas (IFCE)
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-3xl font-bold text-white">+30</p>
            <h2 className="mt-1 text-sm font-semibold text-emerald-400">
              Projetos Desenvolvidos
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Aplicações acadêmicas, cooperativistas, sociais e soluções com IA.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-3xl font-bold text-white">Full Stack</p>
            <h2 className="mt-1 text-sm font-semibold text-emerald-400">
              Tecnologias Principais
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              TypeScript, React, Node.js, PostgreSQL, Vitest, K6 e Docker.
            </p>
          </div>
        </section>

        {/* Seção Aprofundamento de Competências */}
        <section className="space-y-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Formação &amp; Prática (IFCE • A.T.E.N.A. • EEEM Dom Terceiro • Capacita Brasil)
              </span>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Aprofundamento de Competências
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                Conhecimentos técnicos, metodológicos e interpessoais aplicados nos meus principais projetos e trajetória acadêmica.
              </p>
            </div>
            <Link
              href="/sobre"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Ver trajetória completa →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Categoria 1: Front-end, Mobile & UI */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4 transition-colors hover:border-zinc-700">
              <div className="space-y-1">
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Interfaces, Mapas &amp; Dispositivos Móveis
                </span>
                <h3 className="text-lg font-bold text-white">
                  Desenvolvimento Front-end &amp; Mobile
                </h3>
                <p className="text-xs text-zinc-400">
                  IFCE • A.T.E.N.A. • Acesso Livre • Instituto Girassol • LEMA edu
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">React.js</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">React Native</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">JavaScript &amp; TypeScript</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Tailwind CSS</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Bootstrap</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">HTML5 Semântico</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">CSS3 (Flexbox &amp; Grid)</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Axios</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Leaflet</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Acessibilidade</span>
              </div>
            </div>

            {/* Categoria 2: Back-end & Linguagens */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4 transition-colors hover:border-zinc-700">
              <div className="space-y-1">
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Servidor, APIs, Segurança &amp; IA
                </span>
                <h3 className="text-lg font-bold text-white">
                  Desenvolvimento Back-end &amp; Linguagens
                </h3>
                <p className="text-xs text-zinc-400">
                  IFCE • A.T.E.N.A. • QualiSeed • Capacita Brasil
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Node.js</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Express.js</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">PHP &amp; Laravel</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Python</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">JSON, JWT &amp; AES-256</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">C &amp; C++</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">POO</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Estruturas de Dados</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Programação Lógica</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Desenvolvimento de SaaS</span>
              </div>
            </div>

            {/* Categoria 3: Banco de Dados */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4 transition-colors hover:border-zinc-700">
              <div className="space-y-1">
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Modelagem Relacional, Consultas &amp; Proteção
                </span>
                <h3 className="text-lg font-bold text-white">
                  Bancos de Dados &amp; Persistência
                </h3>
                <p className="text-xs text-zinc-400">
                  IFCE • A.T.E.N.A. • Capacita Brasil
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">PostgreSQL</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">MySQL</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Prisma ORM</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">SQL &amp; Supabase S3</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">DBeaver</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">PhpMyAdmin</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Design &amp; Normalização de BD</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Consultas &amp; Pool de Conexões</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Segurança de Banco de Dados</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">LGPD</span>
              </div>
            </div>

            {/* Categoria 4: Engenharia de Software, Arquitetura & QA */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4 transition-colors hover:border-zinc-700">
              <div className="space-y-1">
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Qualidade, Padrões &amp; Modelagem
                </span>
                <h3 className="text-lg font-bold text-white">
                  Engenharia de Software &amp; QA
                </h3>
                <p className="text-xs text-zinc-400">
                  IFCE • Sistema A.T.E.N.A.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Arquitetura Limpa</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Arquitetura MVC &amp; Sistemas</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Vitest &amp; Cypress</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Testes de Carga (K6) &amp; SonarQube</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">SDLC (Ciclo de Vida de Software)</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Garantia de Qualidade (QA)</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Engenharia de Requisitos</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">UML (Classes, Caso de Uso, Fluxo)</span>
              </div>
            </div>

            {/* Categoria 5: DevOps, Infraestrutura & Ferramentas */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4 transition-colors hover:border-zinc-700">
              <div className="space-y-1">
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Automação, Containers &amp; Observabilidade
                </span>
                <h3 className="text-lg font-bold text-white">
                  DevOps, Cloud &amp; Infraestrutura
                </h3>
                <p className="text-xs text-zinc-400">
                  IFCE • A.T.E.N.A. • EEEM Dom Terceiro • EEEP Venceslau Vieira Batista
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Docker &amp; Compose</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">CI/CD (GitHub Actions)</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Nginx, VPS &amp; Sentry</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Git, GitHub &amp; Git BASH</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Linux &amp; Windows 11</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">SaaS &amp; PaaS</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Hospedagem de Sites</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Redes de Computadores</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">npm</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Suporte &amp; Solução de Problemas</span>
              </div>
            </div>

            {/* Categoria 6: Gestão, UX/UI & Soft Skills */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4 transition-colors hover:border-zinc-700">
              <div className="space-y-1">
                <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  Liderança, Design &amp; Idiomas
                </span>
                <h3 className="text-lg font-bold text-white">
                  Gestão de Projetos, UX/UI &amp; Soft Skills
                </h3>
                <p className="text-xs text-zinc-400">
                  IFCE • A.T.E.N.A. • Instituto Girassol • Estágio EEEM Dom Terceiro
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Gestão &amp; Planejamento de Projetos</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Scrum &amp; Jira</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">Liderança &amp; Trabalho em Equipe</span>
                <span className="rounded-md border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-200">UX Design &amp; Prototipagem</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Figma, Wireframes &amp; Canva</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Empreendedorismo</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Comunicação &amp; Apresentações</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Atendimento ao Cliente</span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">Inglês (Negócios &amp; Tradução)</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
          <p>
            © 2026 Rafael Maciel Nogueira. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/sobre" className="hover:text-zinc-300 transition-colors">
              Sobre
            </Link>
            <Link href="/projetos" className="hover:text-zinc-300 transition-colors">
              Projetos
            </Link>
            <Link href="/contato" className="hover:text-zinc-300 transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
