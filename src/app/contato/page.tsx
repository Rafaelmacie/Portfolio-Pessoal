import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato | Rafael Maciel - Portfólio",
  description:
    "Entre em contato com Rafael Maciel Nogueira para oportunidades, projetos Full Stack, estágios ou parcerias.",
};

export default function ContatoPage() {
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
      <main className="mx-auto flex-1 w-full max-w-5xl px-6 py-16 space-y-12">
        <section className="space-y-3 border-b border-zinc-800/80 pb-10">
          <span className="inline-block rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-400">
            Vamos Conversar
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Entre em Contato
          </h1>
          <p className="max-w-2xl text-base text-zinc-400">
            Tem interesse em conversar sobre oportunidades como Desenvolvedor Full Stack, conhecer mais sobre projetos como o{" "}
            <strong className="text-zinc-200">A.T.E.N.A.</strong>,{" "}
            <strong className="text-zinc-200">QualiSeed</strong>,{" "}
            <strong className="text-zinc-200">Acesso Livre</strong>,{" "}
            <strong className="text-zinc-200">Instituto Girassol</strong> e{" "}
            <strong className="text-zinc-200">LEMA edu</strong>, ou propor uma parceria? Fique à vontade para utilizar os canais abaixo.
          </p>
        </section>

        {/* Canais Diretos de Contato */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Redes Profissionais &amp; Portfólio de Código
            </span>
            <div className="space-y-3 pt-1 text-sm text-zinc-300">
              <p className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                <strong className="text-white">GitHub:</strong>{" "}
                <Link
                  href="https://github.com/Rafaelmacie"
                  target="_blank"
                  className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  github.com/Rafaelmacie ↗
                </Link>
              </p>
              <p className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                <strong className="text-white">LinkedIn:</strong>{" "}
                <Link
                  href="https://www.linkedin.com/in/rafaelmacieln/"
                  target="_blank"
                  className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  linkedin.com/in/rafaelmacieln ↗
                </Link>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              E-mail para Contato
            </span>
            <p className="text-lg font-semibold text-white">
              {/* SUBSTITUIR: Seu e-mail real */}
              rafaelmn934@gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Localização
            </span>
            <p className="text-sm text-zinc-400">
              Boa Viagem - Ceará
            </p>
          </div>
        </div>
        {/* Link de retorno */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            ← Voltar para a Página Inicial
          </Link>
        </div>
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
            <Link href="/projetos" className="hover:text-zinc-300 transition-colors">
              Projetos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
