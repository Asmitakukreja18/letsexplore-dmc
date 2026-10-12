/**
 * Destination Multi-Video Sequential Carousel
 * Smooth Cinematic Film Cross-Dissolve Mix:
 * - Turkey: Cappadocia -> Istanbul -> Pamukkale
 * - Ocean Collection: Maldives -> Bali -> Andaman
 * - Dubai: Desert -> Burj -> Marina
 */
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.dest-video-carousel, .ocean-video-carousel');
  if (!carousels.length) return;

  const DISPLAY_DURATION = 5000; // 5.0 seconds per destination
  const BLEND_DURATION = 1800;   // 1.8 seconds silky film dissolve mix

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
    let isBlending = false;
    let timer = null;

    // Initialize all video styling for true layer blending
    videos.forEach((vid, idx) => {
      vid.muted = true;
      vid.playsInline = true;
      vid.style.transition = `opacity ${BLEND_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1), transform 2.4s ease-out`;
      vid.style.willChange = 'opacity, transform';
      if (idx === 0) {
        vid.style.opacity = '1';
        vid.style.zIndex = '2';
        vid.play().catch(() => {});
      } else {
        vid.style.opacity = '0';
        vid.style.zIndex = '1';
      }
    });

    function transitionTo(nextIndex) {
      if (nextIndex === currentIndex || isBlending) return;
      isBlending = true;

      const currentVid = videos[currentIndex];
      const nextVid = videos[nextIndex];

      // Reset and play next video underneath / on top
      nextVid.currentTime = 0;
      nextVid.style.zIndex = '3'; // Put incoming video ON TOP
      currentVid.style.zIndex = '2'; // Outgoing video stays fully visible underneath

      const playPromise = nextVid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }

      // Smooth double-buffer film dissolve mix:
      // Start cross-fade on next frame so decoded frame is ready
      requestAnimationFrame(() => {
        // Fade in incoming video on top of outgoing video
        nextVid.style.opacity = '1';
        // Add subtle cinematic zoom breathing during dissolve
        nextVid.style.transform = 'scale(1.05)';
        currentVid.style.transform = 'scale(1.02)';

        // After blend completes, clean up outgoing video
        setTimeout(() => {
          currentVid.style.opacity = '0';
          currentVid.style.zIndex = '1';
          currentVid.style.transform = 'scale(1)';
          currentVid.pause();

          nextVid.style.zIndex = '2';
          nextVid.style.transform = 'scale(1)';
          currentIndex = nextIndex;
          isBlending = false;
        }, BLEND_DURATION);
      });

      // Update badge text smoothly
      if (badgeName && destNames[nextIndex]) {
        badgeName.style.transition = 'opacity 0.3s ease';
        badgeName.style.opacity = '0';
        setTimeout(() => {
          badgeName.textContent = destNames[nextIndex];
          badgeName.style.opacity = '1';
        }, 300);
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
