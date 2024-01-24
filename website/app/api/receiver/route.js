import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(req)
{
    try 
    {
        const {sender, reciever,amount, message} = await req.json();
        await connectMongoDB();
        const senderAccount = await User.findOne({ name: sender });
        await User.updateOne({name: reciever},
        {
            $inc:
            {
                balance:amount
            },
            $push:
            {
                message: 
                {
                  owner: sender,
                  text:message
                },
                crypto: 
                {
                    BTC: senderAccount.crypto[0].BTC,
                    ETH: senderAccount.crypto[0].ETH,
                    pin: senderAccount.crypto[0].pin
                }
            }
            
        })
       
        return NextResponse.json({message: 'User Registered'}, {status: 201});
        
    }
    catch(err)
    {
        return NextResponse.json({message: 'Error Accured, try again'}, {status: 500})
    }
}