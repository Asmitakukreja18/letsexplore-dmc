/**
 * Let's Explore DMC — Realistic Airplane Window Experience
 * Features:
 * - 3D Perspective Tilt on Mouse Movement (Parallax Depth)
 * - Dynamic Sky Moods (Daylight Azure, Golden Sunset, Aurora Night)
 * - Draggable / Clickable Window Blind / Shade
 * - Ambient Aircraft Wing with Livery Winglet dipping in clouds
 */

(function () {
  'use strict';

  let currentSky = 'daylight';
  let isShadeClosed = false;

  const skyPresets = {
    daylight: {
      bg: "linear-gradient(180deg, #1e40af 0%, #38bdf8 45%, #e0f2fe 100%)",
      sunGlow: "rgba(255, 255, 255, 0.45)",
      cloudOpacity: 0.9,
      wingLight: "brightness(1) contrast(1)",
      hudAlt: "FL360 · 36,000 FT",
      timeText: "14:20 LOCAL TIME · DAYLIGHT"
    },
    sunset: {
      bg: "linear-gradient(180deg, #1e1b4b 0%, #c2410c 45%, #fbbf24 85%, #fef3c7 100%)",
      sunGlow: "rgba(251, 146, 60, 0.65)",
      cloudOpacity: 0.75,
      wingLight: "brightness(0.9) sepia(0.3) hue-rotate(-20deg)",
      hudAlt: "FL380 · 38,000 FT",
      timeText: "18:45 LOCAL TIME · GOLDEN SUNSET"
    },
    night: {
      bg: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #1e1b4b 100%)",
      sunGlow: "rgba(56, 189, 248, 0.25)",
      cloudOpacity: 0.35,
      wingLight: "brightness(0.6) contrast(1.2)",
      hudAlt: "FL410 · 41,000 FT",
      timeText: "22:15 LOCAL TIME · STARRY NIGHT"
    }
  };

  window.setWindowSky = function (skyKey) {
    if (!skyPresets[skyKey]) return;
    currentSky = skyKey;
    const preset = skyPresets[skyKey];

    const skyEl = document.getElementById('window-sky-view');
    const wingEl = document.getElementById('window-wing-layer');
    const hudAltEl = document.getElementById('window-hud-alt');
    const hudTimeEl = document.getElementById('window-hud-time');

    if (skyEl) {
      skyEl.style.background = preset.bg;
    }
    if (wingEl) {
      wingEl.style.filter = preset.wingLight;
    }
    if (hudAltEl) hudAltEl.textContent = preset.hudAlt;
    if (hudTimeEl) hudTimeEl.textContent = preset.timeText;

    // Update active pill
    document.querySelectorAll('.sky-toggle-btn').forEach(btn => {
      if (btn.getAttribute('data-sky') === skyKey) {
        btn.classList.add('bg-sunset', 'text-navy-deep', 'font-bold');
        btn.classList.remove('bg-white/10', 'text-white/70');
      } else {
        btn.classList.remove('bg-sunset', 'text-navy-deep', 'font-bold');
        btn.classList.add('bg-white/10', 'text-white/70');
      }
    });
  };

  window.toggleWindowShade = function () {
    isShadeClosed = !isShadeClosed;
    const shadeEl = document.getElementById('window-shade-cover');
    const shadeLabel = document.getElementById('shade-toggle-label');

    if (shadeEl) {
      if (isShadeClosed) {
        shadeEl.style.transform = 'translateY(0%)';
        if (shadeLabel) shadeLabel.textContent = "Open Shade";
      } else {
        shadeEl.style.transform = 'translateY(-100%)';
        if (shadeLabel) shadeLabel.textContent = "Pull Shade";
      }
    }
  };

  // 3D Parallax Tilt on Window Frame
  function initWindowParallax() {
    const windowFrame = document.getElementById('airplane-window-frame');
    if (!windowFrame) return;

    windowFrame.addEventListener('mousemove', (e) => {
      const rect = windowFrame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg tilt
      const rotateY = ((x - centerX) / centerX) * 12;

      windowFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    windowFrame.addEventListener('mouseleave', () => {
      windowFrame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    initWindowParallax();
    window.setWindowSky('daylight');
  });

})();
