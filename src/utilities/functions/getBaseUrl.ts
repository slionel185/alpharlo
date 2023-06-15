export function getBaseUrl() {
    if(typeof window !== 'undefined') return ''
    if(process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
    if(process.env.RENDER_INTERNAL_HOSTNAME) return `https://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
    return `https://localhhost:${process.env.PORT ?? 3000}`
}