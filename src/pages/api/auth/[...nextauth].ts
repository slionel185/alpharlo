import type { NextAuthOptions } from 'next-auth'
import type { Adapter } from 'next-auth/adapters'

import NextAuth from 'next-auth/next'
import { PrismaAdapter } from '@auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import { env } from '@/utilities/env'
import { prisma } from '@/utilities/db'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials?.password) return null 

                const user = await prisma.user.findFirst({
                    where: {
                        email: {
                            equals: credentials?.email,
                            mode: 'insensitive'
                        }
                    }
                })

                if(user) return user
                return null
            }
        })
    ],
    callbacks: {
        async signIn({ account, profile }: any) {
            if(account?.provider === 'google') {
                return profile?.email_verified
            }
            return true
        }
    },
    pages: {
        signIn: '/auth/login'
    }
}

export default NextAuth(authOptions)