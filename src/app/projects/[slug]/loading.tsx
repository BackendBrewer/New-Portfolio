export default function Loading() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 animate-pulse">
      <div className="h-9 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
      <div className="mt-4 h-5 w-full bg-neutral-200 dark:bg-neutral-800 rounded-md" />
      <div className="mt-2 h-5 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded-md" />
      <div className="mt-4 flex gap-2">
        <div className="h-6 w-16 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
        <div className="h-6 w-16 bg-neutral-200 dark:bg-neutral-800 rounded-full" />
      </div>
    </main>
  );
}