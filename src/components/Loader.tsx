export default function Loader({ size }: { size: 'SCREEN' | 'DIV' | 'STD' }) {
    if(size === 'SCREEN') return (
        <div className='h-screen flex justify-center items-center'>
            <span className='loading text-primary loading-infinity loading-lg'></span>
        </div>
    )

    if(size === 'DIV') return (
        <div className='h-full flex justify-center items-center'>
            <span className='loading text-primary loading-infinity loading-lg'></span>
        </div>
    )

    if(size === 'STD') return (
        <span className='loading text-primary loading-infinity loading-lg'></span>
    )
}