import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'

export async function POST(req)
{
    try
    {
        const {reciever,amount} = await req.json();
        await connectMongoDB();
      
        await User.updateOne({name: reciever},
        {
            $set:
            {
                balance:amount
            }
        })
        //WORKS OH MY GOD IT WORKS
        return NextResponse.json({message: 'User Registered'}, {status: 201});
        
    }
    catch(err)
    {
        return NextResponse.json({message: 'Error Accured, try again'}, {status: 500})
    }
}