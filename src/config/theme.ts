/**
 * Accent colour for the CV.
 *
 * Only the accent itself is stored; the tinted surface and border tones are
 * derived from it in CSS with color-mix() (see src/styles/global.css).
 */
export const defaultPrimary = '#2563eb';

export const themeStorageKey = 'cv_color';

/**
 * Ready-made accents offered in the picker. Every value already clears the
 * contrast bar below, which is why green, red and orange use Tailwind's 700
 * step rather than 600.
 */
export const presets = [
  { primary: '#2563eb', label: { es: 'Azul',    en: 'Blue'   } },
  { primary: '#047857', label: { es: 'Verde',   en: 'Green'  } },
  { primary: '#7c3aed', label: { es: 'Violeta', en: 'Violet' } },
  { primary: '#be123c', label: { es: 'Rojo',    en: 'Red'    } },
  { primary: '#b45309', label: { es: 'Naranja', en: 'Orange' } },
  { primary: '#334155', label: { es: 'Grafito', en: 'Slate'  } },
] as const;

/** WCAG AA for normal text. The accent is used as text on white. */
const MIN_CONTRAST = 4.5;

type Rgb = [number, number, number];

function hexToRgb(hex: string): Rgb | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHex([r, g, b]: Rgb): string {
  const h = (v: number) => Math.round(v).toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

/** Contrast ratio against white, per WCAG relative luminance. */
function contrastOnWhite([r, g, b]: Rgb): number {
  const channel = (v: number) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const luminance = 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  return 1.05 / (luminance + 0.05);
}

/** Scales a colour towards black, keeping its hue and saturation ratios. */
function darken(rgb: Rgb, factor: number): Rgb {
  return [rgb[0] * factor, rgb[1] * factor, rgb[2] * factor];
}

/**
 * Returns the picked colour, darkened just enough to stay readable as text on
 * white. A colour that already passes is returned untouched, so most picks come
 * back exactly as chosen; only very light ones (yellows, pastels) get adjusted,
 * which keeps both the screen and the printed PDF legible.
 */
export function toReadableAccent(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return defaultPrimary;

  let factor = 1;
  while (factor > 0.02 && contrastOnWhite(darken(rgb, factor)) < MIN_CONTRAST) {
    factor -= 0.02;
  }
  return rgbToHex(darken(rgb, factor));
}
