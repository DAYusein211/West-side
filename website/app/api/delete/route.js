import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function DELETE(req)
{
    try 
    {
        const {user} = await req.json();
        await connectMongoDB();
      
        await User.deleteOne({name:user});
       
        return NextResponse.json({message: 'User Deleted'}, {status: 201});
        
    }
    catch(err)
    {
        return NextResponse.json({message: 'Error Accured, try again'}, {status: 500})
    }
}