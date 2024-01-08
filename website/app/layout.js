
"use client"
import './globals.css'
import { AuthProvider } from './providers'
import Link from 'next/link'

import { useEffect } from 'react';
import gsap from 'gsap';

export default function RootLayout({ children }) 
{
  useEffect(() => 
  {
    const handleMove = (e) => 
    {
      const { clientX, clientY } = e;
      const xOffset = -((clientX / window.innerWidth - 0.1) * 30);
      const yOffset = -((clientY / window.innerHeight - 0.1) * 30);

      gsap.to('.move1', 
      {
        x: xOffset * 0.9,
        y: yOffset * 0.9,
        duration:1.5,
        ease:"power2.out"
      });
      gsap.to('.move2', 
      {
        x: xOffset * 0.8,
        y: yOffset * 0.8,
        duration:1.5, 
        ease:"power2.out"
      });
      gsap.to('.move3', 
      {
        x: xOffset * 0.7,
        y: yOffset * 0.7,
        duration:1.5, 
        ease:"power2.out"
      });
    };

    document.addEventListener('mousemove', handleMove);

    
  }, []);

  return (
    <html lang="en">
      <body className= "w-screen h-screen"> <nav className=" w-[200px] sm:w-[400px] h-[30px] sm:h-[50px] flex flex-row gap-6 justify-end absolute right-0 mr-8">
        <Link href={"/wallet"}  className = "link move1">Wallet</Link>
        <Link href={"/transactions"} className = "link move2">Transactions</Link>
        <Link href={"/insurance"} className = "link move3" >Insurance</Link>
    </nav>
        <AuthProvider>{children}</AuthProvider></body>
    </html>
  )
}