import User from '@/models/user';
import { notFound } from 'next/navigation';

async function getData()
{   
    
    const res = await fetch('http://localhost:3000/api/accounts', {cache:'no-store'});
    if(!res.ok)
    {
        return notFound();
    }
    return res.json();
}



export default async function Transactions()
{

    const data = await getData();

   
    
    
    console.log(data);
    
    return (
        <div className='text-white'>
        <h1>Money Transaction Simulator</h1>
        <div>
            <h2>Accounts:</h2>
        </div>
        
        <form>
        <div>
            <label>Receiver:</label>
            <input type="text" name = "name"/>
        </div>
        <div>
            <label>Amount:</label>
            <input type="text" name = "amount"/>
        </div>
        <button >Trnas</button>
        </form>
        {
            data?.map(user=>
                (
                    <div key = {user?._id}>
                        <div>{user?.name}</div>
                        <div>{user?.balance}</div>
                    </div>
                ))
        }
        </div>
    );
    
}