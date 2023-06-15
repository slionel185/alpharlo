import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

export default function Dashbord() {

    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if(session.status === 'unauthenticated') router.push('/auth/login')
    })

    return (
        <div className='h-screen flex flex-col bg-base-100'>
            <button className='btn btn-primary' onClick={() => signOut()}>Bye</button>
        </div>
    )
}