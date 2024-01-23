'use client'
import Image from "next/image";
import pagesWave from '@/assets/pagesWave.svg';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
let once = true;
export default function Account()
{
    
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
            router.push('/account');
         
    };
    
    window.addEventListener('mousemove', async () =>
    {  
        
         if(once)
        {  
            const data = await fetch("api/accounts", 
            {
            method: "GET", 
            headers: {"Content-Type": "application/json"}, 
            });
            const decoded = await data.json();
        decoded.map(obj=>
        {
            if(obj.name === userName)
            {
                document.querySelector('.name').innerHTML = obj.name;
                document.querySelector('.email').innerHTML = obj.email;
                document.querySelector('.password').innerHTML = '*******';
                document.querySelector('.balance').innerHTML = obj.balance + '$';
            }
        })
            once = false;
        }
    }
    )
  

    

    
    return (
    <div>
       <div className="absolute w-[100vw] h-[500px]">
            <Image src={pagesWave} layout="responsive" width = {0} height= {0}/> 
        </div>
        <div className="absolute top-[10px] left-[5%] flex flex-col gap-1 text-3xl text-white ">
            Account
        </div>
        <div className="absolute w-screen h-screen flex justify-center items-center ">
        <div className="absolute  bg-white w-[50%] h-[500px] rounded-[5px] pt-[30px] pl-[5%] shadow-lg">
            <div className="w-[100%]">
                <h1 className="sm:text-3xl text-2xl font-bold text-[#3C3C3C]">My details</h1>
                <div>
                    <div className="sm:text-2xl text-[16px] font-semibold text-[#3C3C3C]">Personal information</div>
                    <label className="opacity-75">Name</label>
                    <div className="name w-[90%] border-[1px] border-opacity-5 p-3 h-[50px] rounded-[5px]"></div>
                </div>
                <div>
                    <div className="sm:text-2xl text-[16px] font-semibold text-[#3C3C3C]">Account information</div>
                    <label className="opacity-75">Email</label>
                    <div className="email w-[90%] border-[1px] border-opacity-5 p-3 h-[50px] rounded-[5px]"></div>
                    <label className="opacity-75">Password</label>
                    <div className="password w-[90%] border-[1px] border-opacity-5p-3 h-[50px] rounded-[5px]"></div>
                </div>
                <div>
                    <div className="sm:text-2xl text-[16px] font-semibold text-[#3C3C3C]">Balance</div>
                    <div className="balance w-[90%] border-[1px] border-opacity-5 p-3 h-[50px] rounded-[5px]"></div>
                    
                </div>    
            </div>
            <div className="absolute bottom-[10px] right-[5%] text-white flex gap-4">
                <button className="bg-[#0066FF] hover:bg-[#2A7DFA] duration-200 sm:px-5 px-2 py-2 rounded-[5px] text-[10px] sm:text-[16px]" onClick={() => signOut({callbackUrl: "http://localhost:3000/"})}>Sign out</button>
                <button className="bg-[#eb3e3e] hover:bg-[#ec6a6a] duration-200 sm:px-5 px-2 py-2 rounded-[5px] text-[10px] sm:text-[16px]" onClick={handleDelete}>Delete Account</button>
            </div>
        </div>
        </div>
    </div>
        );
}