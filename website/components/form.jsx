import User from '@/models/user';
import { notFound } from 'next/navigation';
import {useEffect, useState} from 'react';
async function getData()
{   
    
    const res = await fetch('http://localhost:3000/api/accounts', {cache:'no-store'});
    if(!res.ok)
    {
        return notFound();
    }
    return res.json();
}
export default async function Form()
{
    
    const data = await getData();
    console.log(data);
    return <div>
        {
            data?.map(user=>
                (
                    <div key = {user?._id}>
                        <div>{user?.name}</div>
                    </div>
                ))
        }
        </div>
}