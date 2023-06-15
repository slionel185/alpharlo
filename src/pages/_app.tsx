import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css'

import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'

import { trpc } from '@/utilities/trpc'
import { ToastContainer } from 'react-toastify'

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <ToastContainer position='bottom-right' theme='dark' />
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)