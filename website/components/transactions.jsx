'use client'
import {useEffect, useState} from "react"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import { TrendingCoins } from "@/app/api/crypto/route";
import Select from 'react-select';



export default function SignUp()
{
    const [crypto, setCrypto] = useState([]);
    const [coinC, setCoin] = useState('');
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

const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#0066FF' : 'white',
      color: state.isFocused ? 'white' : '#4a5568',
    }),
  };
    const getCrypto = async () => {
        try {
            const response = await fetch('https://api.coincap.io/v2/assets?limit=10', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setCrypto(data.data);
            
        } catch (error) {
            console.error('Error fetching cryptocurrency data:', error);
        }
        crypto.map(coin=>
        {
            if(coin.symbol == coinC)
                document.querySelector('.price').innerHTML = Math.round(coin.priceUsd) + '$'
        })
    };

    useEffect(() => {
        getCrypto();
    }, [coinC]);

    return (
        <div className="relative">
            <div className="w-[100px]">
            <Select
    options={crypto.map((coin) => ({ value: coin.symbol, label: coin.symbol }))}
    styles={customStyles} onChange={(e)=>setCoin(e.value)}/>
        <div className="price"></div>
        </div>

            
        </div>
    );
}