import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

export default async (req, res) => {
  if (req.method !== 'PUT') {
    const { sender, receiver, amount } = req.body;

    try {
      await connectMongoDB();

      // Find sender and receiver accounts
      const senderAccount = await User.findOne({ name: sender });
      const receiverAccount = await User.findOne({ name: receiver });

      if (!senderAccount || !receiverAccount) {
        return new NextResponse('Sender or receiver not found', { status: 404 });
      }

      // Update balances
      senderAccount.balance -= amount;
      receiverAccount.balance += amount;

      // Save changes
      await senderAccount.save();
      await receiverAccount.save();

      return new NextResponse('Transaction successful', { status: 200 });
    } catch (error) {
      console.error('Error updating user:', error);
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  } else {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }
};  