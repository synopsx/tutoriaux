/**
 * bibliography.js — Interactivité des citations citeproc en vue prose.
 *
 * Structure citeproc (sortie Pandoc) :
 *  – appels  : <span class="citation" data-cites="Clé">…</span>
 *  – entrées : <div id="ref-Clé" class="csl-entry">…</div> (dans <div id="refs">)
 *
 * diapositives.js clone les <dia-both> dans .reveal et copie la prose suivante
 * en notes présentateur → risque de doublons d'ID. On cible toujours
 * .prose > #refs > #ref-Clé pour rester sur l'entrée d'origine.
 */

document.addEventListener('DOMContentLoaded', () => {
  const prose = document.querySelector('.prose');
  if (!prose) return;

  const backLinkMap = {}; // key → [callId, …]

  linkCitations(prose, backLinkMap);
  initTooltip(prose, backLinkMap);
  window.addEventListener('hashchange', () => applyHashNav(prose, backLinkMap));

  if (location.hash.startsWith('#ref-')) applyHashNav(prose, backLinkMap);
});

/////////////

/** Entrée bibliographique dans la prose (pas dans les notes Reveal.js). */
function findRef(key) {
  return document.querySelector(`.prose > #refs > #ref-${CSS.escape(key)}`);
}

/** Citations de la prose, sans les clones dans .reveal. */
function proseOnlyCitations(prose) {
  return [...prose.querySelectorAll('.citation[data-cites]')]
    .filter(el => !el.closest('.reveal'));
}

/**
 * Enveloppe chaque appel de citation dans <a id="cite-call-N" href="#ref-Key">.
 * @param {Element} prose
 * @param {Object} backLinkMap — modifié en place : key → [callId, …]
 */
function linkCitations(prose, backLinkMap) {
  let n = 0;
  proseOnlyCitations(prose).forEach(span => {
    const keys = span.dataset.cites.trim().split(/\s+/);
    const key = keys[0];
    const id = `cite-call-${++n}`;

    keys.forEach(k => { (backLinkMap[k] ??= []).push(id); });

    const a = document.createElement('a');
    a.id = id;
    a.href = `#ref-${key}`;
    a.className = 'citation-link';
    a.addEventListener('click', makeNavHandler(key, prose, backLinkMap));
    span.replaceWith(a);
    a.append(span);
  });
}

/**
 * Handler de clic vers une entrée bibliographique.
 * Intercepte le href natif pour éviter la navigation vers les doublons d'ID
 * dans les notes Reveal.js.
 * @param {string} key
 * @param {Element} prose
 * @param {Object} backLinkMap
 * @returns {function}
 */
function makeNavHandler(key, prose, backLinkMap) {
  return e => {
    e.preventDefault();
    const ref = findRef(key);
    if (!ref) return;
    applyHashNav(prose, backLinkMap, key);
    ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', `#ref-${key}`);
  };
}

/**
 * Surbrillance de l'entrée bibliographique + lien "↑ Retour à la lecture".
 * Appelée depuis hashchange (sans forcedKey) et depuis les click handlers.
 * @param {Element} prose
 * @param {Object} backLinkMap
 * @param {string} [forcedKey]
 */
function applyHashNav(prose, backLinkMap, forcedKey) {
  prose.querySelectorAll('.csl-entry.is-highlighted').forEach(el => el.classList.remove('is-highlighted'));
  prose.querySelectorAll('.citation-back').forEach(el => el.remove());

  const hash = location.hash;
  const key = forcedKey ?? (hash.startsWith('#ref-') ? hash.slice('#ref-'.length) : null);
  if (!key) return;

  const ref = findRef(key);
  if (!ref) return;

  ref.classList.add('is-highlighted');

  const callIds = backLinkMap[key];
  if (!callIds?.length) return;

  const back = document.createElement('div');
  back.className = 'citation-back';
  callIds.forEach((id, i) => {
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.className = 'citation-back-link';
    a.textContent = callIds.length > 1 ? `↑ Retour à la lecture (${i + 1})` : '↑ Retour à la lecture';
    back.append(a);
  });
  ref.append(back);
}

/**
 * Tooltip au survol des .citation-link : contenu de l'entrée + "Voir dans la bibliographie".
 * @param {Element} prose
 * @param {Object} backLinkMap
 */
function initTooltip(prose, backLinkMap) {
  if (!prose.querySelector('.citation-link')) return;

  const tip = document.createElement('div');
  tip.className = 'citation-tooltip';
  tip.setAttribute('aria-hidden', 'true');
  document.body.append(tip);

  // Bornes du prose en coords viewport — CSS les utilise pour le clamp horizontal
  const syncProseBounds = () => {
    const { left, right } = prose.getBoundingClientRect();
    tip.style.setProperty('--prose-left',  `${left}px`);
    tip.style.setProperty('--prose-right', `${right}px`);
  };
  syncProseBounds();
  new ResizeObserver(syncProseBounds).observe(prose);

  let hideTimer;
  const hide = () => { hideTimer = setTimeout(() => tip.classList.remove('is-visible'), 50); };

  prose.addEventListener('mouseover', e => { const a = e.target.closest('.citation-link'); if (a) showTip(a); });
  prose.addEventListener('mouseout',  e => { if (e.target.closest('.citation-link')) hide(); });
  tip.addEventListener('mouseover', () => clearTimeout(hideTimer));
  tip.addEventListener('mouseout', hide);

  function showTip(anchor) {
    clearTimeout(hideTimer);
    const key = anchor.getAttribute('href').replace(/^.*#ref-/, '');
    const ref = findRef(key);
    if (!ref) return;

    const clone = ref.cloneNode(true);
    clone.querySelector('.citation-back')?.remove();

    tip.innerHTML = '';

    const content = document.createElement('div');
    content.className = 'citation-tooltip-content';
    content.innerHTML = clone.innerHTML;
    tip.append(content);

    const footer = document.createElement('div');
    footer.className = 'citation-tooltip-footer';
    const link = document.createElement('a');
    link.href = anchor.getAttribute('href');
    link.className = 'citation-tooltip-link';
    link.textContent = 'Voir dans la bibliographie';
    link.addEventListener('click', makeNavHandler(key, prose, backLinkMap));
    footer.append(link);
    tip.append(footer);

    const ar  = anchor.getBoundingClientRect();
    const tipH = tip.offsetHeight;
    const gap  = 10;
    // Flip vertical : en dessous si la place suffit, au-dessus sinon
    const y = window.innerHeight - ar.bottom >= tipH + gap
      ? ar.bottom + gap
      : Math.max(8, ar.top - tipH - gap);

    tip.style.setProperty('--tip-left', `${ar.left}px`);
    tip.style.setProperty('--tip-y',    `${y}px`);
    tip.classList.add('is-visible');
  }
}
