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
        <div className="absolute top-[150px] left-[32vw] flex flex-col items-center gap-1 text-white">
            <h1 className="text-3xl font-bold">Digital Will</h1>
            <div className=" w-[35vw] text-center">Choose how your digital assets are passed on—whether to family or friends—ensuring your legacy is handled just the way you want. </div>
        </div>
        <div className="absolute top-[50px] flex w-screen h-screen justify-center items-center text-[#5E5E5E]">
            <div className="flex flex-col justify-between w-[350px] h-[600px] gap-16 md:flex-row md:h-[300px] md:w-[60vw]">
            <Link href = "/Family" className="w-[100%] h-[100%] bg-white rounded-[5px] shadow-lg">
                    <div className="absolute">
                        <div className="absolute top-[20px] left-[20px] flex flex-col gap-2">
                            <h1 className="text-3xl text-[#3C3C3C]">Family</h1>
                            
                        </div>
                    </div>
                </Link>
            <Link href = "/Friends" className="w-[100%] h-[100%] bg-white rounded-[5px]  shadow-lg">
                <div className="absolute  w-[100%]">
                    <div className="absolute top-[20px] left-[20px] flex flex-col gap-2">
                        <h1 className="text-3xl text-[#3C3C3C]">Friends</h1>

                    </div>
                </div>
            </Link>
                
            </div>
        </div>
    </div>
        );
}