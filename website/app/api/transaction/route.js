import {NextResponse} from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user'

export default async (req, res) => {
    if (req.method === 'POST') {
      const { sender, receiver, amount } = req.body;
  
      try {
        await connectMongoDB();
  
        const senderAccount = await User.findOne({ name: sender });
        const receiverAccount = await User.findOne({ name: receiver });
  
  
        senderAccount.balance -= amount;
        receiverAccount.balance += amount;
  
        await senderAccount.save();
        await receiverAccount.save();
  
      } catch (error) {
        console.log("error");
      }
    } else {
      console.log("error");
    }
  };
