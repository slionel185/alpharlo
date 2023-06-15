import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    client: {
        NEXT_PUBLIC_NODE_ENV: z.enum([ 'development', 'test', 'production' ])
    },
    server: {
        NODE_ENV: z.enum(['development', 'test', 'production']),

        NEXTAUTH_URL: z.string().url(),
        NEXTAUTH_SECRET: z.string(),

        DATABASE_URL: z.string(),

        GOOGLE_CLIENT_ID: z.string(),
        GOOGLE_CLIENT_SECRET: z.string(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,

        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    }
})