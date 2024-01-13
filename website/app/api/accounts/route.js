import {NextResponse} from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user'

export const GET = async (req) =>
{
    try
    {
        await connectMongoDB();
        const users = await User.find();
        
        return new NextResponse(JSON.stringify(users), {status:200});

    }
    catch(error)
    {   
        return new NextResponse("Error in fetching " + error, {status:500})
    }
}

