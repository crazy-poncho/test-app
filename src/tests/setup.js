import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';

import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    callback([{ isIntersecting: true }]);
  }

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};
