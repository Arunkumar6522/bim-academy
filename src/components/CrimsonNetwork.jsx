import React, { useEffect, useRef } from 'react';

const CrimsonNetwork = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const parallaxRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  const COLOR = '#7e1416';

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const { clientWidth: w, clientHeight: h } = canvas.parentElement;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const area = w * h;
    const baseCount = Math.max(24, Math.min(70, Math.floor(area / 18000)));
    const maxSpeed = 0.25;

    particlesRef.current = new Array(baseCount).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() * 2 - 1) * maxSpeed,
      vy: (Math.random() * 2 - 1) * maxSpeed,
      r: 3.0,
    }));

    const linkDist = Math.min(180, Math.max(110, Math.sqrt(area) / 8));
    const maxParallax = Math.min(30, Math.max(14, Math.sqrt(area) / 80));

    const draw = () => {
      // ease parallax
      const p = parallaxRef.current;
      p.x += (p.tx - p.x) * 0.06;
      p.y += (p.ty - p.y) * 0.06;

      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.translate(p.x, p.y);

      // move
      for (const ptl of particlesRef.current) {
        ptl.x += ptl.vx;
        ptl.y += ptl.vy;
        if (ptl.x < 0 || ptl.x > w) ptl.vx *= -1;
        if (ptl.y < 0 || ptl.y > h) ptl.vy *= -1;
      }

      // links
      for (let i = 0; i < particlesRef.current.length; i++) {
        const a = particlesRef.current[i];
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            ctx.strokeStyle = COLOR;
            ctx.globalAlpha = 0.55;
            ctx.lineWidth = 1.4;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes on top
      for (const ptl of particlesRef.current) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = COLOR;
        ctx.beginPath();
        ctx.arc(ptl.x, ptl.y, ptl.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(draw);

    // update target parallax with current mouse
    const updateParallaxFromMouse = () => {
      const mx = mouseRef.current?.x || 0;
      const my = mouseRef.current?.y || 0;
      const nx = (mx / w) - 0.5;
      const ny = (my / h) - 0.5;
      parallaxRef.current.tx = -nx * maxParallax;
      parallaxRef.current.ty = -ny * maxParallax;
    };
    setInterval(updateParallaxFromMouse, 50);
  };

  useEffect(() => {
    init();
    const onResize = () => init();
    const onMove = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (!mouseRef.current) mouseRef.current = {};
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);
    // optional: device tilt parallax
    const onOrient = (e) => {
      const { beta = 0, gamma = 0 } = e;
      parallaxRef.current.tx = Math.max(-20, Math.min(20, gamma / 3));
      parallaxRef.current.ty = Math.max(-20, Math.min(20, beta / 6));
    };
    window.addEventListener('deviceorientation', onOrient, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('deviceorientation', onOrient);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: 'none', opacity: 0.5 }}
    />
  );
};

export default CrimsonNetwork;
