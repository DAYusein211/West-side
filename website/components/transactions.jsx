'use client'
import {useState} from "react"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function SignUp()
{
    const [reciever, setReciever] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { data: session, status } = useSession();
    const sender = session?.user?.name;
    const handleAccountBalance = async () =>
    {
        const data = await fetch("api/accounts", 
        {
        method: "GET", 
        headers: {"Content-Type": "application/json"}, 
      });
        
        if (!data.ok) 
            console.error('Error updating user:', data.statusText);
        const decoded = await data.json();
        let senderBalance = 0;
        decoded.map(d =>
            {
                if(d.name === sender)
                {
                    senderBalance = d.balance;
                    
                }
            })
        document.querySelector('.acc').innerHTML = senderBalance + '$'
    }
    const handleSubmit = async (e) => 
    {
        
        e.preventDefault();
        
        if(!reciever || !amount)
        {
            setError("Fill in all of it!")
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
        let senderBalance = 0;
        decoded.map(d=>
            {
                if(d.name === sender)
                {
                    senderBalance = d.balance;
                    
                }
            })
       
        
        if(senderBalance >= amount)
        {
            const send = await fetch("api/sender", 
            {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({sender, amount })});
            if(send.ok)
            {
                const form = e.target;
                form.reset(); 
                router.push('/transactions')
            }
            else
            {
                console.log("Transaction failure.")
            }
            const receive = await fetch("api/receiver", 
            {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({reciever, amount})});
            if(receive.ok)
            {
                const form = e.target;
                form.reset(); 
                router.push('/transactions')
            }
            else
                console.log("Transaction failure.")
    }
    
         

        
}
    
    return <div className="grid place-items-center h-screen">
    <div className = "shadow-md p-3 rounded-r-sm ">
        
        <form onSubmit = {handleSubmit} className = " text-2xl pr-[40px] pl-[40px] pt-[70px] pb-[40px] border-[1px] border-[#9ad0367f] flex flex-col gap-2">
        
            <input onChange = { e => setReciever(e.target.value.trim())}type="text" placeholder="Reciever"/>
            <input onChange = { e => setAmount(e.target.value.trim())}type="text" placeholder="Amount"/>
            <button className = "w-[60px] bg-[rgb(1,1,1,0)] text-xl  text-[#243527] hover:text-[#99D036] duration-100">Send</button>
            
            {error &&(<div className = "text-sm text-red-400">{error}</div>) }
            
        </form>
        <div className="relative top-[-60px] left-[180px]">
        <button onClick={handleAccountBalance} className="w-[125px] bg-[rgb(1,1,1,0)] text-xl  text-[#243527] hover:text-[#99D036] duration-100">Get Balance</button>
        <div className="flex flex-row">
        <div className="text-[#243527]">Balance: </div><div className="acc text-[#243527]"></div>
        </div>
        </div>
    </div>
</div>
}