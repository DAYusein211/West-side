"use client";
import Link from "next/link";
import {useState} from "react"
import { useRouter } from "next/navigation";
import Image from "next/image";
import pagesWave from '@/assets/pagesWave.svg';
export default function SignUp()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pin, setPin] = useState("");
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState("");
    const router = useRouter();
    
    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        if(!name || !email || !password || !pin || !balance)
        {
            setError("Fill up the form!")
        return;
        }
        try 
        {
            const res = await fetch("api/signUp", 
            {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({name, email, password, pin, balance})});
            if(res.ok)
            {
                const form = e.target;
                form.reset();
                router.push("/signIn")
            }
            else
            {
                console.log("Sign up failure.", await res.text())
            }
        } catch (error) {
            console.log("Error during registration:", error)
        }
    }
    return <div>
        <div>
        <div className= "absolute top-[10px] left-[20px] text-white font-bold z-10">West side</div>
        <div className="absolute w-[100vw] h-[500px]">
            <Image src={pagesWave} layout="responsive" width = {0} height= {0}/> 
        </div>
    <div className= "absolute flex w-screen h-screen items-center justify-center">
        <div className="py-[40px] px-[2vw] flex items-center flex-col rounded-[5px] w-[35vw] h-[550px] bg-white shadow-lg" >
            
            <form onSubmit = {handleSubmit} className = "flex flex-col items-center w-[90%] gap-3">
            <h1 className =" self-start font-bold text-[#3C3C3C]">
                Create an account
            </h1>
                <label className="w-[100%] text-left text-[12px] mb-[-10px] text-[#5E5E5E]">Full name</label>
                <input onChange = { e => setName(e.target.value.trim())}type="text"/>
                <label className="w-[100%] text-left text-[12px] mb-[-10px] text-[#5E5E5E]">Email</label>
                <input onChange = { e => setEmail(e.target.value.trim())}type="email" />
                <label className="w-[100%] text-left text-[12px] mb-[-10px] text-[#5E5E5E]">Password</label>
                <input onChange = { e => setPassword(e.target.value.trim())}type="password" />
                <label className="w-[100%] text-left text-[12px] mb-[-10px] text-[#5E5E5E]">Crypto wallet PIN</label>
                <input onChange = { e => setPin(e.target.value.trim())}type="text"/>
                <label className="w-[100%] text-left text-[12px] mb-[-10px] text-[#5E5E5E]">Balance</label>
                <input onChange = { e => setBalance(e.target.value)}type="text"/>
                <button className = "bg-[#0066FF] hover:bg-[#2A7DFA] duration-200 w-[100%] rounded-[5px] p-2 text-[10px] md:text-[16px] text-white mt-[10px]">Sign up</button>
                {error &&(<div className = "text-[#eb3e3e]">{error}</div>) }
                
            </form>
        </div>
    </div>
    </div>
</div>
}