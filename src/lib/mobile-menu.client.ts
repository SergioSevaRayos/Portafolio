function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-mobile-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  const backdrop = document.querySelector<HTMLElement>('[data-mobile-menu-backdrop]');
  const robotIcon = toggle?.querySelector<SVGElement>('[data-robot-icon]');
  if (!toggle || !menu || !backdrop) return;

  function bounceRobot() {
    if (!robotIcon) return;
    robotIcon.classList.remove('robot-bounce');
    // Force reflow so re-adding the class restarts the animation even when
    // clicked twice in quick succession.
    void robotIcon.getBoundingClientRect();
    robotIcon.classList.add('robot-bounce');
  }

  function closeMenu() {
    menu!.classList.add('translate-x-full');
    backdrop!.classList.add('opacity-0', 'pointer-events-none');
    toggle!.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMenu() {
    menu!.classList.remove('translate-x-full');
    backdrop!.classList.remove('opacity-0', 'pointer-events-none');
    toggle!.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu();
    else openMenu();
    bounceRobot();
  });

  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  backdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Always start closed on a fresh page — the freshly-swapped DOM already
  // has the closed classes server-rendered, but body scroll-lock is a JS
  // side effect that wouldn't otherwise be reset between ClientRouter navs.
  closeMenu();
}

// astro:page-load fires on initial load AND after every ClientRouter
// navigation.
document.addEventListener('astro:page-load', initMobileMenu);
