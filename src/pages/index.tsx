import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'

export default function Home() {

    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if(session.status === 'unauthenticated') router.push('/auth/login')
        if(session.data) console.log(session.data)
    }, [session])

    return (
        <div>
            <Head>
                <title>AlphaRLO Fitness</title>
                <meta name="viewport" content="viewport-fit=cover"></meta>
            </Head>
            <ToastContainer />
        </div>
    )
}