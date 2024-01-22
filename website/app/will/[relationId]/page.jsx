"use client";
import {useState} from "react"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import pagesWave from '@/assets/pagesWave.svg';

export default function Page({params})
{
    const [IBAN, setIBAN] = useState("");
    const [reciever, setReciever] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { data: session, status } = useSession();
    const sender = session?.user?.name;
    return <main>
        <div className="absolute w-[100vw] h-[500px]">
            <Image src={pagesWave} layout="responsive" width = {0} height= {0}/> 
        </div>
        <div className="absolute top-[10px] left-[20px] flex flex-col gap-1 text-white">
            <h1 className="text-3xl font-bold">Digital Will</h1>
            <div className=" w-[25vw]">Choose someone reliable to inherit your will! {sender}</div>
        </div>
        <div className="absolute w-screen h-screen flex justify-center items-center text-white">
            <div className="absolute w-[50%] flex gap-10 h-[400px] [background:linear-gradient(180deg,rgb(15.51,0,31.01)_0%,rgb(0.32,21.28,95.61)_100%)] p-10 rounded-[5px]">
                <div className="flex flex-col gap-1 w-[40%]">
                    <h1 className="text-3xl font-bold">{params.relationId}</h1>
                    <div className=" w-[100%]">Your {params.relationId} will receive your will in 2 months. </div>
                </div>
                <form className="w-[60%] flex flex-col gap-5">
                    <div className="flex flex-row gap-10">
                        <input onChange = { e => setIBAN(e.target.value.trim())} type="text" placeholder="IBAN"/>
                        <input type="text" placeholder="%"/>
                    </div>
                    <div>
                        <label className="text-[#FFD100] opacity-25">Leave a final message.</label>
                        <input type="text" placeholder="Message" className="bg-[#FFD203] bg-opacity-15 caret-[#FFD100] text-[#FFD100] opacity-25 placeholder:text-[#FFD100]"/>
                    </div>
                    <button className="bg-[#0029FF]  w-[100%] rounded-[5px] p-1">Confirm</button>
                </form>
            </div>
        </div>
        
    </main>
}