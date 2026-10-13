/**
 * Destination Multi-Video Sequential Carousel
 * High-End Film Cross-Dissolve Mix:
 * - Turkey: Cappadocia -> Istanbul -> Pamukkale
 * - Ocean Collection: Maldives -> Bali -> Andaman
 * - Dubai: Desert -> Burj -> Marina
 *
 * All videos play simultaneously in GPU background.
 * True zero-latency double-exposure cross-fade mixing with no seeking or black frames.
 */
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.dest-video-carousel, .ocean-video-carousel');
  if (!carousels.length) return;

  const DISPLAY_DURATION = 3200; // 3.2s per destination for lively reel experience
  const BLEND_DURATION = 1000;   // 1.0s silky film dissolve mix

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

    // Initialize all video styling for true continuous parallel streaming & film blending
    videos.forEach((vid, idx) => {
      vid.muted = true;
      vid.loop = true;
      vid.playsInline = true;
      vid.setAttribute('playsinline', '');
      vid.setAttribute('muted', '');
      vid.setAttribute('loop', '');
      vid.style.willChange = 'opacity, transform, filter';
      vid.style.transition = `opacity ${BLEND_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1), transform 2.6s ease-out, filter ${BLEND_DURATION}ms ease-out`;

      // Start all videos playing silently in parallel so frames are continuously hot in GPU
      vid.play().catch(() => {});

      if (idx === 0) {
        vid.style.opacity = '1';
        vid.style.zIndex = '2';
        vid.style.transform = 'scale(1)';
        vid.style.filter = 'brightness(1) contrast(1)';
      } else {
        vid.style.opacity = '0';
        vid.style.zIndex = '1';
        vid.style.transform = 'scale(1.05)';
        vid.style.filter = 'brightness(1.1) contrast(1.05)';
      }
    });

    function transitionTo(nextIndex) {
      if (nextIndex === currentIndex || isBlending) return;
      isBlending = true;

      const currentVid = videos[currentIndex];
      const nextVid = videos[nextIndex];

      // Incoming video is ALREADY streaming live frames!
      // Position incoming video on top, start cross-fade dissolve immediately
      nextVid.style.zIndex = '3';
      currentVid.style.zIndex = '2';

      requestAnimationFrame(() => {
        // True double-exposure film cross-dissolve:
        // Incoming video fades smoothly in from 0 to 1 with gentle zoom breath
        nextVid.style.opacity = '1';
        nextVid.style.transform = 'scale(1)';
        nextVid.style.filter = 'brightness(1) contrast(1)';

        // Outgoing video dissolves smoothly out from 1 to 0 with gentle zoom
        currentVid.style.opacity = '0';
        currentVid.style.transform = 'scale(1.04)';

        // After dissolve finishes, normalize z-indices
        setTimeout(() => {
          currentVid.style.zIndex = '1';
          currentVid.style.transform = 'scale(1.05)';
          currentVid.style.filter = 'brightness(1.1) contrast(1.05)';

          nextVid.style.zIndex = '2';
          currentIndex = nextIndex;
          isBlending = false;
        }, BLEND_DURATION);
      });

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
      } else {
        videos.forEach(v => v.play().catch(() => {}));
        startAutoSequence();
      }
    });
  });
});
