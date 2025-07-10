'use client';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { Menu } from 'lucide-react';

interface HeaderProps {
  setShowGlass?: (show: boolean) => void;
}

export default function Header({ setShowGlass }: HeaderProps) {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 2,
        ease: 'power3.out',
      });
    }
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        width: open ? 370 : 56,
        paddingLeft: open ? 32 : 12,
        paddingRight: open ? 32 : 12,
        duration: 0.5,
        ease: 'power3.inOut',
      });
    }
  }, [open]);

  return (
    <header ref={headerRef} className="w-full pt-6 pb-2 flex justify-center items-center z-[9999] ">
      <div
        ref={navRef}
        className="flex items-center w-[56px] px-3 py-3 rounded-full bg-gradient-to-br from-white/20 via-purple-200/10 to-purple-400/10 backdrop-blur-2xl border border-white/30 shadow-xl overflow-hidden transition-all duration-500"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)', width: 56 }}
        onMouseEnter={() => { setOpen(true); setShowGlass && setShowGlass(false); }}
        onMouseLeave={() => { setOpen(false); setShowGlass && setShowGlass(true); }}
      >
        <Menu className="text-purple-500 w-7 h-7 mr-2 flex-shrink-0" />
        <div className={`flex gap-4 text-base font-semibold tracking-wide transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <p className="transition-all duration-200 hover:text-purple-300 cursor-pointer px-4 py-2 rounded-full relative hover:bg-white/30 active:scale-95 select-none">
            About
          </p>
          <p className="transition-all duration-200 hover:text-purple-300 cursor-pointer px-4 py-2 rounded-full relative hover:bg-white/20 active:scale-95 select-none">
            Projects
          </p>
          <p className="transition-all duration-200 hover:text-purple-300 cursor-pointer px-4 py-2 rounded-full relative hover:bg-white/20 active:scale-95 select-none">
            Skills
          </p>
        </div>
      </div>
    </header>
  );
}
