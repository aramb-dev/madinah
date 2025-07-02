const isServer = typeof window === 'undefined';

export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (isServer) {
      return null;
    }
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn(`Failed to read from localStorage: ${key}`, error);
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    if (isServer) {
      return;
    }
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn(`Failed to write to localStorage: ${key}`, error);
    }
  },
};