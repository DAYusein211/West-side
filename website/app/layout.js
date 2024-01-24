'use client'
import './globals.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineSolution } from 'react-icons/ai';
import { AuthProvider } from './providers'

import Link from 'next/link';

export default function RootLayout({ children }) 
{

  return (
    <html>
      <body className='h-screen overflow-hidden bg-[#E1E7F5]'>

      <nav className=' absolute flex flex-col text-blue-400  right-[20px] top-[10vw] items-center space-y-5 z-20 border-[1px] border-blue-400  border-opacity-50 px-[5px] py-[3vw] rounded-[5px]'>
        <Link href = '/account' className='opacity-50 hover:opacity-100 duration-200 h-fit w-fit p-2'><AiOutlineUser size={25}/></Link>
        <Link href = '/' className='opacity-50 hover:opacity-100 duration-200 h-fit w-fit p-2'><AiOutlineHome size={25}/></Link>
        <Link href = '/will' className='opacity-50 hover:opacity-100 duration-200 h-fit w-fit p-2'><AiOutlineSolution size={25}/></Link>        
      </nav>
  
      
      <AuthProvider>{children}</AuthProvider>
        </body>
    </html>
  )
}