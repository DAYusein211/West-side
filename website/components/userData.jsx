"use client"
import { signOut } from "next-auth/react"
export default function Info()
{
    return <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5">
                <div>
                Name: <span>Denis</span>
                </div>
                <div>
                Email: <span>wtv@gmail.com</span>
                </div>
                <div>
                Password: <span>Woah123!</span>
                </div>
                <button onClick={() => signOut()} className="bg-red-500 text-white py-4 px-2">Sign Out</button>
            </div>
        </div>

}