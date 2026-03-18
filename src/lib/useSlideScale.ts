import { useEffect, useState } from 'react';

export function useSlideScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const SLIDE_W = 1280;
    const SLIDE_H = 720;

    function update() {
      const scaleX = window.innerWidth / SLIDE_W;
      const scaleY = window.innerHeight / SLIDE_H;
      setScale(Math.min(scaleX, scaleY));
    }

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return scale;
}
