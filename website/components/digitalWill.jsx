"use client"
import Link from "next/link";
import Image from "next/image";
import pagesWave from '@/assets/pagesWave.svg';
export default function DigitalWill()
{
    
    

    return (
    <div>
        <div className="absolute w-[100vw] h-[500px]">
            <Image src={pagesWave} layout="responsive" width = {0} height= {0}/> 
        </div>
        <div className="absolute top-[10px] left-[20px] flex flex-col gap-1 text-white">
            <h1 className="text-3xl font-bold">Digital Will</h1>
            <div className=" w-[25vw]">Choose someone reliable to inherit your will! </div>
        </div>
        <div className="absolute top-[50px] flex w-screen h-screen justify-center items-center text-white">
            <div className="flex flex-col justify-between w-[350px] h-[600px] gap-16 md:flex-row md:h-[300px] md:w-[60vw]">
            <Link href = "/will/Family" className="w-[100%] h-[100%] [background:linear-gradient(180deg,rgb(15.51,0,31.01)_0%,rgb(0.32,21.28,95.61)_100%)] rounded-[5px] opacity-90 hover:opacity-100 duration-200">
                    <div className="absolute">
                        <div className="absolute top-[20px] left-[20px] flex flex-col gap-2">
                            <h1 className="text-3xl">Family</h1>
                            <div className=" w-[25vw]">A relative is a smart choice!</div>
                        </div>
                    </div>
                </Link>
            <Link href = "/will/Friends" className="w-[100%] h-[100%] [background:linear-gradient(180deg,rgb(15.51,0,31.01)_0%,rgb(0.32,21.28,95.61)_100%)] rounded-[5px] opacity-90 hover:opacity-100 duration-200">
                <div className="absolute  w-[100%]">
                    <div className="absolute top-[20px] left-[20px] flex flex-col gap-2">
                        <h1 className="text-3xl">Friends</h1>
                        <div className=" w-[25vw]">Someone you can trust is a good approach!</div>
                    </div>
                </div>
            </Link>
                
            </div>
        </div>
    </div>
        );
}