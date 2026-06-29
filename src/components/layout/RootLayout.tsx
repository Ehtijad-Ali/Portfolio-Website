'use client';

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function RootLayout() {
  return (
    <div
      className="noise-overlay flex min-h-screen flex-col"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text-primary)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <CustomCursor />
      <Navbar />
      <main className="flex-1 pt-16 md:pt-18">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}