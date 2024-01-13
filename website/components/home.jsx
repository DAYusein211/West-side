'use client'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import gsap from 'gsap';
import SignIn from './signIn';
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";

export default function Home()
{
  const { data: session, status } = useSession();
  useLayoutEffect(() => 
  {
    
  gsap.registerPlugin(ScrollTrigger)
  
    window.addEventListener("click", (e) => 
    {
      if(e.target.contains(document.querySelector(".darken")))
      {
        
        gsap.to(".pop-up",
        {
            left:-(window.innerWidth * 0.35),
            duration:0.2
        })
        gsap.to(".darken",
        {
            opacity:0,
            zIndex:0,
            duration:0.5
        })
      }
    })
    window.addEventListener("resize", () => 
    {
      gsap.to(".pop-up",
      {
          left:-(window.innerWidth * 0.35),
          duration:0
  
      })
      gsap.to(".darken",
      {
          opacity:0,
          duration:0,
          zIndex:0
          
      })
    })
  

  document.querySelector('.btn').addEventListener('click', () =>
  {
      
    gsap.to(".pop-up",
    {
        left:0,
        duration:0.1
    })
    gsap.to(".darken",
    {
        opacity:1,
        duration:0.3,
        zIndex:10
    })
  
  })  
      const ctx = gsap.context(()=> {
        gsap.to('.rec',
      {
        opacity: 1,
      
        scrollTrigger: 
        {
          trigger: '.rec',
          
          // Stop pinning when the trigger element is 300 pixels below its top position
          pin:true,
          pinSpacing: false,
          markers: true,
          

        },
        x:100,
        duration: 3,
      }
    )})
     
  return () => ctx.revert();

  }, []);
    return <div>
          
              <div className = " absolute pop-up blurred left-[-35vw] w-[35vw] h-[100vh] z-20 backdrop-blur-3xl"></div>
              <div className = "absolute left-[-35vw] pop-up w-fit h-fit z-40">
                <SignIn/>
              </div>
              <div className = "opacity-0 darken absolute blurred w-[100vw] h-[100vh] backdrop-blur-[5px] z-0"></div>
              <div className=' w-screen flex justify-center h-[60px] relative top-10  '>
                <nav className=' effect w-[fit-content] h-[30px] flex  gap-8 pr-2 pl-2'>
                    <Link href={'/wallet'}  className = 'link'>Wallet</Link>
                    <Link href={'/transactions'} className = 'link'>Transactions</Link>
                    <Link href={'/insurance'} className = 'link' >Insurance</Link>
                </nav>
            </div>
            <div className='text-white relative top-[20vh] w-[100vw] h-[100px] flex items-center flex-col'>
                <div className = 'relative w-[50%] text-center text-3xl'>Looking for somewhere to store your crypto? You might’ve found the right place</div>
               {!(status == "authenticated") && (<button className = 'btn z-[2] relative top-[50px] pr-10 pl-10 pt-2 pb-2 text-[#99D036] text-[20px] border-[1px] border-[#99D036] hover:border-[#FF0000] hover:text-[#FF0000] duration-200'>Sign In</button>)} 
            </div>
            <div className="text1 text-white w-[300px]">Cudun estra kill enjoy whateever text yeah right on the track of it yeah </div>
            <div className="rec mt-[300px] bg-blue-400 w-[100vw] h-[100vh]"><div className=" box bg-slate-500 w-[100px] h-[100px] z-10"></div></div>
            
            <div className="relative mt-[600px] bg-slate-100 w-[100px] h-[1000px]"></div>
            
        </div>

}
