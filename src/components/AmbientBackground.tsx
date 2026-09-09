export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base glows — halke orange blobs, alag corners pe */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-500/10 dark:bg-orange-500/[0.08] blur-[120px] rounded-full" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-orange-400/10 dark:bg-orange-400/[0.06] blur-[130px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-500/[0.07] dark:bg-orange-500/[0.05] blur-[120px] rounded-full" />

      {/* Grain texture overlay — subtle, texture add karti hai flat background pe */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}