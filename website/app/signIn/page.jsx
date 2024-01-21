import SignIn from '@/components/signIn';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
export default async function Home() {
  const session = await getServerSession(authOptions)
  
  return <main>

      <SignIn/>
      
        </main>
  
}
