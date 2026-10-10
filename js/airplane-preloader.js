/**
 * Let's Explore DMC — Cinematic Unified Airplane & Window Zoom Preloader
 * 
 * Choreography:
 * 1. Airliner flies in from off-screen left across passing clouds.
 * 2. Entire airplane zooms smoothly into the camera (scale 1.0 -> 4.5),
 *    anchored directly to the passenger window on the fuselage.
 * 3. Iconic Boeing/Airbus cabin chime ("Ding-Dong") plays upon window lock.
 * 4. Destination imagery (Vietnam, Singapore, Dubai, Turkey, Bali) cycles
 *    with slow, silky 1.2s crossfades ("dheere dheere").
 * 5. Finale: Airplane zooms fully past the camera into the destination scene,
 *    and the image dissolves very gradually and gracefully (1.8s fade),
 *    smoothly unveiling the luxury live website underneath.
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // 1. FLIGHT AUDIO SYNTHESIZER (Web Audio API)
  // -------------------------------------------------------------
  class FlightSoundEngine {
    constructor() {
      this.ctx = null;
      this.jetGain = null;
      this.noiseNode = null;
      this.rumbleOsc = null;
      this.isMuted = localStorage.getItem('le_sound_muted') === 'true';
      this.isPlaying = false;
      this.initialized = false;
    }

    init() {
      if (this.ctx) return;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        this.ctx = new AudioCtx();
        this.initialized = true;
      } catch (e) {
        console.warn('Web Audio not supported:', e);
      }
    }

    ensureRunning() {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    }

    startJetAmbient() {
      if (this.isMuted) return;
      this.ensureRunning();
      if (!this.ctx || this.isPlaying) return;
      this.isPlaying = true;

      try {
        const t = this.ctx.currentTime;

        // Master Jet Gain
        this.jetGain = this.ctx.createGain();
        this.jetGain.gain.setValueAtTime(0.001, t);
        this.jetGain.gain.exponentialRampToValueAtTime(0.26, t + 1.2);
        this.jetGain.connect(this.ctx.destination);

        // Brown/Pink Noise for Aerodynamic Jet Air Rush
        const bufferSize = 2 * this.ctx.sampleRate;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
          b6 = white * 0.115926;
        }

        this.noiseNode = this.ctx.createBufferSource();
        this.noiseNode.buffer = noiseBuffer;
        this.noiseNode.loop = true;

        // Lowpass filter for deep cruising cabin audio
        const lowpass = this.ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.setValueAtTime(360, t);
        lowpass.Q.setValueAtTime(1.5, t);

        this.noiseNode.connect(lowpass);
        lowpass.connect(this.jetGain);
        this.noiseNode.start(t);

        // Sub-bass Turbine Rumble (Sine oscillator)
        this.rumbleOsc = this.ctx.createOscillator();
        this.rumbleOsc.type = 'sine';
        this.rumbleOsc.frequency.setValueAtTime(56, t);

        const rumbleGain = this.ctx.createGain();
        rumbleGain.gain.setValueAtTime(0.18, t);

        this.rumbleOsc.connect(rumbleGain);
        rumbleGain.connect(this.jetGain);
        this.rumbleOsc.start(t);
      } catch (err) {
        console.warn('Error starting jet audio:', err);
      }
    }

    playCabinChime() {
      if (this.isMuted) return;
      this.ensureRunning();
      if (!this.ctx) return;

      try {
        const t = this.ctx.currentTime;

        // Tone 1: Ding (E5, ~659.25 Hz)
        const osc1 = this.ctx.createOscillator();
        const gain1 = this.ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(659.25, t);
        gain1.gain.setValueAtTime(0.32, t);
        gain1.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
        osc1.connect(gain1);
        gain1.connect(this.ctx.destination);
        osc1.start(t);
        osc1.stop(t + 1.2);

        // Tone 2: Dong (C5, ~523.25 Hz) at +0.32s
        const t2 = t + 0.32;
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(523.25, t2);
        gain2.gain.setValueAtTime(0.35, t2);
        gain2.gain.exponentialRampToValueAtTime(0.0001, t2 + 1.6);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(t2);
        osc2.stop(t2 + 1.6);
      } catch (err) {}
    }

    playSlideTick() {
      if (this.isMuted) return;
      this.ensureRunning();
      if (!this.ctx) return;

      try {
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1150, t);
        osc.frequency.exponentialRampToValueAtTime(880, t + 0.16);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.18);
      } catch (err) {}
    }

    playTakeoffWhoosh() {
      if (this.isMuted) return;
      this.ensureRunning();
      if (!this.ctx) return;

      try {
        const t = this.ctx.currentTime;

        // Ramp jet gain before cutoff
        if (this.jetGain) {
          this.jetGain.gain.cancelScheduledValues(t);
          this.jetGain.gain.setValueAtTime(this.jetGain.gain.value, t);
          this.jetGain.gain.linearRampToValueAtTime(0.6, t + 0.4);
          this.jetGain.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
        }

        // Supersonic sweep whoosh
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(130, t);
        osc.frequency.exponentialRampToValueAtTime(950, t + 0.8);
        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 1.2);

        setTimeout(() => {
          this.stop();
        }, 1800);
      } catch (err) {}
    }

    toggleMute() {
      this.isMuted = !this.isMuted;
      localStorage.setItem('le_sound_muted', this.isMuted ? 'true' : 'false');

      if (this.isMuted) {
        if (this.jetGain && this.ctx) {
          this.jetGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
        }
      } else {
        if (!this.isPlaying) {
          this.startJetAmbient();
        } else if (this.jetGain && this.ctx) {
          this.jetGain.gain.setValueAtTime(0.26, this.ctx.currentTime);
        }
      }
      return !this.isMuted;
    }

    stop() {
      try {
        if (this.noiseNode) { this.noiseNode.stop(); this.noiseNode.disconnect(); }
        if (this.rumbleOsc) { this.rumbleOsc.stop(); this.rumbleOsc.disconnect(); }
        if (this.jetGain) { this.jetGain.disconnect(); }
        this.isPlaying = false;
      } catch (e) {}
    }
  }

  // -------------------------------------------------------------
  // 2. DESTINATION DATA (5 KEY DESTINATIONS)
  // -------------------------------------------------------------
  const DESTINATIONS = [
    {
      name: "Da Nang, Vietnam",
      flag: "🇻🇳",
      tag: "Cầu Vàng · Golden Bridge",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=85"
    },
    {
      name: "Marina Bay, Singapore",
      flag: "🇸🇬",
      tag: "Helix Bridge & Skyline",
      img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=85"
    },
    {
      name: "Dubai, United Arab Emirates",
      flag: "🇦🇪",
      tag: "Burj Khalifa & Desert Dunes",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85"
    },
    {
      name: "Cappadocia, Turkey",
      flag: "🇹🇷",
      tag: "Sunrise Balloons & Valleys",
      img: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1400&q=85"
    },
    {
      name: "Nusa Penida, Bali",
      flag: "🏝️",
      tag: "Kelingking Beach & Blue Lagoon",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85"
    }
  ];

  // -------------------------------------------------------------
  // 3. PRELOADER ORCHESTRATION
  // -------------------------------------------------------------
  function initPreloader() {
    const preloader = document.getElementById('airplane-preloader');
    if (!preloader) return;

    const flightStage = document.getElementById('preloader-flight-stage');
    const planeRig = document.getElementById('preloader-airplane-rig');
    const planeWindow = document.getElementById('preloader-plane-window');
    const destWindowContainer = document.getElementById('preloader-dest-slides');
    const fullscreenDest = document.getElementById('preloader-fullscreen-dest');
    const destFullscreenContainer = document.getElementById('preloader-dest-fullscreen-slides');
    const telemetryText = document.getElementById('preloader-telemetry-text');
    const progressFill = document.getElementById('preloader-progress-fill');
    const percentText = document.getElementById('preloader-percent-text');
    const soundBtn = document.getElementById('preloader-sound-btn');
    const skipBtn = document.getElementById('preloader-skip-btn');
    const hudWrap = document.getElementById('preloader-hud-wrap');
    const reticle = document.getElementById('preloader-window-reticle');

    const sound = new FlightSoundEngine();

    let currentDestIndex = 0;
    let progress = 0;
    let isFinished = false;
    let slideTimer = null;
    let progressTimer = null;

    // Sound button toggle
    if (soundBtn) {
      if (sound.isMuted) {
        soundBtn.innerHTML = '🔈 Muted';
        soundBtn.classList.add('is-muted');
      } else {
        soundBtn.innerHTML = '🔊 Sound: ON';
        soundBtn.classList.remove('is-muted');
      }

      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const unmuted = sound.toggleMute();
        if (unmuted) {
          soundBtn.innerHTML = '🔊 Sound: ON';
          soundBtn.classList.remove('is-muted');
        } else {
          soundBtn.innerHTML = '🔈 Muted';
          soundBtn.classList.add('is-muted');
        }
      });
    }

    // Auto-unlock Web Audio on first gesture anywhere
    const unlockAudio = () => {
      sound.ensureRunning();
      if (!sound.isMuted && !sound.isPlaying) {
        sound.startJetAmbient();
      }
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio, { passive: true });
    window.addEventListener('keydown', unlockAudio, { passive: true });

    // Populate Destination Slides in both the window & fullscreen reveal layer
    if (destWindowContainer) {
      destWindowContainer.innerHTML = DESTINATIONS.map((d, i) => `
        <img class="preloader-dest-slide ${i === 0 ? 'is-active' : ''}" 
             src="${d.img}" 
             alt="${d.name}" 
             id="preloader-slide-${i}" />
      `).join('');
    }

    if (destFullscreenContainer) {
      destFullscreenContainer.innerHTML = DESTINATIONS.map((d, i) => `
        <img class="preloader-fullscreen-slide ${i === 0 ? 'is-active' : ''}" 
             src="${d.img}" 
             alt="${d.name}" 
             id="preloader-fs-slide-${i}" />
      `).join('');
    }

    // Update Telemetry Tag
    function updateTelemetry(index) {
      if (!telemetryText) return;
      const d = DESTINATIONS[index];
      telemetryText.innerHTML = `${d.flag} Approaching ${d.name} · <span style="color:#F4A261;">${d.tag}</span>`;
    }

    // STEP 1: Airplane flies in from left across clouds (0ms -> 1100ms)
    if (flightStage) {
      flightStage.style.transform = 'translateX(-125vw) scale(0.88)';
      flightStage.style.opacity = '0';

      setTimeout(() => {
        sound.startJetAmbient();
        flightStage.style.transition = 'transform 1.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease';
        flightStage.style.transform = 'translateX(0) scale(1)';
        flightStage.style.opacity = '1';
      }, 50);
    }

    // STEP 2: The ENTIRE Airplane zooms forward with the window! (1200ms -> 2600ms)
    setTimeout(() => {
      if (isFinished) return;

      // Play Boeing/Airbus Cabin Announcement Chime ("Ding-Dong")
      sound.playCabinChime();

      // Zoom the ENTIRE airplane rig!
      if (planeRig) {
        planeRig.style.transition = 'transform 1.6s cubic-bezier(0.22, 1, 0.36, 1)';
        planeRig.style.transform = 'scale(4.5)';
      }

      if (planeWindow) {
        planeWindow.classList.add('is-zoomed');
      }

      if (reticle) {
        reticle.style.opacity = '0';
      }

      updateTelemetry(0);
    }, 1200);

    // STEP 3: Progress bar fills up & destinations cycle with slow crossfades ("dheere dheere")
    const startTime = Date.now();
    const duration = 3800; // Total duration ~4.2s for silky pacing

    progressTimer = setInterval(() => {
      if (isFinished) return;
      const elapsed = Date.now() - startTime;
      progress = Math.min(100, Math.floor((elapsed / duration) * 100));

      if (progressFill) progressFill.style.width = `${progress}%`;
      if (percentText) percentText.textContent = `${progress}%`;

      if (progress >= 100) {
        clearInterval(progressTimer);
        finishPreloader();
      }
    }, 40);

    // Destination cycling every 750ms with 1.2s smooth crossfade
    setTimeout(() => {
      if (isFinished) return;
      slideTimer = setInterval(() => {
        if (isFinished) return;
        currentDestIndex = (currentDestIndex + 1) % DESTINATIONS.length;

        // Crossfade window slides
        DESTINATIONS.forEach((_, i) => {
          const slide = document.getElementById(`preloader-slide-${i}`);
          if (slide) slide.classList.toggle('is-active', i === currentDestIndex);

          const fsSlide = document.getElementById(`preloader-fs-slide-${i}`);
          if (fsSlide) fsSlide.classList.toggle('is-active', i === currentDestIndex);
        });

        sound.playSlideTick();
        updateTelemetry(currentDestIndex);
      }, 750);
    }, 1600);

    // STEP 4: Finale — Entire Airplane flies all the way through,
    // and destination image dissolves slowly & gracefully ("dheere dheere image htaoo")
    function finishPreloader() {
      if (isFinished) return;
      isFinished = true;
      clearInterval(slideTimer);
      clearInterval(progressTimer);

      if (telemetryText) {
        telemetryText.innerHTML = `✨ Destination Reached · Welcome to Let's Explore DMC`;
      }
      if (progressFill) progressFill.style.width = '100%';
      if (percentText) percentText.textContent = '100%';

      // Hide HUD smoothly
      if (hudWrap) {
        hudWrap.classList.add('is-hidden');
      }

      // Play supersonic transition whoosh
      sound.playTakeoffWhoosh();

      // Reveal fullscreen layer at the moment plane zooms past screen
      if (fullscreenDest) {
        fullscreenDest.classList.add('is-visible');
      }

      // 1. The ENTIRE airplane zooms massive past the camera into the scene (scale 26!)
      if (planeRig) {
        planeRig.style.transition = 'transform 1.0s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease';
        planeRig.style.transform = 'scale(26)';
        planeRig.style.opacity = '0';
      }

      // 2. "DHEERE DHEERE IMAGE HTAOO":
      // Destination image and preloader background dissolve smoothly over 1.8 seconds!
      setTimeout(() => {
        if (fullscreenDest) {
          fullscreenDest.classList.add('is-dissolving');
        }
        preloader.classList.add('is-loaded');

        // Completely hide after silky dissolve finishes
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1800);
      }, 450);
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        finishPreloader();
      });
    }

    // Safety fallback: auto-reveal page after 5.5s
    setTimeout(() => {
      if (!isFinished) finishPreloader();
    }, 5500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreloader);
  } else {
    initPreloader();
  }

})();
