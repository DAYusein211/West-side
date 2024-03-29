import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'

export async function POST(req)
{
    try
    {
        
        const {name, email, password, pin, balance} = await req.json();
        await connectMongoDB();
        const exists = await User.findOne({email});
        if(exists)
            return "user already exists";
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name, 
            email, 
            password:hashedPassword, 
            balance,
            crypto: [
                {
                    BTC: Number(Math.random().toFixed(1)),
                    ETH: Number(Math.random().toFixed(1)),
                    pin,
                }
            ]
        });
    
        return NextResponse.json({message: 'User Registered'}, {status: 201});
        
    }
    catch(err)
    {
        return NextResponse.json({message: 'Error Accured, try again'}, {status: 500})
    }
}