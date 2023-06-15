import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FcGoogle } from 'react-icons/fc'
import { getServerSession } from 'next-auth'
import { getProviders, signIn, useSession } from 'next-auth/react'

import Loader from '@/components/Loader'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default function Register({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter()
    const sesstion = useSession()

    useEffect(() => {
        console.log(providers)
        if(sesstion.status === 'authenticated') router.push('/dashboard')
    }, [sesstion])

    if(sesstion.status === 'loading') return <Loader size='SCREEN' />

    return (
        <div className='hero h-screen lg:bg-base-200'>
            <div className='card lg:rounded-lg flex-shrink-0 w-full max-w-lg lg:shadow-2xl bg-base-100'>
                <div className='card-body'>
                    <h1 className='my-6 w-full text-5xl text-center uppercase'>Register</h1>

                    <div className='form-control mb-6'>
                        <p className='text-center'>
                            Right now we are limiting register and sign up to Google! This helps us save time so we can focus on building better features for you!
                        </p>
                    </div>

                    <div className='form-control'>
                        {Object.values(providers).map((provider) => {
                            if(provider.name.toLowerCase() === 'google') return (
                                <button key={provider.name} onClick={() => signIn(provider.id)} className='btn btn-primary lg:btn-outline rounded-lg normal-case text-2xl'>Regsiter with Google<FcGoogle /></button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions)

    if(session) {
        return { redirect: { destination: '/dashboard' }}
    }

    const providers = await getProviders()

    return {
        props: {
            providers: providers ?? []
        },
    }
}