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
            body: JSON.stringify({sender, amount, })});
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
    
    return <div>
    
</div>
}