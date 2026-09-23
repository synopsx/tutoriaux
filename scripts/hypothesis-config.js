/**
 * Configuration du client Hypothesis
 * Ce fichier doit être chargé AVANT embed.js dans le <head> du document.
 *
 * Hypothesis enveloppe #sidebar-container dans un shadow DOM (mode 'open') avec
 * z-index: 2147483647, ce qui rend impossible de placer des éléments hôte par-dessus.
 * Solution : on injecte notre bouton toggle ET les styles directement dans le shadow root.
 */

window.hypothesisConfig = function () {
  const style = getComputedStyle(document.documentElement);
  const cssVar = (name, fallback) => style.getPropertyValue(name).trim() || fallback;

  let shadowInjected = false;

  function injectIntoShadow() {
    if (shadowInjected) return;
    const hySidebar = document.querySelector('hypothesis-sidebar');
    if (!hySidebar?.shadowRoot) return;
    const shadowRoot = hySidebar.shadowRoot;

    // ── Styles ────────────────────────────────────────────────────────────────
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`
      [data-testid="sidebar-edge"] {
        width: var(--hy-edge-width, 0.75rem) !important;
        left: calc(1px - var(--hy-edge-width, 0.75rem)) !important;
        background-color: var(--gris-athenes-100, #EDEEF2) !important;
        border-inline-start: 1px solid var(--gris-athenes-200, #CDD0DA);
      }
      button[title="Annotation sidebar"] { display: none !important; }

      .hy-toggle {
        display: flex; align-items: center; justify-content: center;
        width: 33px; height: 40px; padding-inline-start: 6px;
        background-color: var(--couleur-fond, #fff);
        color: var(--gris-athenes-500, #6C7592);
        border: 1px solid var(--gris-athenes-200, #CDD0DA);
        border-top: none; border-right: none; border-end-start-radius: 4px;
        cursor: pointer; box-shadow: -1px 2px 4px rgb(0 0 0 / 0.08);
        transition: color 0.15s;
      }
      .hy-toggle:hover { color: var(--gris-athenes-800, #252732); }
      .hy-toggle .icon-close { display: none; }
      .hy-toggle[aria-expanded="true"] .icon-open  { display: none; }
      .hy-toggle[aria-expanded="true"] .icon-close { display: block; }
    `);
    shadowRoot.adoptedStyleSheets = [sheet];

    // ── Bouton toggle injecté dans le shadow root ──────────────────────────
    const nativeToggle = shadowRoot.querySelector('button[title="Annotation sidebar"]');
    if (nativeToggle) {
      const btn = document.createElement('button');
      btn.className = 'hy-toggle';
      btn.setAttribute('aria-label', 'Ouvrir les annotations');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = `
        <svg class="icon-open" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor">
          <path d="M13.7 1.3a1 1 0 0 0-1.4 0L11 2.6 13.4 5l1.3-1.3a1 1 0 0 0 0-1.4zM10 3.6 2 11.6V14h2.4l8-8L10 3.6z"/>
        </svg>
        <svg class="icon-close" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M3 3 13 13M13 3 3 13"/>
        </svg>`;
      // Délègue au toggle natif (ouvre ET ferme correctement)
      btn.addEventListener('click', () => nativeToggle.click());
      nativeToggle.parentNode.insertBefore(btn, nativeToggle);
    }

    shadowInjected = true;
  }

  return {
    groups: ['VV1aLAe2'],

    showHighlights: true,
    openSidebar: false,
    theme: 'classic',

    onLayoutChange: ({ expanded }) => {
      injectIntoShadow();

      // Mettre à jour aria-expanded sur notre bouton injecté
      const hySidebar = document.querySelector('hypothesis-sidebar');
      const btn = hySidebar?.shadowRoot?.querySelector('.hy-toggle');
      if (btn) btn.setAttribute('aria-expanded', String(expanded));
    },

    branding: {
      appBackgroundColor:  cssVar('--gris-athenes-100', '#EDEEF2'),
      ctaBackgroundColor:  cssVar('--bleu-royal-400', '#2F76E0'),
      ctaTextColor:        cssVar('--gris-athenes-100', '#EDEEF2'),
      accentColor:         cssVar('--vert-malachite', '#0CD12A'),
      selectionFontFamily:  style.fontFamily || 'system-ui, sans-serif',
      annotationFontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
    },
  };
};
