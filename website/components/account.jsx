'use client'
import Image from "next/image";
import pagesWave from '@/assets/pagesWave.svg';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoIosAlert } from "react-icons/io";

export default function Account()
{
    let inbox = document.querySelector('.inbox');
    const { data: session, status } = useSession();
    const userName = session?.user?.name;
    const router = useRouter();
    
    const handleDelete = async () =>
    {
        
         const res = await fetch('api/delete',
         {
             method:'DELETE',
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify({ user: userName })
         })
         if(res.ok)
         {  
            router.push('/');
            signOut({callbackUrl: "http://localhost:3000/"})
         }
         
    };
    
    
    
    
    const info = async () =>
    {       
        try
        {
            const data = await fetch("api/accounts", 
            {
            method: "GET", 
            headers: {"Content-Type": "application/json"}, 
            });
            let decoded;
            if(data.ok)
                decoded = await data.json();
            console.log(decoded)
        decoded.map(obj=>
        {
            if(obj.name == userName)
            {
                document.querySelector('.name').innerHTML = obj.name;
                document.querySelector('.email').innerHTML = obj.email;
                document.querySelector('.password').innerHTML = '*******';
                document.querySelector('.balance').innerHTML = obj.balance + ' USD';
                document.querySelector('.btc').innerHTML = obj.crypto[0].BTC + ' BTC';
                document.querySelector('.eth').innerHTML = obj.crypto[0].ETH + ' ETH';
                document.querySelector('.pin').innerHTML = obj.crypto[0].pin;
            }
        })
        }
        catch(err)
        {

        }
            
    }
    document.onload = info();
   

    const Inbox = async () =>
    {
        
        const data = await fetch("api/accounts", 
            {
            method: "GET", 
            headers: {"Content-Type": "application/json"}, 
            });
            const decoded = await data.json();
            
            decoded.map(obj=> 
                {
                    if(userName == obj.name)
                    {   
                        if(!inbox.innerHTML)
                        for(let i = 0; i < obj.message.length; i++)
                            inbox.innerHTML += `<div> <div> From ${obj.message[i].owner}</div> <div> ${obj.message[i].text} </div> <div>You have also inherited a crypto wallet(${obj.crypto[i].BTC}BTC, ${obj.crypto[i].ETH}ETH) with a pin of ${obj.crypto[i].pin} as well as money! </div>`;
                        else
                        inbox.innerHTML = "";
                            
                    }
                }) 
    }
    
    return (
    <div>
       <div className="absolute w-[100vw] h-[500px]">
            <Image src={pagesWave} layout="responsive" width = {0} height= {0}/> 
        </div>
        <div className="absolute top-[10px] left-[5%] flex flex-col gap-1 text-3xl text-white font-bold">
            Account
        </div>
        
        <button onClick={Inbox} className="absolute top-[35px] right-[35px] z-[100] opacity-75 hover:opacity-100 duration-200"><IoIosAlert color = {'white'} size = {25}/></button>
        <div className="inbox rounded-[5px] z-[10000] absolute top-[20px] px-2 right-[50px] w-[250px] h-fit flex flex-col bg-white font-semibold text-[#3C3C3C] shadow-lg"></div>
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="absolute w-[70vw] h-screen flex flex-col sm:flex-row justify-center items-center gap-[2vw]">
                <div className=" bg-white w-[50%] h-[500px] rounded-[5px] pt-[30px] pl-[5%] shadow-lg flex flex-col">
                    <div className="w-[100%] ">
                        <h1 className="sm:text-3xl text-2xl font-bold text-[#3C3C3C]">My details</h1>
                        <div>
                            <div className="md:text-2xl text-[16px] font-semibold text-[#3C3C3C]">Personal information</div>
                            <label className=" opacity-75">Name</label>
                            <div className="name w-[90%] border-[1px] border-opacity-5 p-3 md:h-[50px] h-[30px] rounded-[5px] opacity-75"></div>
                        </div>
                        <div>
                            <div className="md:text-2xl text-[16px] font-semibold text-[#3C3C3C]">Account information</div>
                            <label className="opacity-75">Email</label>
                            <div className="email w-[90%] border-[1px] border-opacity-5 p-3 md:h-[50px] h-[30px] rounded-[5px] opacity-75"></div>
                            <label className="opacity-75">Password</label>
                            <div className="password w-[90%] border-[1px] border-opacity-5 p-3 md:h-[50px] h-[30px] rounded-[5px] opacity-75"></div>
                        </div>
                        <div>
                        <label className="opacity-75">Balance</label>
                            <div className="balance w-[90%] border-[1px] border-opacity-5 p-3 md:h-[50px] h-[30px] rounded-[5px] opacity-75"></div>
                            
                        </div>    
                    </div>
                    <div className="relative bottom-[-1vw] right-[10%] text-white flex gap-4 self-end">
                        <button className="bg-[#0066FF] hover:bg-[#2A7DFA] duration-200 sm:py-2 sm:px-2 px-1 py-1 rounded-[5px] text-[6px] sm:text-[16px]" onClick={() => signOut({callbackUrl: "http://localhost:3000/"})}>Sign out</button>
                        <button className="bg-[#eb3e3e] hover:bg-[#ec6a6a] duration-200 sm:py-2 sm:px-2 px-1 py-1 rounded-[5px] text-[6px] sm:text-[16px]" onClick={handleDelete}>Delete Account</button>
                    </div>
                </div>
                <div className=" bg-white w-[50%] h-[500px] rounded-[5px] pt-[30px] pl-[5%] shadow-lg">
                <h1 className="sm:text-3xl text-2xl font-bold text-[#3C3C3C]">Crypto wallet</h1>
                <div>
                        <label className="opacity-75">Bitcoin</label>
                        <div className="btc w-[90%] border-[1px] border-opacity-5 p-3 h-[50px] rounded-[5px] opacity-75"></div>
                        <label className="opacity-75">Ether</label>
                        <div className="eth w-[90%] border-[1px] border-opacity-5 p-3 h-[50px] rounded-[5px] opacity-75"></div>
                        <label className="opacity-75">PIN</label>
                        <div className="pin w-[90%] border-[1px] border-opacity-5 p-3 h-[50px] rounded-[5px] opacity-75"></div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
}