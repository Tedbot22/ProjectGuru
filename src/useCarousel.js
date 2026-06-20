import { useState, useRef, useEffect, useCallback } from 'react';

export function useCarousel(totalItems) {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const viewportRef = useRef(null);

  const maxIndex = Math.max(0, totalItems - visibleCount);

  const updateSizes = useCallback(() => {
    if (!viewportRef.current) return;
    const w = window.innerWidth;
    const visible = w <= 580 ? 1 : w <= 900 ? 2 : 3;
    setVisibleCount(visible);
    const gap = 24;
    const width = (viewportRef.current.offsetWidth - gap * (visible - 1)) / visible;
    setCardWidth(width);
  }, []);

  useEffect(() => {
    updateSizes();
    const observer = new ResizeObserver(updateSizes);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [updateSizes]);

  // clamp index when visibleCount changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);
  const goTo = useCallback((i) => setIndex(i), []);

  const offset = index * (cardWidth + 24);

  return { viewportRef, index, cardWidth, visibleCount, offset, prev, next, goTo, maxIndex };
}
