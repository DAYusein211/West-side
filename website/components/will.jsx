'use client'
import {useState} from "react"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import pagesWave from '@/assets/pagesWave.svg';
export default function Will({data})
{
    const [reciever, setReciever] = useState("");
    const [percentage, setPercentage] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const router = useRouter();
    const { data: session, status } = useSession();

    let amount = 0;
    const sender = session?.user?.name;

    const handleSubmit = async (e) => 
    {
        
        e.preventDefault();
        
        if(!reciever || !percentage || !message)
        {
            setError("Not all fields have been filled!");
            return;
        }
       
        const data = await fetch("api/accounts", 
        {
        method: "GET", 
        headers: {"Content-Type": "application/json"}, 
      });
        
        if (!data.ok) 
            console.error('Error updating user:', data.statusText);
        const decoded = await data.json();
        
        decoded.map(d=>
            {
                if(d.name === sender)
                {
    
                    amount = d.balance * (percentage / 100);
                }
            })
       
        
             
            const send = await fetch("api/sender", 
            {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({sender, amount })});
            if(send.ok)
            {
                const form = e.target;
                form.reset(); 
                router.push('/will');
            }
           
            const receive = await fetch("api/receiver", 
            {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({sender, reciever, amount, message})});
            if(receive.ok)
            {
                const form = e.target;
                form.reset(); 
                router.push('/will');
            }
           
}
    
    return <main>
    <div className="absolute w-[100vw] h-[500px]">
        <Image src={pagesWave} layout="responsive" width = {0} height= {0}/> 
    </div>
    <div className="absolute top-[10px] left-[20px] flex flex-col gap-1 text-white">
        <h1 className="text-3xl font-bold ">Digital Will</h1>
        <div className=" w-[25vw]">Choose someone reliable to inherit your will!</div>
    </div>
    <div className="absolute w-screen h-screen flex justify-center items-center">
        <div className="absolute w-[50%] flex gap-10 h-[400px] bg-white p-10 rounded-[5px] shadow-lg">
            <div className="flex flex-col gap-1 w-[40%]">
                <h1 className="text-3xl font-bold text-[#3C3C3C]">{data}</h1>
                <div className=" w-[100%] text-[#5E5E5E]">They will receive your Will immediately, which includes your crypto wallet!</div>
            </div>
            <form className="w-[60%] flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-row gap-10">
                    <input onChange = { e => setReciever(e.target.value.trim())} type="text" placeholder="Name"/>
                    <input onChange = { e => {if(e.target.value <= 100)setPercentage(e.target.value.trim());else setPercentage(100)}} type="text" placeholder="%"/>
                </div>
                <div>
                    <label className="text-[#5E5E5E]">Leave them a message</label>
                    <input type="text" placeholder="Message" onChange={e => setMessage(e.target.value.trim())}/>
                </div>
                <button className="bg-[#0066FF] hover:bg-[#2A7DFA] duration-200 text-white font-semibold  w-[100%] rounded-[5px] p-1">Confirm</button>
                <div className="text-[#eb3e3e]">{error}</div>
            </form>
            
        </div>
    </div>
    
</main>
}
