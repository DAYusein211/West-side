import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export default async function POST(req) {
    try {
        await connectMongoDB();
        
        return "sd";

    } catch (err) {
        return NextResponse.json({ message: 'Error Occurred, try again' }, { status: 500 });
    }
}