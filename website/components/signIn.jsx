"use client"
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import pagesWave from '@/assets/pagesWave.svg';

export default function SignIn()
{
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();
   
    const HandleSubmit = async (e) => 
    {
        e.preventDefault();
        try {
           const res = await signIn("credentials", 
           {
                email, password, redirect:false
           });

           if(res.error)
           {
               setError("Invalid email or password");
                return;
            }   
           router.replace("/");
        }
        
        catch (error) 
        {
            
        }
    }
    
    return (
    <div>
        <div className= "absolute top-[10px] left-[20px] text-white font-bold z-10">West side</div>
        <div className="absolute w-[100vw] h-[500px]">
            <Image src={pagesWave} layout="responsive" width = {0} height= {0}/> 
        </div>
    <div className= "absolute flex w-screen h-screen items-center justify-center" >
        
        <div className="py-[40px] px-[2vw] flex items-center flex-col rounded-[5px] w-[35vw] h-[400px] bg-white shadow-lg">
            
            <form className = "flex flex-col items-center w-[90%] gap-3" onSubmit={HandleSubmit}>
            <h1 className =" self-start font-bold text-[#3C3C3C]">
                Sign in to your account
            </h1>
                <label className="w-[100%] text-left text-[12px] mb-[-10px] text-[#5E5E5E]">Email</label>
                <input type="email" onChange = {(e) => setEmail(e.target.value)} />
                <label className="w-[100%] text-left text-[12px] mb-[-10px] text-[#5E5E5E]">Password</label>
                <input type="password" onChange = {(e) => setPassword(e.target.value)}/>
                <button className = "bg-[#0066FF] hover:bg-[#2A7DFA] duration-200 w-[100%] rounded-[5px] p-2 text-[10px] md:text-[16px] text-white font-semibold mt-[10px]">Sign in</button>
                {error && <div className = "text-[#eb3e3e]">{error}</div>}
                <div className="text-[8px] sm:text-[16px] flex flex-row"> <div className="opacity-50">Don't have an account?</div> <Link href = {"signUp"} className = "font-semibold hover:font-bold duration-200">Sign up</Link></div>
            </form>
        </div>
    </div>
    </div>
        );
}