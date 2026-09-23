const SHORTHANDS = {
  // État et comportement
  state:                 'data-state',
  visibility:            'data-visibility',
  autoslide:             'data-autoslide',
  'preview-link':        'data-preview-link',
  'transition-speed':    'data-transition-speed',
  notes:                 'data-notes',
  // Arrière-plans
  bg:                    'data-background-color',
  'bg-color':            'data-background-color',
  'bg-gradient':         'data-background-gradient',
  'bg-img':              'data-background-image',
  'bg-size':             'data-background-size',
  'bg-pos':              'data-background-position',
  'bg-repeat':           'data-background-repeat',
  'bg-opacity':          'data-background-opacity',
  'bg-video':            'data-background-video',
  'bg-video-loop':       'data-background-video-loop',
  'bg-video-muted':      'data-background-video-muted',
  'bg-iframe':           'data-background-iframe',
  'bg-transition':       'data-background-transition',
  // Auto-animate
  'auto-animate':        'data-auto-animate',
  'auto-animate-restart':'data-auto-animate-restart',
  'animate-id':          'data-id',
  // Médias
  src:                   'data-src',
  autoplay:              'data-autoplay',
  preload:               'data-preload',
  // Fragments
  'fragment-index':      'data-fragment-index',
  // Projet
  numbers:               'data-numbers',
};

/** @type {Set<string>} attributs dont la valeur est une couleur CSS */
const COLOR_ATTRS = new Set(['data-background-color']);

/**
 * Enrobe une valeur kebab-case en variable CSS du projet
 * `bleu-royal` → `var(--bleu-royal)`. Les valeurs hex, nommées et var() passent telles quelless
 * @param {string} v
 * @returns {string}
 */
function resolveColor(v) {
  if (!v || v.startsWith('#') || v.startsWith('var(') || v.includes('(')) return v;
  if (v.includes('-')) return `var(--${v})`;
  return v;
}

/**
 * Remplace les attributs raccourcis (state, bg, bg-img…) par leurs équivalents data-*
 * Les couleurs kebab-case sont résolues en variables CSS du projet
 * @param {HTMLElement} el
 */
function expandShorthands(el) {
  for (const [short, full] of Object.entries(SHORTHANDS)) {
    if (el.hasAttribute(short)) {
      const v = el.getAttribute(short);
      el.setAttribute(full, COLOR_ATTRS.has(full) ? resolveColor(v) : v);
      el.removeAttribute(short);
    }
  }
}

/**
 * Élément qui apparaît à la fois dans la prose et dans les diapositives.
 */
customElements.define('dia-both', class extends HTMLElement {
  connectedCallback() {
    expandShorthands(this);
    this.setAttribute('data-dia', '');
  }
});

/**
 * Élément qui apparaît uniquement dans les diapositives (masqué en vue prose).
 */
customElements.define('dia-only', class extends HTMLElement {
  connectedCallback() {
    expandShorthands(this);
    this.setAttribute('data-dia', 'seulement');
  }
});

// Rétrocompatibilité : éléments portant directement data-diapositive
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-diapositive]').forEach(el => {
    expandShorthands(el);
    el.setAttribute('data-dia', el.getAttribute('data-diapositive'));
  });
});

/////////////

/**
 * Mosaïque de diapositives d'une séance.
 * Récupère le HTML de la séance via fetch, extrait les éléments [data-dia]
 * et initialise une instance Reveal.js embarquée.
 *
 * Attributs :
 *   data-presentation  chemin vers le fichier HTML de la séance (obligatoire)
 *   titre              texte du lien récapitulatif (optionnel — extrait de <title> sinon)
 */
customElements.define('dia-pres', class extends HTMLElement {
  async connectedCallback() {
    // garde contre les reconnexions (ex. déplacement dans le DOM)
    if (this._initialized) return;
    this._initialized = true;

    const src = this.getAttribute('data-presentation');
    if (!src) return;

    // construire la structure interne avant le fetch
    this.innerHTML = `
      <section class="mosaique__seance">
        <details open class="conteneur-diapositives">
          <summary class="conteneur-diapositives-etiquette">
            <a href="${src}">${this.getAttribute('titre') || src}</a>
          </summary>
          <div class="reveal" style="width:100%;aspect-ratio:16/9">
            <div class="slides"></div>
          </div>
        </details>
      </section>`;

    const revealEl = this.querySelector('.reveal');
    const slidesEl = this.querySelector('.slides');
    const link     = this.querySelector('a');

    try {
      const res  = await fetch(src);
      const html = await res.text();
      const doc  = new DOMParser().parseFromString(html, 'text/html');

      // utiliser le titre du document si l'attribut titre n'est pas fourni
      if (!this.hasAttribute('titre')) link.textContent = doc.title;

      // copier chaque diapositive dans un <section> Reveal.js
      // dia-both/dia-only ne sont pas instanciés dans un document parsé (pas de data-dia) :
      // on les repère par leur balise et on développe leurs raccourcis sur la section
      doc.querySelectorAll('dia-both, dia-only, [data-dia]').forEach(diapo => {
        const section = document.createElement('section');
        section.innerHTML = diapo.innerHTML;
        // recopier les attributs Reveal.js — data-dia n'a pas de sens ici
        for (const { name, value } of diapo.attributes) {
          if (name !== 'data-dia') section.setAttribute(name, value);
        }
        expandShorthands(section);
        slidesEl.appendChild(section);
      });

      // sans diapositive, Reveal.js 6 plante en vue défilée : pas de deck à afficher
      if (!slidesEl.children.length) {
        revealEl.remove();
        return;
      }

      // initialiser Reveal.js en mode embarqué
      new Reveal(revealEl, {
        // ratio 16:9
        width: 1200, height: 675, margin: 0.12,
        // navigation au clavier uniquement si focusé
        embedded: true, keyboardCondition: 'focused',
        // sans transition ni centrage par défaut
        transition: 'none', slideNumber: 'c/t',
        controlsTutorial: false, controlsBackArrows: 'visible',
        center: false,
      }).initialize();

    } catch (e) {
      console.error(`[dia-pres] Impossible de charger ${src}`, e);
    }
  }
});
