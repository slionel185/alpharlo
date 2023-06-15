import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { getServerSession } from 'next-auth'
import { getProviders, signIn, useSession } from 'next-auth/react'

import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { useRouter } from 'next/router'

export default function Login({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const router = useRouter()
    const session = useSession()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if(session.status === 'authenticated') router.push('/')
    }, [session])

    const credentialSignIn = () => {
        signIn('credentials', { email, password })
    }

    return (
        <div className='hero min-h-screen bg-base-200'>
            <div className='card rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                <div className='card-body'>
                    <h1 className='my-6 w-full text-5xl text-center uppercase'>Login</h1>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>E-Mail</span>
                        </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' className='input input-bordered rounded-lg' />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' className='input input-bordered rounded-lg' />
                    </div>
                    <div className='form-control mt-6'>
                        <button onClick={credentialSignIn} className='btn btn-primary rounded-lg normal-case'>Login</button>
                    </div>
                    <div className="divider">OR</div>

                    <div className='form-control flex-row justify-center items-center'>
                        {Object.values(providers).map((provider) => {
                            if(provider.name.toLowerCase() === 'google') return (
                                <button key={provider.name} onClick={() => signIn(provider.id)} className='btn btn-primary btn-square btn-outline rounded-lg'><FcGoogle className='text-2xl' /></button>
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