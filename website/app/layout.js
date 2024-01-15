'use client'
import './globals.css'
import { AuthProvider } from './providers'
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function RootLayout({ children }) 
{

  useLayoutEffect(() => 
  {
    
    
    const cursor = document.querySelector('.cursor');
    const updateCursor = (e) =>
    { 
      gsap.set(cursor, 
      {
        
        x:(e.clientX + window.scrollX) - 5, 
        y:(e.clientY + window.scrollY) - 10
      }) 
      
    };
    
    window.addEventListener('mousemove',  updateCursor);
    
  
    const cursorEffect = document.querySelectorAll('.effect');
    cursorEffect.forEach(cursorEffect => 
      {
          cursorEffect.addEventListener('mouseover', () => 
          {
            gsap.set(cursor, {width: '25px', height: '25px'});
            
          });

          cursorEffect.addEventListener('mouseout', () => 
          {
            gsap.set(cursor, {width: '10px', height: '10px'});
            
          });
      });
  }, []);

  

    
  return (
    <html>
      <body className='h-fit'>
      <div className='cursor'></div>
      <div className=' w-screen flex justify-center h-[60px] absolute top-10 z-10 '>
                <nav className=' effect w-[fit-content] h-[30px] flex  gap-8 pr-2 pl-2'>
                   <Link href={'/'}  className = 'link'>Home</Link>
                   <Link href={'/transactions'} className = 'link'>Transactions</Link>
                   
                </nav>
                
            </div>

      <AuthProvider>{children}</AuthProvider></body>
    </html>
  )
}