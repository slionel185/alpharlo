export default function UnderConstruction() {
    
    const EdgeChristianaLink = 'https://www.theedgefitnessclubs.com/join?club-id=8054&club-name=Christiana,%20DE&plans=Red%20-%20Bank,Fit%20-%20Bank,Total%20-%20Bank,Red%20-%20Credit,Fit%20-%20Credit,Total%20-%20Credit,Red%20MtM%20-%20Bank,Red%20MtM%20-%20Credit&red-bank-draft-plan-id=9121efb8df454d758c5d0990feb4954f&fit-bank-draft-plan-id=49636ab14a69487da5f9d67c742d9070&total-bank-draft-plan-id=11509d4188f945a499bc78f0e48b4661&red-credit-card-plan-id=6e13adad1fd04260bd74bdcab67bea9a&fit-credit-card-plan-id=45db2f53e3d24030a8c3e9e2fa7d432e&total-credit-card-plan-id=f3655078967b44538aac18a50f27b051&red-mtm-bank-draft-plan-id=f99f4fc93e554792a04c3bd913e257b3&fit-mtm-bank-draft-plan-id=&total-mtm-bank-draft-plan-id=&red-mtm-credit-card-plan-id=e02cdb4eacc14f36a7d447b7b7a90c78&fit-mtm-credit-card-plan-id=&total-mtm-credit-card-plan-id='

    return (
        <div className='h-screen hero bg-base-200'>
            <div className='hero-content text-center'>
                <div className='max-w-sm'>
                    <h1 className='text-6xl'>Alpha RLO Fitness</h1>
                    <h1 className='text-3xl'>Richard Logan</h1>
                    <p className='pt-6 text-xl'>Looking for training?</p>
                    <p className='pb-6'>Find me at The Edge Christiana!</p>
                    <button onClick={() => window.location.href = EdgeChristianaLink} className='btn btn-primary rounded-lg normal-case'>Come See Me!</button>
                </div>
            </div>
        </div>
    )
}