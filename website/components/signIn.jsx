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
               setError("Invalid password or username");
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
        
        <div className=" text-white relative flex items-center flex-col rounded-[5px] px-[15vw] py-[125px] [background:linear-gradient(180deg,rgb(15.51,0,31.01)_0%,rgb(0.32,21.28,95.61)_100%)]">
            <h1 className = "absolute top-[10px] left-[10px]">
                Sign in 
            </h1>
            <form className = "flex flex-col items-center w-[110%] gap-3" onSubmit={HandleSubmit}>
                <input type="email" onChange = {(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" onChange = {(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button className = "bg-[#0029FF]  w-[100%] rounded-[5px] p-1">Sign in</button>
                {error && <div className = "text-[red]">{error}</div>}
                <div className="text-[10px] flex flex-row"> <div className="opacity-50">Don't have an account?</div> <Link href = {"signUp"} className = "font-bold">Sign up</Link></div>
                <div className= "flex flex-row items-center gap-1">
                    <div className = "line"></div> <div className = "opacity-25 text-[10px]">or</div> <div className = "line"></div>
                </div>
            
            
            </form>
        </div>
    </div>
    </div>
        );
}