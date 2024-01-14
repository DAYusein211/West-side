"use client";
import Link from "next/link";
import {useState} from "react"
import { useRouter } from "next/navigation";

export default function SignUp()
{
    const [reciever, setReciever] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    
    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        if(!reciever || !amount)
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
            body: JSON.stringify({reciever, amount})});
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
            <input onChange = { e => setReciever(e.target.value.trim())}type="text" placeholder="Reciever"/>
            <input onChange = { e => setAmount(e.target.value.trim())}type="text" placeholder="Amount"/>
            <button className = "bg-blue-400 text-white">Sign up</button>
            {error &&(<div className = "text-red-400">{error}</div>) }
            
            <Link href = {"../"} className = "underline"> Sign In</Link>
        </form>
    </div>
</div>
}