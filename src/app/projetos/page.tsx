import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projetos | Rafael Maciel - Portfólio",
  description:
    "Conheça os principais projetos de Rafael Maciel Nogueira: A.T.E.N.A., QualiSeed, Acesso Livre, Instituto Girassol e LEMA edu.",
};

export default function ProjetosPage() {
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
              className="hover:text-white transition-colors"
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
              className="text-white font-semibold transition-colors"
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
        {/* Cabeçalho da Página */}
        <section className="space-y-4 border-b border-zinc-800/80 pb-10">
          <span className="inline-block rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-400">
            Portfólio de Engenharia de Software (+30 Repositórios)
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Meus Projetos Principais
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-400">
            Do agronegócio cooperativista e análise de sementes por Inteligência
            Artificial à acessibilidade urbana, impacto social e plataformas
            educacionais: conheça o{" "}
            <strong className="text-zinc-200">Sistema A.T.E.N.A.</strong> e os
            demais projetos que definem minha atuação como Desenvolvedor Full Stack.
          </p>
        </section>

        {/* Seção 1: PROJETO PRINCIPAL EM DESTAQUE — A.T.E.N.A. */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Projeto Principal (01/05)
              </span>
              <span className="text-xs font-medium text-zinc-400">
                IFCE Campus Boa Viagem • Cooperativa Sertaneja &amp; CoopaFesp
              </span>
            </div>
          </div>

          <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Logo Oficial do A.T.E.N.A. */}
              <div className="relative flex flex-col items-center justify-center border-b border-zinc-800 bg-zinc-900/70 p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-full border border-zinc-700/80 bg-zinc-950 p-3 shadow-lg">
                  <Image
                    src="/Atena.svg"
                    alt="Logo oficial do Sistema A.T.E.N.A."
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <span className="mt-5 rounded-md border border-zinc-800 bg-zinc-950 px-3.5 py-1 text-xs font-medium text-zinc-300">
                  Governança &amp; BI para Cooperativas
                </span>
              </div>

              {/* Descrição Principal do A.T.E.N.A. */}
              <div className="flex flex-col justify-between p-8 space-y-6 lg:col-span-7">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      TypeScript
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      Node.js &amp; Express
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      React &amp; Tailwind CSS
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      PostgreSQL &amp; Supabase S3
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      Docker • CI/CD • Vitest • K6
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                      Sistema A.T.E.N.A.
                    </h2>
                    <p className="mt-0.5 text-sm font-medium text-emerald-400">
                      Apoio Técnico e Estratégico a Negócios Agropecuários
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    Plataforma web completa desenvolvida para modernizar a
                    governança, a operação e a inteligência de negócios (BI) de
                    cooperativas da agricultura familiar cearense. O sistema
                    unifica controle documental com validade jurídica, gestão de
                    lotes de estoque, demandas de produção, escrituração
                    financeira cooperativista e portal público com controle de
                    acesso granular (RBAC).
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 border-t border-zinc-800/80 pt-5">
                  <Link
                    href="https://github.com/Rafaelmacie/Sertaneja-FAPE"
                    target="_blank"
                    className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
                  >
                    Acessar Repositório no GitHub →
                  </Link>
                  <Link
                    href="/contato"
                    className="rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
                  >
                    Solicitar Apresentação
                  </Link>
                </div>
              </div>
            </div>

            {/* Detalhamento Técnico e Subsistemas do A.T.E.N.A. */}
            <div className="border-t border-zinc-800 bg-zinc-950/60 p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-2 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    3 Subsistemas &amp; Portal Público
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    Visões Administrativa, Financeira e Executiva
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Cadastro de cooperados em wizard (talhões, ciclos produtivos
                    e geração de fichas em PDF com <code className="text-zinc-200">pdf-lib</code>),
                    controle de lotes de estoque e demandas por e-mail; livro-caixa,
                    integralização de quotas, fundos legais (Reserva e FATES) e
                    apuração anual de sobras; além de dashboards estratégicos e
                    Landing Page dinâmica com cache.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Arquitetura &amp; Conformidade Legal
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    Clean Architecture, LGPD &amp; Validade Jurídica
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Backend em arquitetura MVC modular (Model, Repository,
                    Service, Schema, Controller, Routes) com criptografia{" "}
                    <strong className="text-zinc-200">AES-256</strong> para
                    dados sensíveis, <strong className="text-zinc-200">bcrypt</strong>,
                    autenticação <strong className="text-zinc-200">JWT</strong>,
                    anonimização de indicadores (LGPD), controle de limites do{" "}
                    <strong className="text-zinc-200">PAA/PNAE</strong> e
                    validação de documentos nativamente digitais (ICP-Brasil /
                    PDF/A).
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Qualidade (QA), Performance &amp; DevOps
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    TDD, Testes de Carga (K6) &amp; CI/CD
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Suíte de testes unitários e de integração com{" "}
                    <strong className="text-zinc-200">Vitest</strong> (incluindo
                    testes de concorrência/race conditions), testes de carga com{" "}
                    <strong className="text-zinc-200">K6</strong> suportando até
                    900 VUs após tuning de pool de conexões e índices, inspeção
                    contínua com <strong className="text-zinc-200">SonarQube</strong>,
                    monitoramento via <strong className="text-zinc-200">Sentry</strong>{" "}
                    e deploy automatizado em VPS com{" "}
                    <strong className="text-zinc-200">Docker, GitHub Actions, Nginx e Certbot</strong>.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* Seção 2: Os 4 Demais Projetos em Destaque (Ordem: QualiSeed, Acesso Livre, Girassol e LEMA) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Destaques Principais (02 a 05)
            </span>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Projetos em Destaque
            </h2>
            <p className="text-sm text-zinc-400">
              Soluções em Inteligência Artificial, Acessibilidade, Impacto Social e Educação.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* 1. QualiSeed */}
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700">
              <div className="relative flex h-52 w-full items-center justify-center border-b border-zinc-800 bg-zinc-900/70 p-6">
                <div className="relative h-36 w-36 overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/Qualiseed.png"
                    alt="Logo do Sistema QualiSeed"
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      TypeScript
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      IA &amp; Machine Learning
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-400">
                      Agritech
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    Sistema QualiSeed
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    Plataforma inovadora que utiliza Inteligência Artificial
                    (Machine Learning) para analisar e classificar a qualidade
                    de sementes, garantindo agilidade, padronização e alta
                    precisão diagnóstica para o setor agrícola.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4 text-sm font-medium">
                  <Link
                    href="https://github.com/QualiSeed/Sistema-QualiSeed"
                    target="_blank"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Ver no GitHub →
                  </Link>
                  <Link
                    href="/contato"
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    Solicitar demonstração
                  </Link>
                </div>
              </div>
            </article>

            {/* 2. Acesso Livre */}
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700">
              <div className="relative flex h-52 w-full items-center justify-center border-b border-zinc-800 bg-zinc-900/70 p-6">
                <div className="relative h-36 w-36 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/AcessoLivre.png"
                    alt="Logo do projeto Acesso Livre"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      Web &amp; Mobile
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      JavaScript &amp; Leaflet
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-400">
                      Acessibilidade + Bot RAG
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    Acesso Livre
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    Ecossistema web e mobile de mapeamento colaborativo de
                    locais acessíveis para pessoas com deficiência física,
                    promovendo autonomia, mobilidade urbana e inclusão social,
                    contando também com assistente experimental via RAG.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800/80 pt-4 text-sm font-medium">
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/Rafaelmacie/Acesso-Livre"
                      target="_blank"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Repositório Web →
                    </Link>
                    <Link
                      href="https://github.com/Erlanoep13/AcessoLivre-Mobile"
                      target="_blank"
                      className="text-zinc-300 hover:text-white transition-colors"
                    >
                      Mobile →
                    </Link>
                  </div>
                  <Link
                    href="https://github.com/Rafaelmacie/AcessoLivre_bot_RAG"
                    target="_blank"
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    Bot RAG
                  </Link>
                </div>
              </div>
            </article>

            {/* 3. Instituto Girassol */}
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700">
              <div className="relative flex h-52 w-full items-center justify-center border-b border-zinc-800 bg-zinc-900/70 p-6">
                <div className="relative h-36 w-36 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/InstitutoGirassol.png"
                    alt="Logo do Instituto Girassol"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      TypeScript
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      Impacto Social &amp; Educação
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-400">
                      Institucional
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    Instituto Girassol
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    Plataforma desenvolvida em TypeScript para fortalecer a
                    presença digital, a transparência e a gestão das ações
                    educacionais, culturais e sociais promovidas pelo Instituto
                    Girassol.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4 text-sm font-medium">
                  <Link
                    href="https://github.com/Rafaelmacie/Instituto_Girassol"
                    target="_blank"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Ver no GitHub →
                  </Link>
                  <Link
                    href="/contato"
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    Saber mais
                  </Link>
                </div>
              </div>
            </article>

            {/* 4. LEMA edu */}
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700">
              <div className="relative flex h-52 w-full items-center justify-center border-b border-zinc-800 bg-zinc-900/70 p-6">
                <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-zinc-700/60 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/LEMA_edu.jpg"
                    alt="Logo da plataforma LEMA edu"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      Full Stack
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                      Landing Pages Dinâmicas
                    </span>
                    <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-400">
                      EdTech em Equipe
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    Plataforma LEMA edu
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-400">
                    Sistema educacional desenvolvido em equipe para o
                    gerenciamento completo de turmas e alunos, integrado a um
                    módulo de criação de landing pages personalizadas para cada
                    curso ofertado.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-800/80 pt-4 text-sm font-medium">
                  <Link
                    href="/contato"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Saber mais sobre minha atuação →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Seção 3: Outros Projetos Institucionais & Sustentabilidade */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Projetos Acadêmicos, Sustentabilidade &amp; Inclusão
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Sistemas desenvolvidos para gestão acadêmica no IFCE, sustentabilidade e acessibilidade visual.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Sistema de Reposição de Aulas - IFCE */}
            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                    JavaScript
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-400">
                    IFCE Boa Viagem
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Sistema de Reposição de Aulas — IFCE
                </h3>
                <p className="text-sm text-zinc-400">
                  Sistema desenvolvido para gerenciar e automatizar o fluxo de
                  solicitação e acompanhamento de reposição de aulas no campus
                  do IFCE de Boa Viagem.
                </p>
              </div>
              <div className="pt-2 text-sm font-medium">
                <Link
                  href="https://github.com/Rafaelmacie/Sistema-de-reposicao-de-aulas"
                  target="_blank"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Ver no GitHub →
                </Link>
              </div>
            </div>

            {/* EcoTroca & LandingPage NAPNE */}
            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-4 hover:border-zinc-700 transition-colors">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300">
                    JavaScript &amp; HTML
                  </span>
                  <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-400">
                    Inclusão &amp; Sustentabilidade
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  EcoTroca &amp; Landing Page NAPNE (Daltonismo)
                </h3>
                <p className="text-sm text-zinc-400">
                  Projetos voltados à sustentabilidade (Desafio Intermediário
                  EcoTroca) e protótipo adaptado para pessoas com daltonismo com
                  filtros visuais selecionáveis (NAPNE).
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
                <Link
                  href="https://github.com/Rafaelmacie/EcoTroca"
                  target="_blank"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  EcoTroca →
                </Link>
                <Link
                  href="https://github.com/Rafaelmacie/LandingPage_NAPNE"
                  target="_blank"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  LandingPage NAPNE →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Inteligência Artificial, Agentes & LLMs */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Inteligência Artificial, LLMs &amp; Chatbots (Python)
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Experimentos práticos com RAG, sistemas multiagentes (LangGraph), LangChain, Gemini e Groq.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-zinc-400">
                Python • LangGraph • Groq API
              </span>
              <h3 className="text-base font-bold text-white">
                DevTeam Chatbot
              </h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Arquitetura multiagente onde um agente Tech Lead recebe a
                dúvida e direciona para especialistas em Frontend, Backend ou
                DevOps.
              </p>
              <div className="pt-1">
                <Link
                  href="https://github.com/Rafaelmacie/DevTeam_Chatbot"
                  target="_blank"
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Ver repositório →
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-zinc-400">
                Python • RAG • PDFs
              </span>
              <h3 className="text-base font-bold text-white">
                AcessoLivre Bot RAG
              </h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Bot experimental com Retrieval-Augmented Generation (RAG) que
                lê documentações em PDF sobre o sistema AcessoLivre para
                auxiliar usuários.
              </p>
              <div className="pt-1">
                <Link
                  href="https://github.com/Rafaelmacie/AcessoLivre_bot_RAG"
                  target="_blank"
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Ver repositório →
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-zinc-400">
                Python • Visão Computacional
              </span>
              <h3 className="text-base font-bold text-white">
                Bot Agricultor
              </h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Assistente especialista em agricultura que analisa imagens e
                adapta suas recomendações conforme o horário do dia.
              </p>
              <div className="pt-1">
                <Link
                  href="https://github.com/Rafaelmacie/Bot_Agricultor"
                  target="_blank"
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Ver repositório →
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-zinc-400">
                Python • LangChain • Tools
              </span>
              <h3 className="text-base font-bold text-white">
                LangChain DateTime
              </h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Chatbot com LangChain habilitando o modelo de IA a acionar
                ferramentas de detecção de horário, data e dias da semana.
              </p>
              <div className="pt-1">
                <Link
                  href="https://github.com/Rafaelmacie/LangChain_DateTime"
                  target="_blank"
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Ver repositório →
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2 hover:border-zinc-700 transition-colors">
              <span className="text-xs font-medium text-zinc-400">
                Python • Google Gemini
              </span>
              <h3 className="text-base font-bold text-white">
                Chatbot Gemini
              </h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Implementação de um chatbot especialista em domínio específico
                desenvolvido durante formação em Large Language Models (LLMs).
              </p>
              <div className="pt-1">
                <Link
                  href="https://github.com/Rafaelmacie/Chatbot_Gemini"
                  target="_blank"
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Ver repositório →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Qualidade de Software, Back-end Laravel/PHP, DevOps & Algoritmos */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Laboratório de Engenharia, Testes, Back-end &amp; DevOps
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Repositórios de práticas em Testes de Software (JUnit), Laravel/MVC, Automação Linux e Estruturas de Dados.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
              <h3 className="text-base font-bold text-white">
                Testes Automatizados &amp; Qualidade (Java / JUnit)
              </h3>
              <p className="text-xs text-zinc-400">
                Implementação de suítes de testes unitários com JUnit, validação
                de senhas, estrutura de dados pilha e revisão de POO.
              </p>
              <div className="flex flex-wrap gap-3 pt-1 text-xs font-medium text-emerald-400">
                <Link href="https://github.com/Rafaelmacie/Pratica-Final-Testes" target="_blank" className="hover:underline">
                  Pratica-Final-Testes
                </Link>
                <Link href="https://github.com/Rafaelmacie/Password-Validator" target="_blank" className="hover:underline">
                  Password-Validator
                </Link>
                <Link href="https://github.com/Rafaelmacie/Atividade_JUnit" target="_blank" className="hover:underline">
                  Atividade_JUnit
                </Link>
                <Link href="https://github.com/Rafaelmacie/POO_Java" target="_blank" className="hover:underline">
                  POO_Java
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
              <h3 className="text-base font-bold text-white">
                Arquitetura MVC, Laravel &amp; PHP
              </h3>
              <p className="text-xs text-zinc-400">
                Agrupamento de rotas, controllers, Blade Template Engine,
                reutilização de layouts e migrations com MySQL.
              </p>
              <div className="flex flex-wrap gap-3 pt-1 text-xs font-medium text-emerald-400">
                <Link href="https://github.com/Rafaelmacie/atividade-rotas-mvc" target="_blank" className="hover:underline">
                  atividade-rotas-mvc
                </Link>
                <Link href="https://github.com/Rafaelmacie/Atividade_Migrations" target="_blank" className="hover:underline">
                  Atividade_Migrations
                </Link>
                <Link href="https://github.com/Rafaelmacie/Atividades_Laravel" target="_blank" className="hover:underline">
                  Atividades_Laravel
                </Link>
                <Link href="https://github.com/Rafaelmacie/PHP_Controllers" target="_blank" className="hover:underline">
                  PHP_Controllers
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
              <h3 className="text-base font-bold text-white">
                Automação DevOps &amp; Shell Scripting (Linux)
              </h3>
              <p className="text-xs text-zinc-400">
                Scripts de automação em Shell, análise de logs e administração
                de ambientes Linux.
              </p>
              <div className="flex flex-wrap gap-3 pt-1 text-xs font-medium text-emerald-400">
                <Link href="https://github.com/Rafaelmacie/Scripts_Linux" target="_blank" className="hover:underline">
                  Scripts_Linux
                </Link>
                <Link href="https://github.com/Rafaelmacie/Lista_Logs" target="_blank" className="hover:underline">
                  Lista_Logs
                </Link>
                <Link href="https://github.com/Rafaelmacie/Listas_Comandos_Linux" target="_blank" className="hover:underline">
                  Listas_Comandos_Linux
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
              <h3 className="text-base font-bold text-white">
                Estruturas de Dados, Web &amp; Engenharia (C, C++, TS)
              </h3>
              <p className="text-xs text-zinc-400">
                Sistema musical em C (lista, fila e pilha), POO em C++, ToDo
                List em TypeScript e Engenharia de Software.
              </p>
              <div className="flex flex-wrap gap-3 pt-1 text-xs font-medium text-emerald-400">
                <Link href="https://github.com/Rafaelmacie/SIstema-musical" target="_blank" className="hover:underline">
                  SIstema-musical (C)
                </Link>
                <Link href="https://github.com/Rafaelmacie/poo-bvg" target="_blank" className="hover:underline">
                  poo-bvg (C++)
                </Link>
                <Link href="https://github.com/Rafaelmacie/ToDo_List" target="_blank" className="hover:underline">
                  ToDo_List (TS)
                </Link>
                <Link href="https://github.com/Rafaelmacie/TechParaTodos" target="_blank" className="hover:underline">
                  TechParaTodos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Inferior de Navegação */}
        <section className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-bold text-white">
              Quer conhecer mais detalhes ou conversar sobre um projeto?
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Acesse meu GitHub completo ou entre em contato diretamente comigo.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/Rafaelmacie"
              target="_blank"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
            >
              Perfil no GitHub
            </Link>
            <Link
              href="/contato"
              className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              Entrar em Contato
            </Link>
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
            <Link href="/" className="hover:text-zinc-300 transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="hover:text-zinc-300 transition-colors">
              Sobre
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
