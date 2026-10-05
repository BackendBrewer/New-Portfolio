export function openOrDownloadCV() {
  const isMobile = window.innerWidth < 640; // Tailwind ka 'sm' breakpoint

  const link = document.createElement("a");
  link.href = "/cv.pdf";

  if (isMobile) {
    link.download = "Muhammad-Salman-CV.pdf";
  } else {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  link.click();
}