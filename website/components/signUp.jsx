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
    const [IBAN, setIBAN] = useState("");
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState("");
    const router = useRouter();
    
    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        if(!name || !email || !password || !IBAN || !balance)
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
            body: JSON.stringify({name, email, password, IBAN, balance})});
            if(res.ok)
            {
                const form = e.target;
                form.reset();
                router.push("/")
            }
            else
            {
                console.log("Sign up failure.")
            }
        } catch (error) {
            console.log("Error during registration:", error)
        }
    }
    return <div>
        <div>
        <div className= "absolute top-[10px] left-[20px] text-white font-bold z-10">West side</div>
        <div className="absolute w-[100vw]">
            <Image src={pagesWave} width = "100%" height= "100%"/> 
        </div>
    <div className= "absolute flex w-screen h-screen items-center justify-center">
        <div className=" text-white relative flex items-center flex-col rounded-[5px]  px-[15vw] py-[75px]  [background:linear-gradient(180deg,rgb(15.51,0,31.01)_0%,rgb(0.32,21.28,95.61)_100%)]" >
            <h1 className = "absolute top-[10px] left-[10px]">
                Sign up
            </h1>
            <form onSubmit = {handleSubmit} className = "flex flex-col items-center w-[110%] gap-3">
                <input onChange = { e => setName(e.target.value.trim())}type="text" placeholder="Full name"/>
                <input onChange = { e => setEmail(e.target.value.trim())}type="email" placeholder="Email"/>
                <input onChange = { e => setPassword(e.target.value.trim())}type="password" placeholder="Password"/>
                <input onChange = { e => setIBAN(e.target.value.trim())}type="text" placeholder="IBAN"/>
                <input onChange = { e => setBalance(e.target.value)}type="text" placeholder="USD"/>
                <button className = "bg-[#0029FF]  w-[100%] rounded-[5px] p-1">Sign up</button>
                {error &&(<div className = "text-[red]">{error}</div>) }
                
            </form>
        </div>
    </div>
    </div>
</div>
}