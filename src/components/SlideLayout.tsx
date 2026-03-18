import React from 'react';
import { useSlideScale } from '../lib/useSlideScale';

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function SlideLayout({ children, className = '' }: SlideLayoutProps) {
  const scale = useSlideScale();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: 1280,
          height: 720,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  );
}
