import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

import Loader from '@/components/Loader'
import CalendarWrapper from '@/components/CalendarWrapper'

export default function Dashbord() {

    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if(session.status === 'unauthenticated') router.push('/auth/login')
    })

    if(session.status === 'loading' || !session.data) return <Loader size='SCREEN' />

    return (
        <div className='flex flex-col bg-base-200'>
            <div className='navbar bg-base-100 px-10'>
                <div className='flex-1'>
                    <h1 className='btn btn-ghost normal-case text-xl rounded-lg'>Richard Logan</h1>
                </div>
                <div className='flex-none'>
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                            <div className='w-10 rounded-full'>
                                <Image src={''} alt='PFP' width={256} height={256} />
                            </div>
                        </label>
                        <ul className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg w-52'>
                            <li>
                                <button onClick={() => signOut()}>Logout</button>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
            <main className='h-screen grid grid-cols-3 grid-rows-3 justify-center items-center'>
                <CalendarWrapper />
            </main>
            <footer className='footer footer-center p-10 bg-base-100 text-base-content'>
                <div className='grid grid-flow-col gap-4 justify-center items-center'>
                    <button><FaInstagram className='text-3xl' /></button>
                    <button><FaTwitter className='text-3xl' /></button>
                    <button><FaFacebook className='text-3xl' /></button>
                </div>
                <div>
                    <p>Copyright © 2023 Titan Software All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}