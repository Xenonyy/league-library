import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.warn('useLocalStorage error:', err);
      return initialValue;
    }
  });

  const setValue = value => {
    const valueToSet = typeof value === 'function' ? value(storedValue) : value;

    setStoredValue(valueToSet);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(valueToSet));
      } catch (err) {
        console.warn('Failed to save to localStorage:', err);
      }
    }
  };

  return [storedValue, setValue];
}
