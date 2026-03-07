export function smoothScrollTo(targetY, duration = 600) {
  const startY = window.scrollY;
  const difference = targetY - startY;
  let startTime;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animate(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, startY + difference * ease);
    if (timeElapsed < duration) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
