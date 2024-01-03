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
            email, password, redirect:false});

           if(res.error)
           {
               setError("Invalid password or username") 
                return;
            }   
           router.replace("data")
        }
        
            catch (error) {
            
        }
    }
    return (
    <div className="flex place-items-center h-screen  justify-center items-center flex-col" >
        <div className="grid place-items-center ">
            <h1 className = "myFont spacing text-white text-xl align-middle font-serif tracking-wider font-thin">
                Sign in to continue
            </h1>
            <form className = "flex place-items-center flex-col gap-2" onSubmit={HandleSubmit}>
                <input type="text" onChange = {(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="text" onChange = {(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button className = "bg-blue-400 text-white w-32 self-center">Sign in</button>
                {error && <div className = "text-red-400 ">{error}</div>}
                
                
            <Link href = {"signUp"} className = "underline text-white"> Sign Up</Link>
            </form>
            </div>
    </div>
        );
}