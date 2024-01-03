"use client"
import { signOut } from "next-auth/react"

export default function Info()
{
    return <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5">
                <div>
                Name: <span>gdgdg</span>
                </div>
                <div>
                Email: <span>wtvdfsfsfcom</span>
                </div>
                <div>
                Password: <span>Woasdfsfd23!</span>
                </div>
            <button onClick={() => signOut({callbackUrl: "http://localhost:3000/"})} className="bg-red-500 text-white py-4 px-2">Sign Out</button>
            </div>
        </div>

}