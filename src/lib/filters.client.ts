const GRID_SELECTOR = '#project-grid [data-category]';

function applyFilters() {
  const params = new URLSearchParams(location.search);
  const activeCat = params.get('cat') ?? '';
  const activeTech = (params.get('tech') ?? '').split(',').filter(Boolean);

  document.querySelectorAll<HTMLElement>(GRID_SELECTOR).forEach((card) => {
    const cat = card.dataset.category ?? '';
    const techs = (card.dataset.tech ?? '').split(',');
    const matchesCat = !activeCat || cat === activeCat;
    const matchesTech = activeTech.length === 0 || activeTech.every((t) => techs.includes(t));
    card.hidden = !(matchesCat && matchesTech);
  });

  document.querySelectorAll<HTMLElement>('[data-filter-cat]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String((btn.dataset.filterCat ?? '') === activeCat));
  });
  document.querySelectorAll<HTMLElement>('[data-filter-tech]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(activeTech.includes(btn.dataset.filterTech ?? '')));
  });
}

function updateUrl(params: URLSearchParams) {
  const qs = params.toString();
  history.replaceState(null, '', qs ? `?${qs}` : location.pathname);
}

function runFiltered(fn: () => void) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // @ts-expect-error — startViewTransition isn't in the lib.dom typings used here yet
  if (reduced || !document.startViewTransition) {
    fn();
  } else {
    // @ts-expect-error
    document.startViewTransition(fn);
  }
}

function onFilterClick(e: Event) {
  const target = (e.target as HTMLElement).closest<HTMLElement>('[data-filter-cat], [data-filter-tech]');
  if (!target) return;

  const params = new URLSearchParams(location.search);

  if (target.dataset.filterCat !== undefined) {
    const val = target.dataset.filterCat;
    if (!val || params.get('cat') === val) {
      params.delete('cat');
    } else {
      params.set('cat', val);
    }
  }

  if (target.dataset.filterTech !== undefined) {
    const val = target.dataset.filterTech!;
    const current = (params.get('tech') ?? '').split(',').filter(Boolean);
    const idx = current.indexOf(val);
    if (idx >= 0) current.splice(idx, 1);
    else current.push(val);
    if (current.length) params.set('tech', current.join(','));
    else params.delete('tech');
  }

  updateUrl(params);
  runFiltered(applyFilters);
}

function init() {
  document.querySelector('[data-filter-bar]')?.addEventListener('click', onFilterClick);
  applyFilters();
}

// astro:page-load fires on initial load AND after every ClientRouter
// navigation, so filters keep working when the user morphs back to
// /proyectos from a project detail page.
document.addEventListener('astro:page-load', init);
