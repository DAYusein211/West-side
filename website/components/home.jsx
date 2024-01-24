'use client'
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import homeWave from '@/assets/homeWave.svg';
import Link from "next/link";
export default function Home()
{
 
  const { data: session, status } = useSession();
    return <div>
          
          
          <div className="absolute top-[-5vw] w-[100vw] h-[500px] ">
            <div className="absolute flex justify-center items-end w-[100vw] h-[calc(100vw/4)]">
            <div className="relative text-[#001730] top-[120px] xl:top-[200px] left-[10vw] w-screen h-[250px] flex items-center flex-col justify-center">
              <div className="randomised text-[36px] xl:text-[200px] mb-[-1vw] text-white">West side</div>
                <div className=" text-white"><div className = "font-bold text-[16px] xl:text-3xl text-center">Digital will redefined - </div>
                    <div className="text-center xl:text-[12px] text-[10px] font-semibold">Embrace Tomorrow with Crypto Ease and Trusted Legacy Planning. </div>
                </div>
              </div>
            </div>
            <Image src={homeWave} layout="responsive" width = {0} height= {0} />  
            
          </div>
          
          {!session && (<Link href={"/signIn"} className="absolute right-[30px] top-[25px] md:text-[16px] text-[10px] text-white font-semibold bg-[#0066FF] hover:bg-[#2A7DFA] duration-200 px-4 py-2 borde-[5px] rounded-[5px]">Sign in</Link>)}
          
        </div>
          

}
