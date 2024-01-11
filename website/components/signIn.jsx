"use client"
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
               setError("Invalid password or username") 
                return;
            }   
           router.replace("");
        }
        
            catch (error) 
            {
            
            }
    }
    return (
        
    <div className="absolute flex justify-center w-[35vw] h-[100vh] z-10" >
        
        <div className="relative mt-[200px] flex items-center flex-col w-fit h-fit">
            <h1 className = "myFont spacing text-white text-3xl align-middle font-serif tracking-wider font-thin">
                Sign in 
            </h1>
            <form className = " relative top-[40px] flex items-center justify-center flex-col gap-3" onSubmit={HandleSubmit}>
                <input type="text" onChange = {(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="text" onChange = {(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button className = "bg-[#243527] text-[#758878] pr-6 pl-6 pt-1 pb-1 self-center hover:bg-[#758878] hover:text-white duration-200">Sign in</button>
                {error && <div className = "text-[red]">{error}</div>}
                <div className= "w-[100%] flex flex-row items-center justify-center gap-3">
                    <div className = "line"></div> <div className = "text-white">or</div> <div className = "line"></div>
                </div>
                <div className= "w-[150px] bg-white h-[40px]">
                    <div>Sign in with</div>
                </div>

            <Link href = {"signUp"} className = "underline text-white"> Sign Up</Link>
            </form>
        </div>
    </div>
        );
}