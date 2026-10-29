import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Mim | Rafael Maciel - Portfólio",
  description:
    "Conheça a trajetória acadêmica no IFCE, experiências profissionais e atuação nos 5 principais projetos de Rafael Maciel Nogueira.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
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
              className="text-white font-semibold transition-colors"
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
      <main className="mx-auto flex-1 w-full max-w-5xl px-6 py-16 space-y-16">
        {/* Introdução Sobre Mim */}
        <section className="grid grid-cols-1 items-center gap-10 border-b border-zinc-800/80 pb-16 md:grid-cols-3">
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl md:mx-0">
            <Image
              src="https://github.com/Rafaelmacie.png"
              alt="Foto de perfil de Rafael Maciel Nogueira"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 md:col-span-2">
            <span className="inline-block rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-400">
              Quem sou eu
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sobre Mim e Minha Trajetória
            </h1>
            <p className="leading-relaxed text-zinc-400">
              Olá! Meu nome é{" "}
              <strong className="text-zinc-200">Rafael Maciel Nogueira</strong>.
              Atualmente curso o 6º semestre de{" "}
              <strong className="text-zinc-200">
                Tecnologia em Análise e Desenvolvimento de Sistemas (ADS)
              </strong>{" "}
              no{" "}
              <strong className="text-zinc-200">
                Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)
              </strong>
              . Atuo como Desenvolvedor Full Stack com foco no planejamento,
              arquitetura limpa, segurança e liderança de projetos de software.
            </p>
            <p className="leading-relaxed text-zinc-400">
              Minha base técnica começou no ensino profissionalizante na{" "}
              <strong className="text-zinc-200">
                EEEP Venceslau Vieira Batista
              </strong>{" "}
              e consolidou-se através de mais de 30 projetos acadêmicos, pessoais e
              profissionais — liderando iniciativas como{" "}
              <strong className="text-zinc-200">Sistema A.T.E.N.A.</strong>,{" "}
              <strong className="text-zinc-200">QualiSeed</strong>,{" "}
              <strong className="text-zinc-200">Acesso Livre</strong>,{" "}
              <strong className="text-zinc-200">Instituto Girassol</strong> e{" "}
              <strong className="text-zinc-200">LEMA edu</strong> — além de formações como o{" "}
              <strong className="text-zinc-200">Capacita Brasil</strong> e minha
              experiência prática de estágio na{" "}
              <strong className="text-zinc-200">EEEM Dom Terceiro</strong>.
            </p>
          </div>
        </section>

        {/* Atuação nos 5 Principais Projetos */}
        <section className="space-y-6">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Portfólio de Impacto Real
              </span>
              <h2 className="mt-1 text-2xl font-bold text-white">
                Minha Atuação nos 5 Projetos Principais
              </h2>
            </div>
            <Link
              href="/projetos"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Ver detalhes técnicos em Projetos →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950 p-1">
                  <Image src="/Atena.svg" alt="A.T.E.N.A." fill className="object-contain p-1" />
                </div>
                <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-emerald-400">
                  Principal
                </span>
              </div>
              <h3 className="font-bold text-white">Sistema A.T.E.N.A.</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Gestor de Projeto e Desenvolvedor Fullstack
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white p-1">
                  <Image src="/Qualiseed.png" alt="QualiSeed" fill className="object-contain p-0.5" />
                </div>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-medium uppercase text-zinc-400">
                  AgTech &amp; IA
                </span>
              </div>
              <h3 className="font-bold text-white">QualiSeed</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Desenvolvedor Fullstack
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950 p-1">
                  <Image src="/AcessoLivre.png" alt="Acesso Livre" fill className="object-contain p-1" />
                </div>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-medium uppercase text-zinc-400">
                  Inclusão
                </span>
              </div>
              <h3 className="font-bold text-white">Acesso Livre</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Gestor de Projeto e Desenvolvedor Fullstack
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950 p-1">
                  <Image src="/InstitutoGirassol.png" alt="Instituto Girassol" fill className="object-contain p-1" />
                </div>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-medium uppercase text-zinc-400">
                  Social
                </span>
              </div>
              <h3 className="font-bold text-white">Instituto Girassol</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Gestor de Projeto e Desenvolvedor backend
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
                  <Image src="/LEMA_edu.jpg" alt="LEMA edu" fill className="object-cover" />
                </div>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-medium uppercase text-zinc-400">
                  EdTech
                </span>
              </div>
              <h3 className="font-bold text-white">LEMA edu</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                Desenvolvedor Fullstack
              </p>
            </div>
          </div>
        </section>

        {/* Pilares de Atuação e Habilidades */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Principais Pilares Técnicos
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Tecnologias, arquiteturas e metodologias que aplico no ciclo completo de desenvolvimento de software (SDLC).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center hover:border-zinc-700 transition-colors">
              <p className="font-semibold text-white">React, Next.js &amp; Native</p>
              <p className="mt-1 text-xs text-zinc-400">Front-end &amp; Mobile</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center hover:border-zinc-700 transition-colors">
              <p className="font-semibold text-white">Node.js, Express &amp; PHP</p>
              <p className="mt-1 text-xs text-zinc-400">Back-end &amp; Laravel</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center hover:border-zinc-700 transition-colors">
              <p className="font-semibold text-white">PostgreSQL &amp; MySQL</p>
              <p className="mt-1 text-xs text-zinc-400">Prisma ORM &amp; SQL</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center hover:border-zinc-700 transition-colors">
              <p className="font-semibold text-white">Arquitetura Limpa &amp; MVC</p>
              <p className="mt-1 text-xs text-zinc-400">UML &amp; Requisitos</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center hover:border-zinc-700 transition-colors">
              <p className="font-semibold text-white">Cypress, Vitest, SonarQube &amp; K6</p>
              <p className="mt-1 text-xs text-zinc-400">QA, Testes &amp; Carga</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center hover:border-zinc-700 transition-colors">
              <p className="font-semibold text-white">Docker &amp; CI/CD</p>
              <p className="mt-1 text-xs text-zinc-400">DevOps &amp; Linux</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center hover:border-zinc-700 transition-colors">
              <p className="font-semibold text-white">UX/UI &amp; Prototipagem</p>
              <p className="mt-1 text-xs text-zinc-400">Figma &amp; Acessibilidade</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center hover:border-zinc-700 transition-colors">
              <p className="font-semibold text-white">Scrum &amp; Liderança</p>
              <p className="mt-1 text-xs text-zinc-400">Gestão de Projetos</p>
            </div>
          </div>
        </section>

        {/* Formação Acadêmica e Experiência */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Coluna Formação */}
          <div className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">Formação Acadêmica</h2>

            <div className="space-y-6 border-l border-zinc-800 pl-4">
              <div>
                <span className="text-xs font-medium text-emerald-400">
                  Em andamento — 6º Semestre
                </span>
                <h3 className="text-base font-semibold text-white">
                  Tecnologia em Análise e Desenvolvimento de Sistemas (ADS)
                </h3>
                <p className="text-sm font-medium text-zinc-300">
                  Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Desenvolvimento Full Stack e Mobile, Engenharia de Software (SDLC, UML, Arquitetura Limpa), Bancos de Dados, Qualidade de Software (Cypress, Vitest), DevOps (Docker, CI/CD) e Gestão de Projetos com Scrum.
                </p>
              </div>

              <div>
                <span className="text-xs font-medium text-emerald-400">
                  Formação Complementar
                </span>
                <h3 className="text-base font-semibold text-white">
                  Desenvolvimento Full Stack &amp; Tecnologias Web
                </h3>
                <p className="text-sm font-medium text-zinc-300">
                  Capacita Brasil
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Aprofundamento prático em desenvolvimento de aplicações web modernas, Node.js, Prisma ORM, integração de APIs e persistência de dados.
                </p>
              </div>

              <div>
                <span className="text-xs font-medium text-emerald-400">
                  Formação Técnica &amp; Base Tecnológica
                </span>
                <h3 className="text-base font-semibold text-white">
                  Ensino Médio Profissionalizante &amp; Suporte Técnico
                </h3>
                <p className="text-sm font-medium text-zinc-300">
                  EEEP Venceslau Vieira Batista
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Fundamentos de computação, redes de computadores, lógica de programação e certificação em suporte e solução de problemas técnicos.
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Experiência */}
          <div className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h2 className="text-xl font-bold text-white">
              Experiência Profissional &amp; Projetos
            </h2>

            <div className="space-y-6 border-l border-zinc-800 pl-4">
              <div>
                <span className="text-xs font-medium text-emerald-400">
                  Projeto Principal &amp; Arquitetura Corporativa
                </span>
                <h3 className="text-base font-semibold text-white">
                  Sistema A.T.E.N.A. &amp; QualiSeed (AgTech / Cooperativismo)
                </h3>
                <p className="text-sm font-medium text-zinc-300">
                  Engenharia Full Stack, BI, Segurança LGPD &amp; IA
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Concepção e desenvolvimento do Sistema A.T.E.N.A. para gestão administrativa, financeira e governança de cooperativas (com criptografia AES-256, auditoria imutável, Vitest, K6 e Docker) e do sistema QualiSeed com inteligência artificial.
                </p>
              </div>

              <div>
                <span className="text-xs font-medium text-emerald-400">
                  Impacto Social, Acessibilidade &amp; Educação
                </span>
                <h3 className="text-base font-semibold text-white">
                  Acesso Livre, Instituto Girassol &amp; LEMA edu
                </h3>
                <p className="text-sm font-medium text-zinc-300">
                  Desenvolvimento Web, Mobile &amp; Plataformas EdTech
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Criação de soluções voltadas à inclusão e educação: mapeamento de locais acessíveis com assistente RAG (Acesso Livre), plataforma institucional (Instituto Girassol) e sistema em equipe para gestão de turmas e geração de landing pages de cursos (LEMA edu).
                </p>
              </div>

              <div>
                <span className="text-xs font-medium text-emerald-400">
                  Experiência Prática de Estágio
                </span>
                <h3 className="text-base font-semibold text-white">
                  Estagiário em Tecnologia &amp; Desenvolvimento
                </h3>
                <p className="text-sm font-medium text-zinc-300">
                  EEEM Dom Terceiro
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Atuação com tecnologias da web (HTML5, CSS, UX Design, acessibilidade e prototipagem), gestão de projetos, liderança, trabalho em equipe, comunicação e suporte técnico em sistemas Linux e Windows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chamada para ação */}
        <section className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-bold text-white">
              Quer ver essas habilidades aplicadas nos meus projetos?
            </h2>
            <p className="mt-1 text-sm text-zinc-400">
              Confira os detalhes técnicos do A.T.E.N.A., QualiSeed, Acesso Livre, Girassol e LEMA edu.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projetos"
              className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              Explorar Projetos
            </Link>
            <Link
              href="/contato"
              className="rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
            >
              Falar Comigo
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
