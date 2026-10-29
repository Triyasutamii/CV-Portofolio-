/**
 * Water Splash Cursor & Rising Ocean Bubbles System
 * Frutiger Aero / Aqua Ocean Theme
 */

(function() {
  'use strict';

  /* ============================================================
     1. Rising Water Bubbles Background & Intro Burst
     ============================================================ */
  function initOceanBubbles() {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.id = 'oceanBubbleContainer';
    bubbleContainer.className = 'ocean-bubble-container';
    document.body.prepend(bubbleContainer);

    // Initial burst of bubbles on page load
    const initialBubbleCount = 28;
    for (let i = 0; i < initialBubbleCount; i++) {
      createSingleBubble(bubbleContainer, true);
    }

    // Continuous rising ambient bubbles
    setInterval(() => {
      if (document.hidden) return;
      if (bubbleContainer.childElementCount < 35) {
        createSingleBubble(bubbleContainer, false);
      }
    }, 450);
  }

  function createSingleBubble(container, isInitial) {
    const bubble = document.createElement('div');
    bubble.className = 'water-bubble';

    const size = Math.random() * 26 + 12; // 12px to 38px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const posX = Math.random() * 100; // 0% to 100%
    bubble.style.left = `${posX}vw`;

    const duration = Math.random() * 7 + 6; // 6s to 13s
    bubble.style.animationDuration = `${duration}s`;

    if (isInitial) {
      // distribute across the vertical screen initially
      const startY = Math.random() * 100;
      bubble.style.bottom = `${startY}vh`;
      bubble.style.opacity = (Math.random() * 0.4 + 0.35).toString();
    } else {
      bubble.style.bottom = '-40px';
    }

    // Slight horizontal sway delay
    bubble.style.animationDelay = `${Math.random() * 2}s`;

    // Interactive: Click to pop bubble with a mini water splash!
    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      popBubble(bubble, e.clientX, e.clientY);
    });

    container.appendChild(bubble);

    // Remove when animation finishes
    setTimeout(() => {
      if (bubble.parentNode) {
        bubble.remove();
      }
    }, duration * 1000 + 2000);
  }

  function popBubble(bubble, x, y) {
    createWaterSplash(x, y, 14);
    bubble.classList.add('bubble-pop');
    setTimeout(() => bubble.remove(), 200);
  }

  /* ============================================================
     2. Water Splash & Ripple Cursor Engine (Canvas-based)
     ============================================================ */
  let canvas, ctx;
  let ripples = [];
  let splashParticles = [];
  let width, height;
  let lastMoveTime = 0;

  function initWaterCursor() {
    canvas = document.createElement('canvas');
    canvas.id = 'waterCursorCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse movement creates gentle water ripples / droplets
    window.addEventListener('mousemove', (e) => {
      const now = performance.now();
      if (now - lastMoveTime > 35) { // throttle for smoothness
        createWaterRipple(e.clientX, e.clientY, 0.45);
        if (Math.random() > 0.4) {
          createTinyDroplet(e.clientX, e.clientY);
        }
        lastMoveTime = now;
      }
    });

    // Clicks trigger dynamic water splash burst
    window.addEventListener('click', (e) => {
      createWaterSplash(e.clientX, e.clientY, 20);
      createWaterRipple(e.clientX, e.clientY, 1.2);
    });

    // Touch support for mobile/tablets
    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        const t = e.touches[0];
        createWaterRipple(t.clientX, t.clientY, 0.5);
      }
    }, { passive: true });

    window.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        const t = e.touches[0];
        createWaterSplash(t.clientX, t.clientY, 16);
      }
    }, { passive: true });

    requestAnimationFrame(renderWaterEffects);
  }

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createWaterRipple(x, y, intensity = 1) {
    ripples.push({
      x: x,
      y: y,
      radius: 4,
      maxRadius: 28 * intensity,
      alpha: 0.7 * intensity,
      lineWidth: 2.5 * intensity
    });
  }

  function createTinyDroplet(x, y) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 0.5;
    splashParticles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed + 0.5, // slight gravity
      size: Math.random() * 2.5 + 1.5,
      alpha: 0.65,
      decay: 0.03
    });
  }

  function createWaterSplash(x, y, particleCount = 18) {
    // Concentric shockwave water rings
    ripples.push({
      x: x,
      y: y,
      radius: 6,
      maxRadius: 45,
      alpha: 0.85,
      lineWidth: 3
    });
    ripples.push({
      x: x,
      y: y,
      radius: 2,
      maxRadius: 65,
      alpha: 0.5,
      lineWidth: 2
    });

    // Water droplet spray particles
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      splashParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5, // initial upward lift
        size: Math.random() * 4 + 2,
        alpha: 0.9,
        decay: Math.random() * 0.02 + 0.02
      });
    }
  }

  function renderWaterEffects() {
    ctx.clearRect(0, 0, width, height);

    // 1. Render Ripples
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += 1.3;
      r.alpha -= 0.022;

      if (r.alpha <= 0 || r.radius >= r.maxRadius) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(180, 245, 255, ${r.alpha})`;
      ctx.lineWidth = r.lineWidth;
      ctx.shadowColor = 'rgba(0, 210, 255, 0.8)';
      ctx.shadowBlur = 6;
      ctx.stroke();
      ctx.restore();
    }

    // 2. Render Splash Droplets
    for (let i = splashParticles.length - 1; i >= 0; i--) {
      const p = splashParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.14; // gravity
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        splashParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      
      // Water droplet with light reflection
      const grad = ctx.createRadialGradient(
        p.x - p.size * 0.3, p.y - p.size * 0.3, p.size * 0.1,
        p.x, p.y, p.size
      );
      grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
      grad.addColorStop(0.5, `rgba(140, 235, 255, ${p.alpha * 0.9})`);
      grad.addColorStop(1, `rgba(0, 180, 230, ${p.alpha * 0.6})`);

      ctx.fillStyle = grad;
      ctx.shadowColor = 'rgba(0, 215, 255, 0.7)';
      ctx.shadowBlur = 5;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(renderWaterEffects);
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initOceanBubbles();
      initWaterCursor();
    });
  } else {
    initOceanBubbles();
    initWaterCursor();
  }

  // Export splash trigger for button clicks
  window.triggerWaterSplash = function(x, y) {
    createWaterSplash(x, y, 22);
  };

})();
