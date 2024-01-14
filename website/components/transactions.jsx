"use client";
import Link from "next/link";
import {useState} from "react"
import { useRouter } from "next/navigation";

export default function SignUp()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [IBAN, setIBAN] = useState("");
    const [balance, setBalance] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    
    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        if(!name || !email || !password)
        {
            setError("Not all data has been given.")
        return;
        }
        try 
        {
            const res = await fetch("api/accounts", 
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
    return <div className="grid place-items-center h-screen">
    <div className = "shadow-md p-3 rounded-r-sm ">
        <h1 className = "text-xl">
            Sign up
        </h1>
        <form onSubmit = {handleSubmit} className = "flex flex-col gap-2">
            <input onChange = { e => setName(e.target.value.trim())}type="text" placeholder="Full name"/>
            <input onChange = { e => setEmail(e.target.value.trim())}type="text" placeholder="Email"/>
            <input onChange = { e => setPassword(e.target.value.trim())}type="text" placeholder="Password"/>
            <input onChange = { e => setIBAN(e.target.value.trim())}type="text" placeholder="IBAN"/>
            <input onChange = { e => setBalance(e.target.value)}type="text" placeholder="USD"/>
            <button className = "bg-blue-400 text-white">Sign up</button>
            {error &&(<div className = "text-red-400">{error}</div>) }
            
            <Link href = {"../"} className = "underline"> Sign In</Link>
        </form>
    </div>
</div>
}