'use client'
import './globals.css'
import { AuthProvider } from './providers'
import { useEffect } from 'react';
import gsap from 'gsap';

export default function RootLayout({ children }) 
{
  useEffect(() => 
  {
    const cursor = document.querySelector('.cursor');
    window.addEventListener('mousemove', (e) =>{ gsap.set(cursor, {x:e.clientX - 5, y:e.clientY - 10}) });

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
      <body className= 'w-screen h-screen'>
      <div className='cursor'></div>
         

      <AuthProvider>{children}</AuthProvider></body>
    </html>
  )
}