function initVideoPosters() {
  document.querySelectorAll<HTMLElement>('[data-video-poster]').forEach((wrapper) => {
    const video = wrapper.querySelector('video');
    const button = wrapper.querySelector<HTMLButtonElement>('[data-video-poster-play]');
    if (!video || !button) return;

    function hideButton() {
      button!.classList.add('opacity-0', 'pointer-events-none');
    }

    button.addEventListener('click', () => {
      video.play();
    });

    video.addEventListener('play', hideButton);
  });
}

// astro:page-load fires on initial load AND after every ClientRouter
// navigation.
document.addEventListener('astro:page-load', initVideoPosters);
