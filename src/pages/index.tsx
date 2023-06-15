import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { env } from '@/utilities/env'
import UnderConstruction from '@/components/UnderConstruction'

export default function Home() {

    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if(session.status === 'authenticated') router.push('/dashboard')
    }, [session])

    if(env.NEXT_PUBLIC_NODE_ENV === 'development') return <UnderConstruction />

    return (
        <div>
            <Head>
                <title>AlphaRLO Fitness</title>
                <meta name="viewport" content="viewport-fit=cover"></meta>
            </Head>
            <div className='hero h-screen bg-base-200'>
                <div className='hero-content text-center'>
                    <div className='max-w-md'>
                        <h1 className='text-5xl font-bold'>Alpha RLO Fitness</h1>
                        <h1 className='text-4xl'>Richard Logan</h1>
                        <p className='py-6'>
                            
                        </p>
                        <button onClick={() => router.push('/auth/register')} className='btn btn-lg btn-primary rounded-lg'>register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}