import Link from "next/link"
export default function Home()
{
    return <div><nav className=" w-[200px] sm:w-[400px] h-[30px] sm:h-[50px] flex flex-row gap-6 justify-end absolute right-0 mr-8">
        <Link href={""} className = "link">Wallet</Link>
        <Link href={""} className = "link">Transactions</Link>
        <Link href={""} className = "link">Insurance</Link>
    </nav>
    <Link href = "/signIn" className = "text-white">Sign In</Link>
    </div>

}
