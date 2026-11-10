export const isValidEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const isNotEmpty = (value: string): boolean => value.trim().length > 0;