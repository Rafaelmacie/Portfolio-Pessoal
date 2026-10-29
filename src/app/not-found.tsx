import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Página Não Encontrada | Rafael Maciel",
  description: "A página que você está procurando não existe ou foi movida.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* Cabeçalho / Navegação */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white hover:text-zinc-300 transition-colors"
          >
            Rafael<span className="text-emerald-500">.dev</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="hover:text-white transition-colors">
              Sobre
            </Link>
            <Link href="/projetos" className="hover:text-white transition-colors">
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

      {/* Conteúdo 404 */}
      <main className="mx-auto flex flex-1 w-full max-w-3xl flex-col items-center justify-center px-6 py-24 text-center space-y-6">
        <span className="rounded-md border border-zinc-800 bg-zinc-900 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-emerald-400">
          Erro 404
        </span>

        <h1 className="text-6xl font-bold tracking-tight text-white sm:text-8xl">
          404
        </h1>

        <h2 className="text-2xl font-bold text-zinc-200 sm:text-3xl">
          Página não encontrada
        </h2>

        <p className="max-w-md text-base leading-relaxed text-zinc-400">
          Ops! Parece que o endereço que você tentou acessar não existe ou foi
          alterado. Utilize os links abaixo para retornar à página inicial ou explorar meus projetos.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
          >
            Voltar para a Home
          </Link>
          <Link
            href="/projetos"
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
          >
            Ver Projetos Principais
          </Link>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 Rafael Maciel Nogueira. Todos os direitos reservados.</p>
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
            <Link href="/contato" className="hover:text-zinc-300 transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
