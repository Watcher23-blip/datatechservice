
'use client';

import {
  MotionConfig,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
} from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { CSSProperties, MouseEvent, ReactNode } from 'react';
import { tones, type Tone } from './theme';

/**
 * Respect the user's reduced-motion preference throughout the application.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}

/**
 * Glossy 3D icon tile with a solid base and soft shadow.
 */
export function Icon3D({
  icon: Icon,
  tone = 'dark',
  size = 64,
  className = '',
}: {
  icon: LucideIcon;
  tone?: Tone;
  size?: number;
  className?: string;
}) {
  const t = tones[tone];
  const slabY = Math.max(3, Math.round(size * 0.08));
  const far = Math.round(size * 0.3);

  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.045 }}
      whileTap={{ y: 1, scale: 0.97 }}
      transition={{
        type: 'spring',
        stiffness: 380,
        damping: 22,
      }}
      className={`relative inline-flex shrink-0 select-none items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.3,
        background: t.tile,
        boxShadow: [
          `inset 0 1px 1px ${t.hi}`,
          'inset 0 -4px 8px rgba(0,0,0,.18)',
          `0 ${slabY}px 0 ${t.edge}`,
          `0 ${far}px ${Math.round(size * 0.45)}px -${Math.round(size * 0.16)}px ${t.glow}`,
        ].join(', '),
      }}
    >
      <Icon
        size={Math.round(size * 0.44)}
        strokeWidth={1.7}
        color={t.icon}
        style={{ filter: t.filter }}
        aria-hidden="true"
      />
    </motion.span>
  );
}

/**
 * Mouse-driven 3D tilt with spring physics.
 */
export function Tilt({
  children,
  className = '',
  max = 5,
  style,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  style?: MotionStyle;
}) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(py, [-0.5, 0.5], [max, -max]),
    { stiffness: 160, damping: 18 },
  );

  const rotateY = useSpring(
    useTransform(px, [-0.5, 0.5], [-max, max]),
    { stiffness: 160, damping: 18 },
  );

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    if (!rect.width || !rect.height) return;

    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const leave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      onMouseMove={move}
      onMouseLeave={leave}
      whileHover={{ y: -5 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 22,
      }}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Card with a soft light that follows the cursor.
 */
export function Spotlight({
  children,
  className = '',
  style,
  color = 'rgba(244,160,74,.22)',
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  color?: string;
}) {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);

  const background = useMotionTemplate`
    radial-gradient(
      340px circle at ${mx}px ${my}px,
      ${color},
      transparent 70%
    )
  `;

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mx.set(event.clientX - rect.left);
    my.set(event.clientY - rect.top);
  };

  return (
    <div
      onMouseMove={move}
      className={`group relative overflow-hidden ${className}`}
      style={style}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />

      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
}

/**
 * Scroll-triggered entrance animation. Plays once.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 36,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: '-80px',
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Small section label with an orange accent rule.
 */
export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] ${
        dark ? 'text-white/70' : 'text-[#777980]'
      }`}
    >
      <span className="h-px w-8 shrink-0 bg-[#F4A04A]" />
      {children}
    </span>
  );
}
