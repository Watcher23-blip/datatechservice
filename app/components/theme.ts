export type Tone = 'dark' | 'light' | 'orange';

type ToneStyle = {
  tile: string; // gradient of the 3D icon tile
  icon: string; // icon colour
  edge: string; // solid slab under the tile
  glow: string; // far soft shadow
  hi: string; // top inner highlight
  filter: string; // icon drop shadow / glow
};

export const tones: Record<Tone, ToneStyle> = {
  dark: {
    tile: 'linear-gradient(145deg,#4B4E53 0%,#26282B 55%,#121315 100%)',
    icon: '#F4A04A',
    edge: '#050506',
    glow: 'rgba(0,0,0,.55)',
    hi: 'rgba(255,255,255,.28)',
    filter: 'drop-shadow(0 0 6px rgba(244,160,74,.55))',
  },
  light: {
    tile: 'linear-gradient(145deg,#FFFFFF,#E3E3E0)',
    icon: '#16171A',
    edge: '#C9C9C5',
    glow: 'rgba(22,23,26,.28)',
    hi: '#FFFFFF',
    filter: 'drop-shadow(0 1px 0 rgba(255,255,255,.8))',
  },
  orange: {
    tile: 'linear-gradient(145deg,#FFCB8C,#F4A04A 55%,#DE8227)',
    icon: '#16171A',
    edge: '#A85C16',
    glow: 'rgba(244,160,74,.55)',
    hi: 'rgba(255,255,255,.55)',
    filter: 'drop-shadow(0 1px 0 rgba(255,255,255,.45))',
  },
};

/** Light card: white highlight, thin solid slab, long soft shadow. */
export const cardLight =
  'inset 0 1px 0 #fff, 0 5px 0 #DCDCD8, 0 30px 50px -24px rgba(22,23,26,.32)';

/** Dark glass card. */
export const cardDark =
  'inset 0 1px 0 rgba(255,255,255,.1), 0 6px 0 #0C0D0E, 0 40px 70px -28px rgba(0,0,0,.8)';