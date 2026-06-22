import type { CSSProperties } from 'react'

/**
 * Slot 4 editable design system — "Signal" theme.
 * Modern, rounded, soft-shadow media-distribution UI with an indigo-violet
 * primary and a warm coral secondary on a light, airy surface.
 * Tokens flow through every editable page, so the whole site re-skins from here.
 */
export const editableRootStyle = {
  // contained, non-stretched layout width + hairline border (were undefined → full-bleed pages)
  '--editable-container': '1200px',
  '--editable-border': 'rgba(24,20,51,0.12)',
  '--editable-page-bg': '#f4f4fb',
  '--editable-page-text': '#181433',

  '--slot4-page-bg': '#f4f4fb',
  '--slot4-page-text': '#181433',
  '--slot4-panel-bg': '#ecebf8',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#54506e',
  '--slot4-soft-muted-text': '#7b7796',
  '--slot4-accent': '#5b34e8',
  '--slot4-accent-fill': '#5b34e8',
  '--slot4-accent-strong': '#4422c4',
  '--slot4-accent-soft': '#e8e2fc',
  '--slot4-accent-2': '#ff6a3d',
  '--slot4-accent-2-soft': '#ffe3d8',
  '--slot4-dark-bg': '#1a1340',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#e8e6f6',
  '--slot4-cream': '#f4f4fb',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#5b34e8',
  '--slot4-gray': '#ecebf8',
  '--slot4-ring': 'rgba(91,52,232,0.16)',
  '--slot4-hero-gradient': 'linear-gradient(135deg, #5b34e8 0%, #7c4ff0 48%, #ff6a3d 120%)',
  '--slot4-body-gradient': 'linear-gradient(180deg, #f4f4fb 0%, #ffffff 60%, #efeefb 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  accent2Text: 'text-[var(--slot4-accent-2)]',
  accent2Bg: 'bg-[var(--slot4-accent-2)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[var(--editable-border)]',
  darkBorder: 'border-white/15',
  shadow: 'shadow-[0_14px_40px_rgba(26,19,64,0.08)]',
  shadowStrong: 'shadow-[0_30px_80px_rgba(26,19,64,0.16)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(16,12,40,0.04),rgba(16,12,40,0.82))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-14 sm:py-20 lg:py-24',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[280px] shrink-0 snap-start sm:w-[320px]',
  },
  type: {
    eyebrow: 'text-[11px] font-extrabold uppercase tracking-[0.24em]',
    heroTitle: 'text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl',
    sectionTitle: 'text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-4xl',
    body: 'text-base leading-8',
  },
  surface: {
    card: `rounded-3xl border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-3xl border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-3xl ${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-white shadow-[0_12px_30px_rgba(91,52,232,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--slot4-accent-strong)]`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-full border border-[var(--editable-border)] bg-white px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-[var(--slot4-page-text)] transition hover:-translate-y-0.5 hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]`,
    accent: `inline-flex items-center justify-center gap-2 rounded-full bg-[var(--slot4-accent-2)] px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-white shadow-[0_12px_30px_rgba(255,106,61,0.28)] transition hover:-translate-y-0.5 hover:brightness-95`,
  },
  media: {
    frame: `relative overflow-hidden rounded-2xl ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(26,19,64,0.16)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'All visible layout decisions belong inside src/editable; keep data, SEO, API, and route logic untouched.',
  'Use the modern Signal theme: airy light surfaces, rounded cards, soft shadows, indigo-violet primary and coral secondary accents.',
  'Keep dynamic post fetching intact and never replace backend posts with mock arrays.',
  'Use postHref() for all post links so route aliases and task-specific detail pages remain functional.',
  'Constrain content to --editable-container so pages never look stretched; lead with clear hierarchy and generous spacing.',
  'Branding must remain dynamic from SITE_CONFIG; never hardcode a reference brand name or logo.',
] as const
