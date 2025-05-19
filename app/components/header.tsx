'use client';

import Link from 'next/link';
import React, { forwardRef } from 'react';

const Header = forwardRef<HTMLElement>((_, ref) => {
  return (
    <header
      ref={ref}
      id="header"
      className="fixed top-0 left-0 w-screen px-25 py-5 flex justify-between items-center z-[100] min-h-[10vh] max-h-[20vh] bg-[#f5f5f5]"
    >
      <Link href="/" className="text-3xl font-semibold text-[#359381]">Logo</Link>
      <nav className="hidden md:flex">
        <Link href="#" className="no-underline text-[#359381] px py-2 rounded-[20] mx-2 font-semibold hover:bg-[#359381] hover:text-white">À propos</Link>
        <Link href="#" className="no-underline text-[#359381] px-[0.5vh] py-2 rounded-[20] mx-2 font-semibold hover:bg-[#359381] hover:text-white">Mes Documents</Link>
        <Link href="#" className="no-underline text-[#359381] px-[0.5vh] py-2 rounded-[20] mx-2 font-semibold hover:bg-[#359381] hover:text-white">Mes projets</Link>
        <Link href="#" className="no-underline text-[#359381] px-[0.5vh] py-2 rounded-[20] mx-2 font-semibold hover:bg-[#359381] hover:text-white">Autre</Link>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
