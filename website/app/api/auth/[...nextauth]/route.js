
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth/next';
import  CredentialsProvider  from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs'

export const authOptions = {
    providers: [
    
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