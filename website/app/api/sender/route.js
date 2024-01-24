import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';


export async function POST(req)
{
    try
    {
        const {sender,amount} = await req.json();
        
        await connectMongoDB();
            await User.updateOne({name: sender},
            {
                $inc:
                {
                    balance:-amount
                },
                $set:
                {
                   crypto:[]
                }
            })
        
        return NextResponse.json({message: 'User Registered'}, {status: 201});
        
    }
    catch(err)
    {
        return NextResponse.json({message: 'Error Accured, try again'}, {status: 500})
    }
}