'use client'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import gsap from 'gsap';
import SignIn from './signIn';
import Image from "next/image";
import Close from '@/assets/close.svg'

export default function Home()
{

  const { data: session, status } = useSession();
  
  
    window.addEventListener("click", (e) => 
  {
      if(e.target.contains(document.querySelector(".pop-up")) && e.target !== document.querySelector(".pop-up"))
      {
        console.log("outside");
        gsap.to(".pop-up",
        {
            left:-(window.innerWidth * 0.35),
            opacity:1,
            duration:0.2
        })
      }
  })
   
  

  const handleClick = () =>
      {
          
        gsap.to(".pop-up",
        {
            left:0,
            opacity:1,
            duration:0.1
        })
      
      }
  
  
    return <div>

              <div className = "absolute pop-up opacity-0 blurred left-[-35vw] w-[35vw] h-[100vh] bg-[rgba(255, 255, 255, 1)] z-20 backdrop-blur-3xl"></div>
              <div className = "absolute pop-up w-fit h-fit z-30 left-[-35vw]">
                <SignIn/>
              </div>
              <div className=' w-screen flex justify-center h-[60px] relative top-10'>
                <nav className=' effect w-[fit-content] h-[30px] flex  gap-8 pr-2 pl-2'>
                    <Link href={'/wallet'}  className = 'link'>Wallet</Link>
                    <Link href={'/transactions'} className = 'link'>Transactions</Link>
                    <Link href={'/insurance'} className = 'link' >Insurance</Link>
                </nav>
            </div>
            <div className='text-white relative top-[20vh] w-[100vw] h-[100px] flex items-center flex-col'>
                <div className = 'relative w-[50%] text-center text-3xl'>Looking for somewhere to store your crypto? You might’ve found the right place</div>
               {!(status == "authenticated") && (<button onClick = {handleClick} className = 'relative top-[50px] pr-10 pl-10 pt-2 pb-2 text-[#99D036] text-[20px] border-[1px] border-[#99D036] hover:border-[#FF0000] hover:text-[#FF0000] duration-200'>Sign In</button>)} 
            </div>
        </div>

}
