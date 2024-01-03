"use client";
import Link from "next/link";
import {useState} from "react"
import { useRouter } from "next/navigation";

export default function SignUp()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("Invalid");
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
            const res = await fetch("api/signUp", 
            {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({name, email, password})});
            if(res.ok)
            {
                const form = e.target;
                form.reset();
                router.push("../signIn")
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
            <input onChange = { e => setName(e.target.value)}type="text" placeholder="Full name"/>
            <input onChange = { e => setEmail(e.target.value)}type="text" placeholder="Email"/>
            <input onChange = { e => setPassword(e.target.value)}type="text" placeholder="Password"/>
            <button className = "bg-blue-400 text-white">Sign up</button>
            {error &&(<div className = "text-red-400">{error}</div>) }
            
            <Link href = {"../"} className = "underline"> Sign In</Link>
        </form>
    </div>
</div>
}