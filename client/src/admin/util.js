// Shared helpers for the admin panel.
export const PAGE_NAMES = {
  global: 'Site-wide (logo)',
  index: 'Home',
  'steps-1-4': 'Steps 1-4 · Cane to juice',
  'steps-5-6': 'Steps 5-6 · Clarify and boil',
  'steps-7-11': 'Steps 7-11 · Cool to market',
  machines: 'Machine guide',
  'plan-your-unit': 'Plan your unit',
  'more-case-studies': 'More case studies',
};

export const ytThumb = id => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
export function itemThumb(it) {
  if (!it) return null;
  if (it.type === 'youtube') return ytThumb(it.youtubeId);
  if (it.type === 'video') return it.poster;
  return it.src;
}
