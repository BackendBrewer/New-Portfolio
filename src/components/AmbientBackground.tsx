export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* far left glow */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-orange-500/[0.08] dark:bg-orange-500/[0.06] blur-[140px] rounded-full" />

      {/* far right glow */}
      <div className="absolute top-2/3 -right-64 w-[450px] h-[450px] bg-orange-400/[0.08] dark:bg-orange-400/[0.05] blur-[140px] rounded-full" />

      {/* subtle center-bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-500/[0.05] blur-[120px] rounded-full" />

      {/* grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* vertical guide lines — subtle, sides pe structure ka feel dete hain */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-900 to-transparent opacity-40" />
      <div className="hidden lg:block absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-900 to-transparent opacity-40" />
    </div>
  );
}