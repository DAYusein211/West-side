
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth/next';
import  CredentialsProvider  from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import bcrypt from 'bcryptjs'

export const authOptions = {
    providers: [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }), 
    Facebook({

    }),
    CredentialsProvider({name:'credentials', credentials: {}, 
    async authorize(credentials)
    {
        const {email, password} = credentials;
    try 
    {
        await connectMongoDB();
        const user = await User.findOne({email})

        if(!user)
            return null; 
        
        const matching = await bcrypt.compare(password, user.password);

        if(!matching)
        {
            return null;
        }
    return user;

    } 
    catch (error) 
    {
        console.log('Error: ', error);
    }
    }})],
}
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}