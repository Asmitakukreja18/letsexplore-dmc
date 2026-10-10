/**
 * Let's Explore DMC — Cinematic 3D Flight Experience
 * Features:
 * - Procedural 3D luxury commercial aircraft built with Three.js (no external heavy .gltf assets)
 * - Realistic banking, pitch, roll, and yaw as the aircraft navigates curved flight paths
 * - Dual engine contrails and glowing navigation strobe lights
 * - Floating atmospheric 3D cloud clusters
 * - GSAP ScrollTrigger synchronization linking scroll to global destination hops:
 *     Dubai ➔ Turkey (Cappadocia) ➔ Bali ➔ Singapore ➔ Georgia
 * - Real Let's Explore DMC package data, interactive waypoints, and WhatsApp booking integration
 * - Responsive & mobile optimized with prefers-reduced-motion fallback
 */

(function () {
  'use strict';

  // --- DESTINATION WAYPOINTS DATA (Real Let's Explore DMC Packages) ---
  const flightWaypoints = [
    {
      id: "dubai",
      code: "DXB",
      city: "Dubai & Abu Dhabi",
      country: "United Arab Emirates",
      subtitle: "Burj Khalifa, Desert Safari & Luxury Marina Yacht",
      altitude: "FL380 · 38,000 FT",
      speed: "480 KTS · MACH 0.82",
      heading: "HDG 295° NW",
      price: "From ₹34,999",
      duration: "5 Days / 4 Nights",
      highlights: ["Burj Khalifa 124th Floor", "4x4 Desert Dune Bashing & BBQ", "Sheikh Zayed Grand Mosque Abu Dhabi", "Marina Dhow Luxury Cruise"],
      href: "dubai-package.html",
      waText: "Hi Let's Explore DMC, I am interested in the Dubai & Abu Dhabi luxury flight package!",
      bgTheme: {
        skyTop: "#081b33",
        skyBottom: "#d97706",
        ambient: "#f59e0b",
        glow: "rgba(217, 119, 6, 0.35)"
      }
    },
    {
      id: "turkey",
      code: "IST",
      city: "Turkey & Cappadocia",
      country: "Türkiye",
      subtitle: "Fairy Chimneys, Hot Air Balloons & Bosphorus Yacht",
      altitude: "FL410 · 41,000 FT",
      speed: "510 KTS · MACH 0.85",
      heading: "HDG 320° NNW",
      price: "From ₹42,999",
      duration: "5 Days / 4 Nights",
      highlights: ["Sunrise Hot Air Balloon Flight", "5★ Cappadocia Cave Suite Stay", "Bosphorus Private Sunset Yacht Cruise", "Hagia Sophia & Blue Mosque VIP"],
      href: "turkey-package.html",
      waText: "Hi Let's Explore DMC, I am interested in the Turkey & Cappadocia Bestseller package!",
      bgTheme: {
        skyTop: "#0B1F3A",
        skyBottom: "#e76f51",
        ambient: "#f4a261",
        glow: "rgba(231, 111, 81, 0.35)"
      }
    },
    {
      id: "bali",
      code: "DPS",
      city: "Bali & Nusa Penida",
      country: "Indonesia",
      subtitle: "Private Pool Villas, Kelingking T-Rex & Jungle Swings",
      altitude: "FL360 · 36,000 FT",
      speed: "475 KTS · MACH 0.81",
      heading: "HDG 140° SE",
      price: "From ₹48,999",
      duration: "6 Days / 7 Nights",
      highlights: ["4★ Kuta & Ubud Private Pool Villa", "Nusa Penida Kelingking Beach Fast Boat", "Ayung River Rafting & 120-min ATV", "Uluwatu Cliff Sunset & Kecak Dance"],
      href: "bali-package.html",
      waText: "Hi Let's Explore DMC, I want to book the Bali & Nusa Penida tropical luxury package!",
      bgTheme: {
        skyTop: "#041528",
        skyBottom: "#0284c7",
        ambient: "#38bdf8",
        glow: "rgba(2, 132, 199, 0.35)"
      }
    },
    {
      id: "singapore",
      code: "SIN",
      city: "Singapore & Sentosa",
      country: "Singapore",
      subtitle: "Futuristic Skyline, Marina Bay & Universal Studios",
      altitude: "FL390 · 39,000 FT",
      speed: "495 KTS · MACH 0.83",
      heading: "HDG 115° ESE",
      price: "From ₹52,062",
      duration: "4 Days / 3 Nights",
      highlights: ["Universal Studios Singapore Full Pass", "Gardens by the Bay & Cloud Forest", "Marina Bay Sands SkyPark Observation", "Sentosa Cable Car Skypass"],
      href: "singapore-package.html",
      waText: "Hi Let's Explore DMC, I am enquiring about the Singapore & Sentosa luxury tour!",
      bgTheme: {
        skyTop: "#0b122c",
        skyBottom: "#7c3aed",
        ambient: "#a855f7",
        glow: "rgba(124, 58, 237, 0.35)"
      }
    },
    {
      id: "georgia",
      code: "TBS",
      city: "Georgia Caucasus",
      country: "Georgia",
      subtitle: "Kazbegi 4x4 Alpine Peaks & Historic Old Tbilisi",
      altitude: "FL370 · 37,000 FT",
      speed: "470 KTS · MACH 0.80",
      heading: "HDG 335° NNW",
      price: "$300 USD Special",
      duration: "5 Days / 4 Nights",
      highlights: ["4★ Boutique Hotel in Old Tbilisi", "Off-road 4x4 Gergeti Trinity Church Safari", "Gudauri Ski Resort & Caucasus Panorama", "Tbilisi Aerial Cable Car & Wine Cellar"],
      href: "georgia-package.html",
      waText: "Hi Let's Explore DMC, I want to book the Georgia $300 USD Special package!",
      bgTheme: {
        skyTop: "#07162c",
        skyBottom: "#f59e0b",
        ambient: "#fbbf24",
        glow: "rgba(245, 158, 11, 0.35)"
      }
    }
  ];

  let currentWaypointIndex = 0;
  let isAutoplaying = false;
  let autoplayTimer = null;
  let isAudioMuted = true;
  let audioContext = null;

  // --- THREE.JS SCENE VARIABLES ---
  let scene, camera, renderer, airplaneGroup;
  let contrailParticles = [];
  let cloudGroup;
  let animationFrameId;
  let containerEl;
  let canvasEl;

  // --- BUILD PROCEDURAL 3D LUXURY PASSENGER AIRCRAFT ---
  function create3DAirplane() {
    const plane = new THREE.Group();

    // Material definitions (Premium luxury airline palette)
    const whiteBodyMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
      metalness: 0.25,
    });

    const navyAccentMat = new THREE.MeshStandardMaterial({
      color: 0x0B1F3A, // Let's Explore Navy
      roughness: 0.3,
      metalness: 0.4,
    });

    const sunsetAccentMat = new THREE.MeshStandardMaterial({
      color: 0xF4A261, // Let's Explore Sunset Orange
      roughness: 0.2,
      metalness: 0.3,
    });

    const darkGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0a192f,
      roughness: 0.1,
      metalness: 0.9,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      roughness: 0.2,
      metalness: 0.8,
    });

    const glowEngineMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Cyan turbine exhaust glow
    });

    // 1. FUSELAGE (Main Aircraft Body)
    const fuselageGeo = new THREE.CylinderGeometry(1.2, 1.25, 18, 32);
    const fuselage = new THREE.Mesh(fuselageGeo, whiteBodyMat);
    fuselage.rotation.x = Math.PI / 2;
    plane.add(fuselage);

    // Nose Cone (Streamlined Aerodynamic Radome)
    const noseGeo = new THREE.ConeGeometry(1.2, 5, 32);
    const nose = new THREE.Mesh(noseGeo, whiteBodyMat);
    nose.rotation.x = -Math.PI / 2;
    nose.position.z = 11.5;
    plane.add(nose);

    // Tail Cone (Aft tapering)
    const tailConeGeo = new THREE.ConeGeometry(1.25, 7, 32);
    const tailCone = new THREE.Mesh(tailConeGeo, whiteBodyMat);
    tailCone.rotation.x = Math.PI / 2;
    tailCone.position.z = -12.5;
    plane.add(tailCone);

    // 2. COCKPIT CANOPY
    const cockpitGeo = new THREE.SphereGeometry(1.22, 16, 16, 0, Math.PI, 0, Math.PI / 2);
    const cockpit = new THREE.Mesh(cockpitGeo, darkGlassMat);
    cockpit.scale.set(0.9, 0.75, 1.8);
    cockpit.position.set(0, 0.45, 8.8);
    plane.add(cockpit);

    // 3. CABIN WINDOW STRIPES (Left & Right sides)
    const windowStripeGeo = new THREE.BoxGeometry(0.06, 0.25, 12);
    const leftWindows = new THREE.Mesh(windowStripeGeo, darkGlassMat);
    leftWindows.position.set(1.22, 0.2, 0.5);
    plane.add(leftWindows);

    const rightWindows = new THREE.Mesh(windowStripeGeo, darkGlassMat);
    rightWindows.position.set(-1.22, 0.2, 0.5);
    plane.add(rightWindows);

    // Livery Sunset Stripe on Fuselage
    const stripeGeo = new THREE.BoxGeometry(2.46, 0.15, 14);
    const stripe = new THREE.Mesh(stripeGeo, sunsetAccentMat);
    stripe.position.set(0, -0.1, 0);
    plane.add(stripe);

    // 4. MAIN WINGS (Swept-back Aerodynamic)
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.lineTo(13, -6);
    wingShape.lineTo(13, -7.5);
    wingShape.lineTo(0, -4);
    wingShape.closePath();

    const wingExtrudeSettings = { depth: 0.22, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.05, bevelThickness: 0.05 };
    const wingGeo = new THREE.ExtrudeGeometry(wingShape, wingExtrudeSettings);

    // Right Wing
    const rightWing = new THREE.Mesh(wingGeo, whiteBodyMat);
    rightWing.rotation.x = Math.PI / 2;
    rightWing.rotation.z = 0.05; // slight dihedral
    rightWing.position.set(1.1, -0.2, 2);
    plane.add(rightWing);

    // Left Wing (Mirrored)
    const leftWing = new THREE.Mesh(wingGeo, whiteBodyMat);
    leftWing.rotation.x = Math.PI / 2;
    leftWing.rotation.z = -0.05;
    leftWing.scale.x = -1;
    leftWing.position.set(-1.1, -0.2, 2);
    plane.add(leftWing);

    // Winglet Right (Orange & Navy)
    const wingletGeo = new THREE.BoxGeometry(0.1, 1.8, 1.2);
    const rightWinglet = new THREE.Mesh(wingletGeo, sunsetAccentMat);
    rightWinglet.position.set(14.1, 0.7, -4.8);
    rightWinglet.rotation.z = -0.2;
    plane.add(rightWinglet);

    // Winglet Left
    const leftWinglet = new THREE.Mesh(wingletGeo, sunsetAccentMat);
    leftWinglet.position.set(-14.1, 0.7, -4.8);
    leftWinglet.rotation.z = 0.2;
    plane.add(leftWinglet);

    // 5. JET ENGINES (Twin Turbofans under wings)
    function createEngine(xPos) {
      const engineGroup = new THREE.Group();

      // Cowling
      const cowlGeo = new THREE.CylinderGeometry(0.7, 0.75, 4.2, 24);
      const cowl = new THREE.Mesh(cowlGeo, whiteBodyMat);
      cowl.rotation.x = Math.PI / 2;
      engineGroup.add(cowl);

      // Intake Rim
      const rimGeo = new THREE.TorusGeometry(0.68, 0.08, 12, 24);
      const rim = new THREE.Mesh(rimGeo, chromeMat);
      rim.position.z = 2.1;
      engineGroup.add(rim);

      // Spinner (Center bullet)
      const spinnerGeo = new THREE.ConeGeometry(0.28, 1.1, 16);
      const spinner = new THREE.Mesh(spinnerGeo, chromeMat);
      spinner.rotation.x = -Math.PI / 2;
      spinner.position.z = 1.9;
      engineGroup.add(spinner);

      // Exhaust Nozzle Glow
      const exhaustGeo = new THREE.CircleGeometry(0.6, 16);
      const exhaust = new THREE.Mesh(exhaustGeo, glowEngineMat);
      exhaust.rotation.y = Math.PI;
      exhaust.position.z = -2.12;
      engineGroup.add(exhaust);

      // Pylon attaching to wing
      const pylonGeo = new THREE.BoxGeometry(0.2, 0.8, 2.5);
      const pylon = new THREE.Mesh(pylonGeo, navyAccentMat);
      pylon.position.set(0, 0.75, -0.2);
      engineGroup.add(pylon);

      engineGroup.position.set(xPos, -1.3, 0.5);
      return engineGroup;
    }

    const rightEngine = createEngine(4.6);
    const leftEngine = createEngine(-4.6);
    plane.add(rightEngine);
    plane.add(leftEngine);

    // 6. TAIL SECTION (Vertical Stabilizer & Horizontal Stabilizers)
    // Vertical Fin (Rudder)
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0, 5.5);
    finShape.lineTo(2.2, 5.2);
    finShape.lineTo(4.5, 0);
    finShape.closePath();

    const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.2, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04 });
    const fin = new THREE.Mesh(finGeo, navyAccentMat);
    fin.rotation.y = Math.PI / 2;
    fin.position.set(0.1, 0.8, -14.5);
    plane.add(fin);

    // Orange Fin Accent Stripe
    const finStripeGeo = new THREE.BoxGeometry(0.25, 1.2, 2.0);
    const finStripe = new THREE.Mesh(finStripeGeo, sunsetAccentMat);
    finStripe.position.set(0, 4.4, -13.2);
    plane.add(finStripe);

    // Horizontal Tailplanes
    const hTailShape = new THREE.Shape();
    hTailShape.moveTo(0, 0);
    hTailShape.lineTo(5, -2);
    hTailShape.lineTo(5, -3);
    hTailShape.lineTo(0, -1.8);
    hTailShape.closePath();

    const hTailGeo = new THREE.ExtrudeGeometry(hTailShape, { depth: 0.15, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03 });
    const rightHTail = new THREE.Mesh(hTailGeo, whiteBodyMat);
    rightHTail.rotation.x = Math.PI / 2;
    rightHTail.position.set(0.5, 0.6, -12);
    plane.add(rightHTail);

    const leftHTail = new THREE.Mesh(hTailGeo, whiteBodyMat);
    leftHTail.rotation.x = Math.PI / 2;
    leftHTail.scale.x = -1;
    leftHTail.position.set(-0.5, 0.6, -12);
    plane.add(leftHTail);

    // 7. GLOWING NAVIGATION LIGHTS (Starboard Green, Port Red, Tail White)
    const greenLightGeo = new THREE.SphereGeometry(0.16, 8, 8);
    const greenLightMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
    const greenLight = new THREE.Mesh(greenLightGeo, greenLightMat);
    greenLight.position.set(14.1, 0.65, -4.8);
    plane.add(greenLight);

    const redLightMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const redLight = new THREE.Mesh(greenLightGeo, redLightMat);
    redLight.position.set(-14.1, 0.65, -4.8);
    plane.add(redLight);

    // Scale overall model for pleasant screen presence
    plane.scale.set(0.52, 0.52, 0.52);

    return plane;
  }

  // --- PROCEDURAL ATMOSPHERIC CLOUDS ---
  function createCloudCluster() {
    const group = new THREE.Group();
    const puffGeo = new THREE.SphereGeometry(1, 8, 8);
    const puffMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.28,
      roughness: 0.9,
      metalness: 0.0,
    });

    for (let c = 0; c < 18; c++) {
      const cluster = new THREE.Group();
      const numPuffs = 6 + Math.floor(Math.random() * 5);
      for (let p = 0; p < numPuffs; p++) {
        const puff = new THREE.Mesh(puffGeo, puffMat);
        puff.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 8
        );
        const s = 2 + Math.random() * 3.5;
        puff.scale.set(s, s * 0.6, s);
        cluster.add(puff);
      }
      cluster.position.set(
        (Math.random() - 0.5) * 140,
        -10 + (Math.random() - 0.5) * 20,
        -60 + (Math.random() - 0.5) * 160
      );
      group.add(cluster);
    }

    return group;
  }

  // --- CONTRAIL PARTICLE SYSTEM ---
  function initContrails() {
    const particleCount = 70;
    const geo = new THREE.SphereGeometry(0.15, 6, 6);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
    });

    for (let i = 0; i < particleCount; i++) {
      const pLeft = new THREE.Mesh(geo, mat.clone());
      const pRight = new THREE.Mesh(geo, mat.clone());
      pLeft.visible = false;
      pRight.visible = false;
      scene.add(pLeft);
      scene.add(pRight);
      contrailParticles.push({ left: pLeft, right: pRight, age: 0, life: 60 });
    }
  }

  let contrailIndex = 0;
  function updateContrails() {
    if (!airplaneGroup) return;

    // Spawn contrail puffs from engine nozzles
    const leftEnginePos = new THREE.Vector3(-2.4, -0.6, -1.8).applyMatrix4(airplaneGroup.matrixWorld);
    const rightEnginePos = new THREE.Vector3(2.4, -0.6, -1.8).applyMatrix4(airplaneGroup.matrixWorld);

    if (contrailParticles.length > 0) {
      const pair = contrailParticles[contrailIndex % contrailParticles.length];
      pair.left.position.copy(leftEnginePos);
      pair.right.position.copy(rightEnginePos);
      pair.left.visible = true;
      pair.right.visible = true;
      pair.age = 0;
      pair.left.scale.set(1, 1, 1);
      pair.right.scale.set(1, 1, 1);
      pair.left.material.opacity = 0.4;
      pair.right.material.opacity = 0.4;
      contrailIndex++;
    }

    // Age and expand existing contrails
    for (let i = 0; i < contrailParticles.length; i++) {
      const p = contrailParticles[i];
      if (p.left.visible) {
        p.age++;
        const progress = p.age / p.life;
        const scale = 1 + progress * 4;
        p.left.scale.set(scale, scale, scale);
        p.right.scale.set(scale, scale, scale);
        p.left.material.opacity = Math.max(0, 0.4 * (1 - progress));
        p.right.material.opacity = Math.max(0, 0.4 * (1 - progress));

        // slight drift
        p.left.position.y += 0.01;
        p.right.position.y += 0.01;

        if (p.age >= p.life) {
          p.left.visible = false;
          p.right.visible = false;
        }
      }
    }
  }

  // --- AUDIO SYNTHESIZER (Jet Cabin Ambient Hum & Whoosh) ---
  function playJetSound() {
    if (isAudioMuted) return;
    try {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      const now = audioContext.currentTime;

      // Soft white-noise wind whoosh
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.4);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.9);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start(now);
      osc.stop(now + 0.95);
    } catch (e) {
      console.warn("Audio unavailable:", e);
    }
  }

  // --- INITIALIZE THREE.JS ENGINE ---
  function initThreeScene() {
    containerEl = document.getElementById('flight-3d-stage');
    canvasEl = document.getElementById('flight-three-canvas');
    if (!containerEl || !canvasEl) return;

    const width = containerEl.clientWidth;
    const height = containerEl.clientHeight;

    // Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x061224, 0.012);

    // Camera (Cinematic Telephoto Perspective)
    camera = new THREE.PerspectiveCamera(42, width / height, 0.5, 600);
    camera.position.set(0, 4, 38);

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvasEl,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Lighting (Warm Sunlight + Ambient Sky Fill)
    const ambientLight = new THREE.AmbientLight(0xdbeafe, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff7ed, 2.2);
    sunLight.position.set(30, 40, 25);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0xF4A261, 1.4);
    rimLight.position.set(-25, -10, -20);
    scene.add(rimLight);

    // Airplane Group
    airplaneGroup = create3DAirplane();
    scene.add(airplaneGroup);

    // Clouds
    cloudGroup = createCloudCluster();
    scene.add(cloudGroup);

    // Contrails
    initContrails();

    // Resize Handler
    window.addEventListener('resize', onWindowResize);

    // Start Animation Loop
    animateLoop();
  }

  function onWindowResize() {
    if (!containerEl || !renderer || !camera) return;
    const width = containerEl.clientWidth;
    const height = containerEl.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  // --- FLIGHT PATH TRAJECTORY DEFINITIONS ---
  // Waypoint flight states (X, Y, Z coordinates + Pitch, Yaw, Roll / Banking)
  const flightPathStates = [
    // 0. Dubai (Cruising level, slight right angle)
    { x: -3.5, y: 1.0, z: 0, rotX: 0.06, rotY: 0.35, rotZ: -0.18, camX: 0, camY: 3.5, camZ: 36 },
    // 1. Turkey (Climbing bank to North-West, graceful tilt)
    { x: 3.2, y: 3.8, z: -4, rotX: 0.12, rotY: -0.42, rotZ: 0.32, camX: 1.5, camY: 4.8, camZ: 38 },
    // 2. Bali (Descending swoop into tropical South-East)
    { x: -2.8, y: -1.2, z: 2, rotX: -0.08, rotY: 0.52, rotZ: -0.28, camX: -1.0, camY: 3.0, camZ: 35 },
    // 3. Singapore (High-speed level turn over city twilight)
    { x: 4.0, y: 1.8, z: -2, rotX: 0.05, rotY: -0.38, rotZ: 0.24, camX: 1.8, camY: 3.8, camZ: 37 },
    // 4. Georgia (Mountain ridge approach, nose pitch-up)
    { x: 0.0, y: 3.0, z: -6, rotX: 0.16, rotY: 0.05, rotZ: -0.05, camX: 0, camY: 4.5, camZ: 40 },
  ];

  // Target values for smooth lerp
  let targetFlightState = { ...flightPathStates[0] };
  let currentFlightState = { ...flightPathStates[0] };
  let flightClock = 0;

  function animateLoop() {
    animationFrameId = requestAnimationFrame(animateLoop);
    flightClock += 0.015;

    // Smooth Lerp flight state
    const lerpSpeed = 0.045;
    currentFlightState.x += (targetFlightState.x - currentFlightState.x) * lerpSpeed;
    currentFlightState.y += (targetFlightState.y - currentFlightState.y) * lerpSpeed;
    currentFlightState.z += (targetFlightState.z - currentFlightState.z) * lerpSpeed;
    currentFlightState.rotX += (targetFlightState.rotX - currentFlightState.rotX) * lerpSpeed;
    currentFlightState.rotY += (targetFlightState.rotY - currentFlightState.rotY) * lerpSpeed;
    currentFlightState.rotZ += (targetFlightState.rotZ - currentFlightState.rotZ) * lerpSpeed;

    if (airplaneGroup) {
      // Gentle atmospheric turbulence floating
      const turbulenceY = Math.sin(flightClock * 1.8) * 0.28;
      const turbulenceRoll = Math.cos(flightClock * 1.2) * 0.025;
      const turbulencePitch = Math.sin(flightClock * 1.5) * 0.02;

      airplaneGroup.position.set(
        currentFlightState.x,
        currentFlightState.y + turbulenceY,
        currentFlightState.z
      );

      airplaneGroup.rotation.x = currentFlightState.rotX + turbulencePitch;
      airplaneGroup.rotation.y = currentFlightState.rotY;
      airplaneGroup.rotation.z = currentFlightState.rotZ + turbulenceRoll;
    }

    // Drift clouds backwards past the airplane to enhance speed sensation
    if (cloudGroup) {
      cloudGroup.position.z += 0.12;
      if (cloudGroup.position.z > 80) {
        cloudGroup.position.z = -80;
      }
    }

    // Update engine contrails
    updateContrails();

    // Render Scene
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

  // --- UPDATE ACTIVE WAYPOINT & SPOTLIGHT CARD ---
  function updateFlightWaypoint(index) {
    if (index < 0 || index >= flightWaypoints.length) return;
    currentWaypointIndex = index;
    const wp = flightWaypoints[index];

    // Set 3D target coordinates
    targetFlightState = { ...flightPathStates[index] };

    // Play cabin sound
    playJetSound();

    // 1. Update Telemetry HUD
    const callsignEl = document.getElementById('flt-callsign');
    const altEl = document.getElementById('flt-alt');
    const spdEl = document.getElementById('flt-spd');
    const hdgEl = document.getElementById('flt-hdg');
    const codeEl = document.getElementById('flt-code');
    const stepBadgeEl = document.getElementById('flt-step-badge');

    if (callsignEl) callsignEl.textContent = `LE-${wp.code}380`;
    if (altEl) altEl.textContent = wp.altitude;
    if (spdEl) spdEl.textContent = wp.speed;
    if (hdgEl) hdgEl.textContent = wp.heading;
    if (codeEl) codeEl.textContent = wp.code;
    if (stepBadgeEl) stepBadgeEl.textContent = `LEG 0${index + 1} OF 0${flightWaypoints.length}`;

    // 2. Update Spotlight Destination Card
    const cityEl = document.getElementById('flt-card-city');
    const subEl = document.getElementById('flt-card-subtitle');
    const priceEl = document.getElementById('flt-card-price');
    const durEl = document.getElementById('flt-card-duration');
    const highlightsEl = document.getElementById('flt-card-highlights');
    const ctaLinkEl = document.getElementById('flt-card-cta-link');
    const waLinkEl = document.getElementById('flt-card-wa-link');

    if (cityEl) cityEl.textContent = `${wp.city}, ${wp.country}`;
    if (subEl) subEl.textContent = wp.subtitle;
    if (priceEl) priceEl.textContent = wp.price;
    if (durEl) durEl.textContent = wp.duration;

    if (highlightsEl) {
      highlightsEl.innerHTML = wp.highlights.map(h => `
        <li class="flex items-start gap-2 text-xs md:text-sm text-white/90">
          <span class="material-symbols-outlined text-sunset text-base shrink-0 mt-0.5" style="font-variation-settings:'FILL'1">check_circle</span>
          <span>${h}</span>
        </li>
      `).join('');
    }

    if (ctaLinkEl) {
      ctaLinkEl.href = wp.href;
      ctaLinkEl.textContent = `Explore ${wp.city.split('&')[0].trim()} Package →`;
    }

    if (waLinkEl) {
      waLinkEl.href = `https://wa.me/918007586871?text=${encodeURIComponent(wp.waText)}`;
    }

    // 3. Update Progress Bar & Radar Pin
    const progressEl = document.getElementById('flt-progress-bar');
    if (progressEl) {
      const pct = ((index + 1) / flightWaypoints.length) * 100;
      progressEl.style.width = `${pct}%`;
    }

    // 4. Update Header Waypoint Tabs
    document.querySelectorAll('.flt-nav-tab').forEach((tab, i) => {
      if (i === index) {
        tab.className = "flt-nav-tab active px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-navy-deep bg-sunset shadow-lg shadow-sunset/30 transition-all scale-105";
      } else {
        tab.className = "flt-nav-tab px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider text-white/60 hover:text-white transition-all";
      }
    });

    // 5. Update SVG Route Beacon Position
    const beacon = document.getElementById('flt-svg-beacon');
    const svgPositions = [
      { cx: 210, cy: 320 }, // Dubai
      { cx: 330, cy: 230 }, // Turkey
      { cx: 620, cy: 440 }, // Bali
      { cx: 560, cy: 370 }, // Singapore
      { cx: 380, cy: 200 }  // Georgia
    ];
    if (beacon && svgPositions[index] && window.gsap) {
      gsap.to(beacon, {
        attr: { cx: svgPositions[index].cx, cy: svgPositions[index].cy },
        duration: 0.8,
        ease: "power2.out"
      });
    }

    // 6. Smooth Background Gradient Mood Shift
    const stageBg = document.getElementById('flight-3d-stage');
    if (stageBg) {
      stageBg.style.background = `radial-gradient(ellipse at 70% 30%, ${wp.bgTheme.glow} 0%, transparent 65%), linear-gradient(180deg, #061224 0%, #0B1F3A 100%)`;
    }
  }

  // Jump to specific waypoint
  window.jumpToFlightWaypoint = function (index) {
    if (index < 0 || index >= flightWaypoints.length) return;
    const triggers = document.querySelectorAll('.flight-scroll-trigger');
    if (triggers[index]) {
      triggers[index].scrollIntoView({ behavior: 'smooth' });
    }
    updateFlightWaypoint(index);
  };

  window.stepFlightWaypoint = function (delta) {
    let next = currentWaypointIndex + delta;
    if (next < 0) next = 0;
    if (next >= flightWaypoints.length) next = flightWaypoints.length - 1;
    window.jumpToFlightWaypoint(next);
  };

  // Toggle Autoplay Cruise
  window.toggleFlightAutoplay = function () {
    isAutoplaying = !isAutoplaying;
    const btn = document.getElementById('flt-autoplay-btn');
    const label = document.getElementById('flt-autoplay-label');
    const icon = document.getElementById('flt-autoplay-icon');

    if (isAutoplaying) {
      if (label) label.textContent = "Pause Cruise";
      if (icon) icon.textContent = "pause";
      if (btn) btn.classList.add('ring-2', 'ring-sunset');

      autoplayTimer = setInterval(() => {
        const next = (currentWaypointIndex + 1) % flightWaypoints.length;
        window.jumpToFlightWaypoint(next);
      }, 4800);
    } else {
      if (label) label.textContent = "Cruise Control";
      if (icon) icon.textContent = "flight_takeoff";
      if (btn) btn.classList.remove('ring-2', 'ring-sunset');
      clearInterval(autoplayTimer);
    }
  };

  // Toggle Sound
  window.toggleFlightAudio = function () {
    isAudioMuted = !isAudioMuted;
    const icon = document.getElementById('flt-sound-icon');
    const text = document.getElementById('flt-sound-text');
    if (isAudioMuted) {
      if (icon) icon.textContent = "volume_off";
      if (text) text.textContent = "Mute";
    } else {
      if (icon) icon.textContent = "volume_up";
      if (text) text.textContent = "Sound: On";
      playJetSound();
    }
  };

  // --- BIND SCROLLTRIGGER TO FLIGHT CORRIDOR ---
  function initFlightScrollTrigger() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    const triggers = document.querySelectorAll('.flight-scroll-trigger');
    triggers.forEach((triggerEl, idx) => {
      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top center",
        end: "bottom center",
        onEnter: () => updateFlightWaypoint(idx),
        onEnterBack: () => updateFlightWaypoint(idx),
      });
    });
  }

  // --- BOOTSTRAP INITIALIZATION ON PAGE LOAD ---
  window.addEventListener('DOMContentLoaded', () => {
    // Only init if Three.js is present and flight container exists
    if (typeof THREE !== 'undefined' && document.getElementById('flight-3d-stage')) {
      initThreeScene();
      initFlightScrollTrigger();
      updateFlightWaypoint(0);
    }
  });

})();
