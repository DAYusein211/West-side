import Link from "next/link";
export default function SignIn()
{
    return (
    <div className="grid place-items-center h-screen">
        <div className = "shadow-md p-3 rounded-r-sm ">
            <h1 className = "text-xl">
                Email/username
            </h1>
            <form className = "flex flex-col gap-2">
                <input type="text" placeholder="Enter email or username"/>
                <input type="text" placeholder="Enter email or username"/>
                <button className = "bg-blue-400 text-white">Sign in</button>
                <div className = "text-red-400">Invalid</div>
            <Link href = {"signUp"} className = "underline"> Sign Up</Link>
            </form>
        </div>
    </div>
        );
}