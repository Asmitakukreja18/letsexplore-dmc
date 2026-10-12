/**
 * Destination Multi-Video Sequential Carousel
 * High-End Film Cross-Dissolve Mix:
 * - Turkey: Cappadocia -> Istanbul -> Pamukkale
 * - Ocean Collection: Maldives -> Bali -> Andaman
 * - Dubai: Desert -> Burj -> Marina
 */
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.dest-video-carousel, .ocean-video-carousel');
  if (!carousels.length) return;

  const DISPLAY_DURATION = 5500; // 5.5s display time per destination
  const BLEND_DURATION = 2000;   // 2.0s silky cinematic film dissolve mix

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

    // Initialize all video styling for true multi-layer film blending
    videos.forEach((vid, idx) => {
      vid.muted = true;
      vid.playsInline = true;
      vid.setAttribute('playsinline', '');
      vid.setAttribute('muted', '');
      vid.style.willChange = 'opacity, transform, filter';
      vid.style.transition = `opacity ${BLEND_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1), transform 2.6s ease-out, filter ${BLEND_DURATION}ms ease-out`;

      if (idx === 0) {
        vid.style.opacity = '1';
        vid.style.zIndex = '2';
        vid.style.transform = 'scale(1)';
        vid.play().catch(() => {});
      } else {
        vid.style.opacity = '0';
        vid.style.zIndex = '1';
        vid.style.transform = 'scale(1.05)';
        vid.preload = 'auto'; // Preload videos for instant playback
      }
    });

    function transitionTo(nextIndex) {
      if (nextIndex === currentIndex || isBlending) return;
      isBlending = true;

      const currentVid = videos[currentIndex];
      const nextVid = videos[nextIndex];

      // Prepare incoming video in background
      nextVid.currentTime = 0;
      nextVid.style.zIndex = '3'; // Position incoming video over outgoing video
      nextVid.style.opacity = '0';
      nextVid.style.transform = 'scale(1.06)';
      nextVid.style.filter = 'brightness(1.15) contrast(1.05)';

      // Trigger video play
      const startCrossDissolve = () => {
        requestAnimationFrame(() => {
          // Both videos blend simultaneously for a true double-exposure film dissolve
          nextVid.style.opacity = '1';
          nextVid.style.transform = 'scale(1)';
          nextVid.style.filter = 'brightness(1) contrast(1)';

          currentVid.style.opacity = '0';
          currentVid.style.transform = 'scale(1.03)';

          // After dissolve duration finishes, clean up
          setTimeout(() => {
            currentVid.style.zIndex = '1';
            currentVid.style.transform = 'scale(1)';
            currentVid.pause();

            nextVid.style.zIndex = '2';
            currentIndex = nextIndex;
            isBlending = false;
          }, BLEND_DURATION);
        });
      };

      // Ensure frames are decoding before dissolving (prevents black cuts)
      let started = false;
      const onFrameReady = () => {
        if (started) return;
        started = true;
        nextVid.removeEventListener('timeupdate', onFrameReady);
        nextVid.removeEventListener('playing', onFrameReady);
        startCrossDissolve();
      };

      nextVid.addEventListener('timeupdate', onFrameReady, { once: true });
      nextVid.addEventListener('playing', onFrameReady, { once: true });

      const playPromise = nextVid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }

      // Fallback safeguard in case timeupdate is delayed
      setTimeout(() => {
        if (!started) onFrameReady();
      }, 300);

      // Smoothly update destination badge text with slide/fade
      if (badgeName && destNames[nextIndex]) {
        badgeName.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        badgeName.style.opacity = '0';
        badgeName.style.transform = 'translateY(-6px)';
        setTimeout(() => {
          badgeName.textContent = destNames[nextIndex];
          badgeName.style.transform = 'translateY(6px)';
          badgeName.style.opacity = '0';
          requestAnimationFrame(() => {
            badgeName.style.transform = 'translateY(0)';
            badgeName.style.opacity = '1';
          });
        }, 350);
      }

      // Update indicator dots
      dots.forEach((dot, i) => {
        if (i === nextIndex) {
          dot.classList.remove('w-1.5', 'bg-white/40');
          dot.classList.add('w-3', 'bg-sunset');
        } else {
          dot.classList.remove('w-3', 'bg-sunset');
          dot.classList.add('w-1.5', 'bg-white/40');
        }
      });

      // Update destination tags text highlight
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

    // Start auto cycling
    startAutoSequence();

    // Respect page visibility to preserve battery and GPU
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
