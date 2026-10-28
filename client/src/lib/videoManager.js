// Keeps the page light: at most MAX silent videos play at the same time (the ones most on
// screen); everything else is paused. Nothing plays while the tab is hidden or a
// full-screen video is open.
const MAX = 2;
const MIN_VISIBLE = 0.5;
const ratios = new Map(); // <video> -> visible ratio
let hold = 0;
let queued = false;

function update() {
  queued = false;
  const ranked = [...ratios].filter(([, r]) => r >= MIN_VISIBLE).sort((a, b) => b[1] - a[1]);
  const allowed = hold || document.hidden ? new Set() : new Set(ranked.slice(0, MAX).map(([v]) => v));
  for (const [v] of ratios) {
    if (allowed.has(v)) {
      if (v.paused) {
        if (v.preload !== 'auto') v.preload = 'auto';
        v.play().catch(() => {});
      }
    } else if (!v.paused) v.pause();
  }
}
function schedule() {
  if (!queued) { queued = true; requestAnimationFrame(update); }
}
if (typeof document !== 'undefined') document.addEventListener('visibilitychange', schedule);

// Watch a <video> (and the element that decides its visibility). Returns a cleanup function.
export function watchVideo(video, box = video) {
  if (!video || typeof IntersectionObserver === 'undefined') return () => {};
  ratios.set(video, 0);
  const io = new IntersectionObserver(([en]) => {
    ratios.set(video, en.isIntersecting ? en.intersectionRatio : 0);
    schedule();
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
  io.observe(box);
  return () => { io.disconnect(); ratios.delete(video); video.pause(); schedule(); };
}

// Pause every background video while a full-screen player is open.
export function holdVideos() {
  hold++; update();
  return () => { hold = Math.max(0, hold - 1); schedule(); };
}
