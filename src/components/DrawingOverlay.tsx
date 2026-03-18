import { useEffect, useRef, useState } from 'react';
import { useSlideScale } from '../lib/useSlideScale';

const COLORS = [
  { id: 'red', val: 'var(--accent)', hex: '#E31837' },
  { id: 'black', val: 'var(--text-primary)', hex: '#111827' },
  { id: 'green', val: 'var(--green)', hex: '#059669' },
  { id: 'orange', val: 'var(--yellow)', hex: '#d97706' },
  { id: 'blue', val: '#2563eb', hex: '#2563eb' },
];

export default function DrawingOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [mode, setMode] = useState<'draw' | 'erase' | 'none'>('none');
  const [color, setColor] = useState(COLORS[0]);
  const scale = useSlideScale();

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (mode === 'none') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / scale;
    const y = (e.clientY - rect.top) / scale;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || mode === 'none') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    // Use actual scaled coordinates rather than stretched percentages
    const x = (e.clientX - rect.left) / scale;
    const y = (e.clientY - rect.top) / scale;

    ctx.lineTo(x, y);

    if (mode === 'erase') {
      ctx.strokeStyle = 'white'; // Draw with white to erase since background is light
      ctx.lineWidth = 40;
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.strokeStyle = color.hex; // Use exact hex, var() often fails in canvas context
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalCompositeOperation = 'source-over';
    }

    ctx.stroke();
  };

  const stopDrawing = () => {
    if (mode === 'none') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      if (e.key === 'd') setMode(m => m === 'draw' ? 'none' : 'draw');
      if (e.key === 'e') setMode(m => m === 'erase' ? 'none' : 'erase');
      if (e.key === 'Escape') setMode('none');
      if (e.key === 'c' && e.ctrlKey) clearCanvas(); // Ctrl+C to clear
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Wrapper ensures canvas scales and centers perfectly like SlideLayout rather than stretching to window aspect ratio */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50,
      }}>
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            pointerEvents: mode === 'none' ? 'none' : 'auto',
            cursor: mode === 'draw' ? 'crosshair' : mode === 'erase' ? 'cell' : 'default',
            flexShrink: 0,
            background: 'transparent',
          }}
        />
      </div>

      <div className="drawing-controls" onClick={(e) => e.stopPropagation()}>
        <button
          className={`draw-btn ${mode === 'none' ? 'active' : ''}`}
          onClick={() => setMode('none')}
          title="Pointer (Esc)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>
        </button>

        <button
          className={`draw-btn ${mode === 'draw' ? 'active' : ''}`}
          onClick={() => setMode('draw')}
          title="Draw (D)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
        </button>

        <div style={{ display: 'flex', gap: 4, padding: '0 8px', alignItems: 'center', borderLeft: '1px solid var(--border)' }}>
          {COLORS.map((c) => (
            <button
              key={c.id}
              onClick={() => { setMode('draw'); setColor(c); }}
              style={{
                width: 24, height: 24, borderRadius: '50%', border: 'none',
                background: c.hex, cursor: 'pointer',
                boxShadow: color.id === c.id ? `0 0 0 2px white, 0 0 0 4px ${c.hex}` : '0 1px 3px rgba(0,0,0,0.1)',
                margin: '0 2px',
                transform: color.id === c.id ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.15s',
              }}
              title={c.id}
            />
          ))}
        </div>

        <div style={{ width: 1, background: 'var(--border)', margin: '4px 6px' }} />

        <button
          className={`draw-btn ${mode === 'erase' ? 'active' : ''}`}
          onClick={() => setMode('erase')}
          title="Eraser (E)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
        </button>

        <button
          className="draw-btn danger"
          onClick={clearCanvas}
          title="Clear Ink (Ctrl+C)"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
        </button>
      </div>
    </>
  );
}
