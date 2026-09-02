export default function Loading() {
  return (
    <main className="mx-auto grid min-h-[100dvh] max-w-7xl animate-pulse gap-6 px-4 py-6 sm:px-6 md:grid-cols-[0.82fr_1.18fr] lg:px-8">
      <div className="flex flex-col justify-center py-10">
        <div className="h-5 w-36 rounded-full bg-surface-muted" />
        <div className="mt-5 h-32 max-w-md rounded-[var(--radius-card)] bg-surface-muted" />
        <div className="mt-5 h-6 w-72 max-w-full rounded-full bg-surface-muted" />
        <div className="mt-8 h-12 w-48 rounded-full bg-surface-muted" />
      </div>
      <div className="min-h-80 rounded-[var(--radius-card)] bg-surface-muted md:min-h-[calc(100dvh-3rem)]" />
      <span className="sr-only">Carregando conteúdo da campanha</span>
    </main>
  );
}
