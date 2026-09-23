
const isPresentationMode = new URLSearchParams(window.location.search).has('presentation');

document.addEventListener('DOMContentLoaded', () => {
  try {
    // sans diapositive, Reveal.js 6 plante en vue défilée : on ne garde que le résumé du conteneur
    // (et pas de mode présentation, qui n'afficherait qu'un plein écran vide)
    if (!document.querySelector('[data-dia]')) {
      document.querySelector('.reveal').remove();
      return;
    }

    if (isPresentationMode) {
      document.body.classList.add('presentation-mode');
    }

    // 1. générer les diapositives
    makeDiapositives();

    // 2. Instancier Reveal.js
    initReveal();

    // 3. Navigation dans la vue d'ensemble
    initOverviewNav();
  } catch (e) {
    // impossible de créer le diaporama reveal.js
    console.error('Impossible de créer le diaporama reveal.js', e);
  }
});

/////////////

/**
 * Collecte le contenu prose entre deux diapositives pour les notes présentateur
 * Parcourt les frères suivant slideEl jusqu'à nextSlideEl (exclu).
 * @param {Element} slideEl - Diapositive source
 * @param {Element|undefined} nextSlideEl - Diapositive suivante (borne exclue)
 * @returns {string} HTML des notes, ou chaîne vide
 */
function collectNotes(slideEl, nextSlideEl) {
  const parts = [];
  let node = slideEl.nextElementSibling;
  while (node && node !== nextSlideEl) {
    if (!node.hasAttribute('data-dia')) {
      parts.push(node.outerHTML);
    }
    node = node.nextElementSibling;
  }
  return parts.join('\n');
}

/**
 * Générer les diapositives à partir du balisage du document
 * @throws {Error} Erreur si l'élément conteneur `.reveal .slides` n'est pas trouvé.
 * @global document
 */
function makeDiapositives() {
  // on suppose un seul élément `.reveal` sur la page
  /** @type {HTMLElement} */
  const revealSlidesContainer = document.querySelector('.reveal .slides');
  /** @type {NodeList} */
  const diapositives = document.querySelectorAll('[data-dia]');
  
  if (!revealSlidesContainer) {
    throw new Error('Aucun élément `.reveal` trouvé. Les diapositives n’ont pas été créées.');
  }

  diapositives.forEach((diapositive, index) => {
    // on recopie les attributs et le contenu du nœud dans un élément <section>
    let diapoSection = document.createElement('section');

    // copie du contenu interne
    diapoSection.innerHTML = diapositive.innerHTML;

    // Attention ! Pour éviter les conflits d'ID, on enlève l'attribut `id`
    // des éléments copiés (enfants de la diapositive)
    Array.from(diapoSection.querySelectorAll('[id]')).forEach(node => {
      node.removeAttribute('id');
    });

    // copie des attributs de la diapositive
    // C'est une boucle simple sur la propriété `attributes`
    // Il n'y a pas de méthode pratique, comme le forEach(), qui soit disponible
    for (let i = 0; i < diapositive.attributes.length; i++) {
      diapoSection.setAttribute(
        diapositive.attributes[i].nodeName,
        diapositive.attributes[i].nodeValue
      );
    }

    // le contenu prose entre cette diapositive et la suivante devient notes présentateur
    const notes = collectNotes(diapositive, diapositives[index + 1]);
    if (notes) {
      const aside = document.createElement('aside');
      aside.className = 'notes';
      aside.innerHTML = notes;
      // Éviter les doublons d'ID avec la prose (le contenu est copié, pas déplacé)
      aside.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      diapoSection.appendChild(aside);
    }

    // on insère la diapositive
    revealSlidesContainer.appendChild(diapoSection);
  });
}

/**
 * Injecter une barre de navigation dans la vue d'ensemble Reveal.js
 */
function initOverviewNav() {
  const container = document.querySelector('.conteneur-diapositives');
  if (!container) return;

  const nav = document.createElement('nav');
  nav.className = 'overview-nav';

  const title = document.createElement('span');
  title.className = 'overview-nav__title';
  title.textContent = document.title;
  nav.appendChild(title);

  if (isPresentationMode) {
    const proseLink = document.createElement('a');
    proseLink.href = window.location.pathname;
    proseLink.textContent = '← Vue prose';
    nav.appendChild(proseLink);
  }

  const indexLink = document.createElement('a');
  indexLink.href = 'index.html';
  indexLink.textContent = '← Index';
  nav.appendChild(indexLink);

  document.querySelector('.reveal').appendChild(nav);
}

/**
 * Initialiser la présentation Reveal.js
 * @global Reveal
 * @returns {Object} Instance Reveal.js
 */
function initReveal() {
  return Reveal.initialize({
    // ratio 16:9
    width: 1200,
    height: 675,

    // espacement autour
    margin: 0.12,

    // intégré dans la page (désactivé en mode présentation)
    embedded: !isPresentationMode,
    // activer les raccourcis-clavier uniquement si focusé (sauf en mode présentation)
    keyboardCondition: isPresentationMode ? null : 'focused',

    // transition style
    transition: 'none',

    // afficher les numéros (actuel / total)
    slideNumber: 'c/t',

    // ne pas animer les flèches (distraction)
    controlsTutorial: false,
    
    // visibilité égale pour flèche préc.
    controlsBackArrows: 'visible',

    // ne pas "centrer" le contenu des diapositives par défaut
    center: false,

    // URL de base pour le plugin Notes — les iframes ne doivent pas hériter de ?presentation
    url: window.location.origin + window.location.pathname + '?presentation',

    plugins: [RevealNotes, RevealHighlight],
  });
}