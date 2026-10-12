/**
 * Destination Multi-Video Sequential Carousel
 * Smoothly crossfades between multi-destination clips:
 * - Turkey: Cappadocia -> Istanbul -> Pamukkale
 * - Ocean Collection: Maldives -> Bali -> Andaman
 */
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.dest-video-carousel, .ocean-video-carousel');
  if (!carousels.length) return;

  const DISPLAY_DURATION = 4600; // 4.6 seconds per destination

  carousels.forEach(carousel => {
    const videos = carousel.querySelectorAll('.carousel-tile-vid, .ocean-tile-vid');
    const badgeName = carousel.querySelector('.carousel-active-name, #ocean-active-name');
    const dots = carousel.querySelectorAll('.carousel-dot, .ocean-dot');
    const destTags = carousel.querySelectorAll('.carousel-dest-tag, .ocean-dest-tag');

    if (videos.length < 2) return;

    let destNames = [];
    if (carousel.dataset.destNames) {
      try {
        destNames = JSON.parse(carousel.dataset.destNames);
      } catch (e) {
        destNames = carousel.dataset.destNames.split(',').map(s => s.trim());
      }
    } else {
      destNames = ['Maldives', 'Bali', 'Andaman'];
    }

    let currentIndex = 0;
    let timer = null;

    // Ensure all videos are muted and playsinline for mobile autoplay
    videos.forEach((vid, idx) => {
      vid.muted = true;
      vid.playsInline = true;
      if (idx === 0) {
        vid.play().catch(() => {});
      }
    });

    function transitionTo(nextIndex) {
      if (nextIndex === currentIndex) return;

      const currentVid = videos[currentIndex];
      const nextVid = videos[nextIndex];

      // Prepare and play next video
      nextVid.currentTime = 0;
      const playPromise = nextVid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }

      // Smooth crossfade
      nextVid.classList.remove('opacity-0');
      nextVid.classList.add('opacity-100');

      currentVid.classList.remove('opacity-100');
      currentVid.classList.add('opacity-0');

      // Pause old video after transition finishes to conserve resources
      setTimeout(() => {
        if (nextIndex !== currentIndex) {
          currentVid.pause();
        }
      }, 1100);

      // Update badge text
      if (badgeName && destNames[nextIndex]) {
        badgeName.textContent = destNames[nextIndex];
      }

      // Update progress dots
      dots.forEach((dot, i) => {
        if (i === nextIndex) {
          dot.classList.remove('w-1.5', 'bg-white/40');
          dot.classList.add('w-3', 'bg-sunset');
        } else {
          dot.classList.remove('w-3', 'bg-sunset');
          dot.classList.add('w-1.5', 'bg-white/40');
        }
      });

      // Update destination tags text
      destTags.forEach((tag, i) => {
        if (i === nextIndex) {
          tag.classList.remove('text-white/75', 'font-normal');
          tag.classList.add('text-sunset', 'font-semibold');
        } else {
          tag.classList.remove('text-sunset', 'font-semibold');
          tag.classList.add('text-white/75', 'font-normal');
        }
      });

      currentIndex = nextIndex;
    }

    function startAutoSequence() {
      stopAutoSequence();
      timer = setInterval(() => {
        const next = (currentIndex + 1) % videos.length;
        transitionTo(next);
      }, DISPLAY_DURATION);
    }

    function stopAutoSequence() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // Start cycling
    startAutoSequence();

    // Respect page visibility to save battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoSequence();
        videos[currentIndex]?.pause();
      } else {
        videos[currentIndex]?.play().catch(() => {});
        startAutoSequence();
      }
    });
  });
});
