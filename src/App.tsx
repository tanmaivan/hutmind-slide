import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { slideTransition } from './lib/animations';
import { slides } from './slides';
import DrawingOverlay from './components/DrawingOverlay';

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Don't navigate if drawing shortcuts are pressed
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  // Handle slide clicks (when not drawing)
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // Prevent navigation if clicking interactive elements or the drawing toolbar
    if (
      target.closest('[data-interactive]') ||
      target.closest('button') ||
      target.closest('.drawing-controls') ||
      target.tagName === 'CANVAS'
    ) return;

    if (e.clientX > window.innerWidth / 2) goNext();
    else goPrev();
  };

  const SlideComponent = slides[current];
  const progress = ((current + 1) / total) * 100;

  return (
    <div
      style={{ width: '100vw', height: '100vh', overflow: 'hidden', cursor: 'pointer', userSelect: 'none', position: 'relative' }}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={slideTransition.enter}
          animate={slideTransition.center}
          exit={slideTransition.exit}
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Drawing Overlay */}
      <DrawingOverlay />

      {/* Progress bar */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, width: '100%', height: 4,
        backgroundColor: 'rgba(0,0,0,0.05)', zIndex: 100,
      }}>
        <motion.div
          style={{ height: '100%', backgroundColor: 'var(--accent)', originX: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>

      {/* Slide counter */}
      <div style={{
        position: 'fixed', bottom: 16, right: 24, zIndex: 100,
        fontSize: 12, fontFamily: 'var(--font-mono)', fontWeight: 500,
        color: 'var(--text-muted)', letterSpacing: '0.08em',
        background: 'rgba(255,255,255,0.8)', padding: '4px 10px', borderRadius: 20,
        backdropFilter: 'blur(4px)', border: '1px solid var(--border)',
      }}>
        {current + 1} / {total}
      </div>
    </div>
  );
}
