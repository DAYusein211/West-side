
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
      
      const xOffset = -((clientX / window.innerWidth - 0.1) * 15) * 0.95;
      const yOffset = -((clientY / window.innerHeight - 0.1) * 15) * 0.95;

      gsap.to('.move1', 
      {
        x: xOffset,
        y: yOffset,
        duration:1.5,
        ease:"power1.out"
      });
      gsap.to('.move2', 
      {
        x: xOffset,
        y: yOffset,
        duration:2, 
        ease:"power1.out"
      });
      gsap.to('.move3', 
      {
        x: xOffset,
        y: yOffset,
        duration:2.5, 
        ease:"power1.out"
      });
    };

    document.addEventListener('mousemove', handleMove);
    const cursor = document.querySelector(".cursor");
    
  const updateCursor = (e) =>
  {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
    console.log(e.clientY)
  }
  window.addEventListener("mousemove", updateCursor);
  const link = document.querySelectorAll(".link");
  
    link.forEach(link => 
      {
          link.addEventListener("mouseover", () => {cursor.classList.add("scale")})
          link.addEventListener("mouseleave", () => {cursor.classList.remove("scale")})
      });

  
    
  }, []);

  

    
  return (
    <html lang="en">
      <body className= "w-screen h-screen">
        <div className = "cursor"></div>
         <nav className=" w-[200px] sm:w-[400px] h-[30px] sm:h-[50px] flex flex-row gap-6 justify-end absolute right-0 mr-8">
        <Link href={"/wallet"}  className = "link move1">Wallet</Link>
        <Link href={"/transactions"} className = "link move2">Transactions</Link>
        <Link href={"/insurance"} className = "link move3" >Insurance</Link>
    </nav>
        <AuthProvider>{children}</AuthProvider></body>
    </html>
  )
}