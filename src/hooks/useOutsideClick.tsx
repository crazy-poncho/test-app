import { useEffect } from 'react';

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    if (!ref.current) return;

    const controller = new AbortController();

    document.addEventListener('mousedown', event => (ref.current && !ref.current.contains(event.target) ? callback() : null), {
      signal: controller.signal,
    });

    return () => controller.abort();
  }, [ref, callback]);
};
