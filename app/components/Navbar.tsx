 'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion';
import { ArrowUp, ArrowUpRight, Hexagon } from 'lucide-react';
import { Icon3D } from './Ui';

const navLinks = [
  { name: 'Home', href: '#home', number: '01' },
  { name: 'About', href: '#about', number: '02' },
  { name: 'Services', href: '#services', number: '03' },
  { name: 'Features', href: '#features', number: '04' },
  { name: 'FAQ', href: '#faq', number: '05' },
  { name: 'Contact', href: '#contact', number: '06' },
];

const DESKTOP_MENU_BREAKPOINT = 1280;

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setScrolled(latest > 12);

    if (open || latest < 80) {
      setHidden(false);
      return;
    }

    if (latest > previous + 2) {
      setHidden(true);
    } else if (latest < previous - 2) {
      setHidden(false);
    }
  });

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setHidden(false);
    setOpen((previous) => !previous);
  }, []);

  const scrollToTop = useCallback(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_MENU_BREAKPOINT) {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [open, closeMenu]);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-18% 0px -62% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navigateTo = useCallback(
    (href: string) => {
      closeMenu();

      const target = document.getElementById(href.slice(1));

      if (target) {
        window.history.replaceState(null, '', href);

        window.setTimeout(() => {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    },
    [closeMenu],
  );

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{
        y: hidden && !open ? -120 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-2 z-50 flex justify-center px-2 min-[380px]:px-3 sm:top-3 sm:px-5"
    >
      <div className="relative w-full max-w-7xl min-w-0">
        {/* Main navbar */}
        <nav
          aria-label="Main navigation"
          className={[
            'relative z-50 flex min-h-[54px] w-full min-w-0 items-center justify-between gap-1',
            'rounded-full border p-1 pl-2',
            'min-[380px]:gap-1.5 min-[380px]:pl-2.5',
            'sm:min-h-[66px] sm:gap-3 sm:p-2 sm:pl-3',
            'backdrop-blur-2xl transition-colors duration-300',
            scrolled || open
              ? 'border-white/90 bg-white/95'
              : 'border-white/80 bg-white/80',
          ].join(' ')}
          style={{
            boxShadow:
              'inset 0 1px 0 #fff, 0 4px 0 rgba(22,23,26,.045), 0 22px 50px -25px rgba(22,23,26,.3)',
          }}
        >
          {/* Brand */}
          <Link
            href="#home"
            onClick={(event) => {
              if (open) {
                event.preventDefault();
                navigateTo('#home');
              }
            }}
            aria-label="Data Tech Service — Home"
            className="flex min-w-0 shrink items-center gap-1.5 min-[380px]:gap-2 sm:gap-3"
          >
            <Icon3D
              icon={Hexagon}
              tone="dark"
              size={32}
              className="shrink-0 min-[380px]:!h-9 min-[380px]:!w-9 sm:!h-10 sm:!w-10"
            />

            <span className="min-w-0 whitespace-nowrap text-[9px] font-extrabold uppercase leading-none tracking-[0.015em] text-[#202124] min-[360px]:text-[10px] min-[400px]:text-[11px] sm:text-sm sm:tracking-[0.09em]">
              Data Tech{' '}
              <span className="text-[#D97720]">Service</span>
            </span>
          </Link>

          {/* Desktop navigation: only shown when enough room is available */}
          <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 2xl:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={[
                    'relative isolate whitespace-nowrap rounded-full',
                    'px-3 py-2.5 text-[11px] font-bold uppercase',
                    'tracking-[0.075em] transition-colors duration-200',
                    '2xl:px-3.5',
                    isActive
                      ? '!text-white'
                      : 'text-[#777980] hover:!text-[#F4A04A]',
                  ].join(' ')}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-[#202124]"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 34,
                      }}
                      style={{
                        boxShadow:
                          '0 3px 0 #111, inset 0 1px 0 rgba(255,255,255,.15)',
                      }}
                    />
                  )}

                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right-side controls */}
          <div className="flex shrink-0 items-center gap-1 min-[380px]:gap-1.5 sm:gap-2">
            {/* Scroll progress / back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#202124] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0.5 min-[380px]:h-9 min-[380px]:w-9 sm:h-11 sm:w-11"
              style={{
                boxShadow: 'inset 0 1px 0 #fff, 0 3px 0 #DCDCD7',
              }}
            >
              <svg
                className="pointer-events-none absolute inset-0 -rotate-90"
                viewBox="0 0 44 44"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="22"
                  cy="22"
                  r="19"
                  stroke="#E9E8E3"
                  strokeWidth="2.5"
                />

                <motion.circle
                  cx="22"
                  cy="22"
                  r="19"
                  fill="none"
                  stroke="#F4A04A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength={1}
                  style={{ pathLength: progress }}
                />
              </svg>

              <ArrowUp
                size={14}
                strokeWidth={2.3}
                className="relative transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-4 sm:w-4"
              />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              className={[
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                'border border-[#202124] bg-[#202124] text-white',
                'transition-colors duration-200',
                'hover:border-[#F4A04A] hover:bg-[#F4A04A] hover:text-[#202124]',
                'active:translate-y-0.5 min-[380px]:h-9 min-[380px]:w-9',
                'sm:h-11 sm:w-11 2xl:hidden',
              ].join(' ')}
              style={{
                boxShadow: open
                  ? 'inset 0 2px 4px rgba(0,0,0,.18)'
                  : '0 3px 0 #111, inset 0 1px 0 rgba(255,255,255,.12)',
              }}
            >
              <span className="relative flex h-4 w-4 items-center justify-center sm:h-5 sm:w-5">
                <motion.span
                  animate={{
                    rotate: open ? 45 : 0,
                    y: open ? 0 : -4,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute h-[2px] w-[16px] rounded-full bg-current sm:w-[18px]"
                />

                <motion.span
                  animate={{
                    opacity: open ? 0 : 1,
                    scaleX: open ? 0 : 1,
                  }}
                  transition={{ duration: 0.15 }}
                  className="absolute h-[2px] w-[16px] rounded-full bg-current sm:w-[18px]"
                />

                <motion.span
                  animate={{
                    rotate: open ? -45 : 0,
                    y: open ? 0 : 4,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute h-[2px] w-[16px] rounded-full bg-current sm:w-[18px]"
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Full-screen mobile navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-navigation"
              id="mobile-navigation"
              initial={{
                opacity: 0,
                clipPath: 'inset(0 0 100% 0 round 28px)',
              }}
              animate={{
                opacity: 1,
                clipPath: 'inset(0 0 0% 0 round 0px)',
              }}
              exit={{
                opacity: 0,
                clipPath: 'inset(0 0 100% 0 round 28px)',
              }}
              transition={{
                opacity: { duration: 0.25 },
                clipPath: {
                  duration: 0.48,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              className="fixed inset-0 z-40 flex h-dvh w-full flex-col overflow-x-hidden overflow-y-auto overscroll-contain bg-[#F8F7F3] text-[#202124] 2xl:hidden"
              style={{
                paddingTop: 'env(safe-area-inset-top)',
                paddingBottom: 'env(safe-area-inset-bottom)',
              }}
            >
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 opacity-40 [background-image:linear-gradient(rgba(32,33,36,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(32,33,36,0.045)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
              />

              <div className="relative mx-auto flex min-h-dvh w-full max-w-3xl shrink-0 flex-col px-4 pb-5 pt-20 min-[380px]:px-5 min-[380px]:pt-24 sm:px-10 sm:pb-7 sm:pt-28">
                {/* Menu header */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: 0.08 }}
                  className="mb-4 flex items-center justify-between gap-3 border-b border-black/10 pb-4 min-[380px]:mb-6 min-[380px]:pb-5 sm:mb-8"
                >
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D97720] min-[380px]:text-[10px] min-[380px]:tracking-[0.22em] sm:text-xs">
                      Explore our website
                    </p>

                    <h2 className="mt-1.5 font-display text-xl font-bold uppercase tracking-tight min-[380px]:mt-2 min-[380px]:text-2xl sm:text-3xl">
                      Navigation<span className="text-[#F4A04A]">.</span>
                    </h2>
                  </div>

                  <span className="shrink-0 text-[10px] font-semibold tabular-nums text-black/35 sm:text-xs">
                    01 — 06
                  </span>
                </motion.div>

                {/* Navigation links */}
                <div className="flex w-full flex-1 flex-col justify-center gap-1">
                  {navLinks.map((link, index) => {
                    const isActive = active === link.href;

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{
                          duration: 0.32,
                          delay: 0.08 + index * 0.055,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-full min-w-0"
                      >
                        <Link
                          href={link.href}
                          onClick={(event) => {
                            event.preventDefault();
                            navigateTo(link.href);
                          }}
                          aria-current={isActive ? 'location' : undefined}
                          className={[
                            'group flex min-h-[48px] w-full min-w-0 items-center gap-2.5 rounded-xl px-3 py-2.5',
                            'transition-colors duration-200 min-[380px]:min-h-[54px] min-[380px]:gap-3 min-[380px]:rounded-2xl min-[380px]:px-4',
                            'sm:min-h-[68px] sm:gap-4 sm:px-5',
                            isActive
                              ? 'bg-[#202124] text-white shadow-[0_4px_0_#111]'
                              : 'text-[#777980] hover:bg-white hover:text-[#202124] active:bg-[#F4A04A]/15',
                          ].join(' ')}
                        >
                          <span
                            className={[
                              'w-5 shrink-0 text-[9px] font-bold tabular-nums min-[380px]:w-7 min-[380px]:text-[10px] sm:text-xs',
                              isActive
                                ? 'text-[#F4A04A]'
                                : 'text-black/30 group-hover:text-[#D97720]',
                            ].join(' ')}
                          >
                            {link.number}
                          </span>

                          <span
                            className={[
                              'min-w-0 flex-1 truncate font-display text-[clamp(1.15rem,5vw,2.1rem)] font-bold uppercase leading-none tracking-tight transition-colors duration-200 sm:text-[2.1rem]',
                              isActive
                                ? 'text-white'
                                : 'text-[#777980] group-hover:text-[#202124]',
                            ].join(' ')}
                          >
                            {link.name}
                          </span>

                          <motion.span
                            initial={false}
                            animate={{
                              x: isActive ? 0 : -4,
                              opacity: isActive ? 1 : 0.35,
                            }}
                            className={[
                              'flex h-7 w-7 shrink-0 items-center justify-center rounded-full min-[380px]:h-8 min-[380px]:w-8 sm:h-9 sm:w-9',
                              'transition-colors duration-200',
                              isActive
                                ? 'bg-[#F4A04A] text-[#202124]'
                                : 'bg-black/[0.04] text-[#202124] group-hover:bg-[#F4A04A]',
                            ].join(' ')}
                          >
                            <ArrowUpRight size={16} className="sm:h-[18px] sm:w-[18px]" />
                          </motion.span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Menu footer */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="mt-5 border-t border-black/10 pt-4 min-[380px]:mt-6 min-[380px]:pt-5 sm:mt-8"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#202124] min-[380px]:text-xs min-[380px]:tracking-[0.12em]">
                        Data Tech{' '}
                        <span className="text-[#D97720]">Service</span>
                      </p>

                      <p className="mt-1.5 text-[9px] leading-relaxed text-[#777980] min-[380px]:text-[10px] sm:mt-2 sm:text-xs">
                        Reliable typing &amp; data services since 2006.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={scrollToTop}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#202124] text-white transition-colors hover:bg-[#F4A04A] hover:text-[#202124] min-[380px]:h-10 min-[380px]:w-10"
                      aria-label="Back to top"
                    >
                      <ArrowUp size={16} />
                    </button>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2 min-[380px]:mt-5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F4A04A]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-black/35 min-[380px]:text-[9px] min-[380px]:tracking-[0.15em]">
                      Typing · Data Entry · Data Segregation
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}