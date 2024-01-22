'use client'
import './globals.css'
import { AiOutlineSwap, AiOutlineHome, AiOutlineUser, AiOutlineSolution } from "react-icons/ai";
import { AuthProvider } from './providers'
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function RootLayout({ children }) 
{
/*
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
*/
  return (
    <html>
      <body className='h-screen overflow-hidden'>

      <nav className=' absolute flex flex-col text-white right-[30px] top-[30vh] items-center space-y-5 z-20 [background:linear-gradient(180deg,rgb(15.51,0,31.01)_0%,rgb(0.32,21.28,95.61)_100%)] px-[10px] py-[60px] rounded-[5px]'>
        <Link href = '/' className='opacity-50 hover:opacity-100 duration-200 h-fit w-fit p-2'><AiOutlineHome size={25}/></Link>
        <Link href = '/will' className='opacity-50 hover:opacity-100 duration-200 h-fit w-fit p-2'><AiOutlineSolution size={25}/></Link>
        <Link href = '/transactions' className='opacity-50 hover:opacity-100 duration-200 h-fit w-fit p-2'><AiOutlineSwap size={25}/></Link>
        <Link href = '/account' className='opacity-50 hover:opacity-100 duration-200 h-fit w-fit p-2'><AiOutlineUser size={25}/></Link>
      </nav>
  
      
      <AuthProvider>{children}</AuthProvider>
        </body>
    </html>
  )
}