type ClassValue = string | false | null | undefined;

/** Tiny replacement for `clsx` — joins truthy class names. */
export const cx = (...parts: ClassValue[]): string => parts.filter(Boolean).join(' ');
