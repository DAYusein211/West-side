'use client'
import Link from 'next/link'
import { useEffect } from 'react';
import gsap from 'gsap';
export default function Home()
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
        x: xOffset * 1.1,
        y: yOffset * 1.1,
        duration:1,
        ease:'power4.out'
      });
      gsap.to('.move2', 
      {
        x: xOffset * .9,
        y: yOffset * .9,
        duration:1,
        ease:'power4.out'
      });
      gsap.to('.move3', 
      {
        x: xOffset,
        y: yOffset,
        duration:1,
       
        ease:'power4.out'
      });
      gsap.to('.move4', 
      {
        x: -xOffset,
        y: -yOffset,
        duration:1,
       
        ease:'power4.out'
      });
    };
    
    document.addEventListener('mousemove', handleMove);
  }, []);

    return <div>
            <div className=' w-screen flex justify-center h-[60px] relative top-14'>
                <nav className=' effect w-[fit-content] h-[30px] flex  gap-4 pr-2 pl-2'>
                    <Link href={'/wallet'}  className = 'link'>Wallet</Link>
                    <Link href={'/transactions'} className = 'link'>Transactions</Link>
                    <Link href={'/insurance'} className = 'link' >Insurance</Link>
                </nav>
            </div>
            <div className='text-white relative top-[100px] left-10 w-fit h-[210px]'>
                <div className = 'text-3xl w-fit'>MyWill</div>
                <div className = 'relative top-[20px] w-[40vw] text-sm font-light'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</div>
                <Link href = '/signIn' className = 'effect relative top-[70px] text-[#3E3E3E] hover:bg-black hover:text-[#603560] hover:border-[#603560] duration-200 pr-4 pl-4 pt-2 pb-2 border-[#3E3E3E] border-[1px]'>Sign In</Link>
            </div>
        </div>

}
