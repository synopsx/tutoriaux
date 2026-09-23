/**
 * Auto-appende les séances non listées explicitement dans le body.
 * La liste complète des séances est portée par data-seances sur .mosaique.
 * Les <dia-pres data-presentation="..."> déjà dans le DOM sont ignorés.
 */
document.addEventListener('DOMContentLoaded', () => {
  const mosaique = document.querySelector('.mosaique[data-seances]');
  if (!mosaique) return;

  const seances  = mosaique.getAttribute('data-seances').trim().split(/\s+/).filter(Boolean);
  const existing = new Set(
    [...document.querySelectorAll('dia-pres[data-presentation]')]
      .map(el => el.getAttribute('data-presentation'))
  );

  for (const src of seances) {
    if (!existing.has(src)) {
      const el = document.createElement('dia-pres');
      el.setAttribute('data-presentation', src);
      mosaique.appendChild(el);
    }
  }
});
