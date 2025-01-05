'use client';
import React, { useRef, useEffect } from 'react';

function StarField() {
  const canvasRef = useRef(null);

  const numStars = 300;
  const initialBatch = 1;
  const initialPause = 0;
  const spawnRate = 100;

  const stars = useRef([]);
  const lastSpawnTime = useRef(0);
  const firstBatchSpawned = useRef(false);
  const initialBatchTime = useRef(0);

  function createStar(canvasWidth, canvasHeight) {
    const lifetime = 3000 + Math.random() * 2000;

    const greyVal = Math.floor(Math.random() * 75 + 180);
    const baseAlpha = (Math.random() * 0.4 + 0.2).toFixed(2);

    const radius = canvasHeight / 2;
    const angle = Math.random() * Math.PI; // Solo la mitad superior del círculo
    const startX = canvasWidth / 2 + radius * Math.cos(angle);
    const startY = canvasHeight / 2 + radius * Math.sin(angle);

    const endX = canvasWidth / 2;
    const endY = canvasHeight / 2;

    return {
      startX,
      startY,
      endX,
      endY,
      radius: Math.random() * 1.2 + 0.4,
      r: greyVal,
      g: greyVal,
      b: greyVal,
      baseAlpha: parseFloat(baseAlpha),
      createdAt: Date.now(),
      lifetime,
      x: startX,
      y: startY,
    };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas element is missing');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('2D context is not available');
      return;
    }

    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function spawnInitialBatch() {
      for (let i = 0; i < initialBatch; i++) {
        stars.current.push(createStar(canvas.width, canvas.height));
      }
      firstBatchSpawned.current = true;
      initialBatchTime.current = performance.now();
      lastSpawnTime.current = performance.now();
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
    
      stars.current.forEach((star) => {
        const age = now - star.createdAt;
        const progress = age / star.lifetime;
    
        // Duración del fade-in (500 ms)
        const fadeInDuration = 1000;
        let currentAlpha = 0;
    
        if (age < fadeInDuration) {
          // Durante el fade-in, opacidad crece gradualmente
          currentAlpha = star.baseAlpha * (age / fadeInDuration);
        } else {
          // Después del fade-in, sigue la lógica normal de opacidad decreciente
          const fadeFactor = 1 - progress;
          currentAlpha = star.baseAlpha * fadeFactor;
        }
    
        // Asegurarse de que la opacidad no sea negativa
        currentAlpha = Math.max(0, currentAlpha);
    
        const curvedProgress = progress ** 2;
        const newX = star.startX + (star.endX - star.startX) * curvedProgress;
        const newY = star.startY + (star.endY - star.startY) * curvedProgress;
    
        star.x = newX;
        star.y = newY;
    
        ctx.fillStyle = `rgba(${star.r}, ${star.g}, ${star.b}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      });
    }

    function updateStars() {
      const now = Date.now();

      stars.current = stars.current.filter((star) => {
        const age = now - star.createdAt;
        return age < star.lifetime;
      });

      if (stars.current.length < numStars) {
        const nowPerf = performance.now();

        if (
          firstBatchSpawned.current &&
          nowPerf - initialBatchTime.current > initialPause
        ) {
          const deltaTime = nowPerf - lastSpawnTime.current;
          const starsToSpawn = Math.floor(spawnRate * (deltaTime / 1000));

          for (let i = 0; i < starsToSpawn; i++) {
            if (stars.current.length < numStars) {
              stars.current.push(createStar(canvas.width, canvas.height));
            }
          }

          if (starsToSpawn > 0) {
            lastSpawnTime.current = nowPerf;
          }
        }
      }
    }

    function animate() {
      try {
        updateStars();
        drawStars();
        animationFrameId = requestAnimationFrame(animate);
      } catch (error) {
        console.error('Animation error:', error);
      }
    }

    stars.current = [];
    spawnInitialBatch();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        zIndex: 9999,
        height: '600px',
        width: '100%',
      }}
    />
  );
}

export default StarField;
