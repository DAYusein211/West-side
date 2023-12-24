"use client"
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function SignIn()
{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

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
    <div className="grid place-items-center h-screen">
        <div className = "shadow-md p-3 rounded-r-sm ">
            <h1 className = "text-xl">
                Email/username
            </h1>
            <form className = "flex flex-col gap-2" onSubmit={HandleSubmit}>
                <input type="text" onChange = {(e) => setEmail(e.target.value)} placeholder="Enter email or username"/>
                <input type="text" onChange = {(e) => setPassword(e.target.value)} placeholder="Enter email or username"/>
                <button className = "bg-blue-400 text-white">Sign in</button>
                {error && <div className = "text-red-400">{error}</div>}
                
                
            <Link href = {"signUp"} className = "underline"> Sign Up</Link>
            </form>
        </div>
    </div>
        );
}