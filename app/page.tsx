export default function Home() {
    return (
        <div className="flex flex-col justify-content items-center">
            <div className="min-h-80 md:min-h-screen flex flex-col justify-center items-center bg-cover bg-center rounded-md mt-16 w-full" style={{ backgroundImage: "url('/IMG_2607.jpg')" }}>
                <div className="flex flex-col justify-center items-center w-3/4 sm:w-1/2 aspect-square border border-*-4 border-white bg-black bg-opacity-30">
                    <h1 className="text-white text-3xl md:text-3xl lg:text-4xl">Betting on </h1>
                    <h1 className="text-white text-3xl md:text-3xl lg:text-4xl">Climate change</h1>
                </div>
            </div>
            <div className="flex flex-col justify-start w-full mt-4">
                <p className="text-xl text-gray-600 px-4 mb-4">
                Our Climate Bet is a new type of betting app that allows you to learn about climate change and raise awareness about climate change by betting points on climate change questions. Are you now clear on your own position you take on climate change? And do you have the data and information to back it up?
                </p>
                <p className="text-xl text-gray-600 px-4 mb-4">
                How much is global warming affecting your area? 
                Bet your predictions in points on the questions posed each day!
                    <br />
                    <span className='text-sm text-gray-400'>
                        e.g.) Will your area see its highest daily precipitation this summer to date?
                        <br />e.g.) Globally, will average temperatures increase over the next week compared to average of the past 10 years?
                    </span>
                </p>
            </div>
            <h3 className="text-xl font-bold mb-4">My favor</h3>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center w-full">
                <div className="flex flex-col justify-start items-center bg-gray-600 m-4 w-3/4 sm:w-1/3 aspect-video p-2">
                    <p className="text-5xl mb-1">🌱</p>
                    <p className="text-white text-lg">The only member (me!) is an ecology major; since I am not a CS major, I&apos;m always open to all sorts of advice and help with development.</p>
                </div>
                <div className="flex flex-col justify-start items-center bg-gray-600 m-4 w-3/4 sm:w-1/3 aspect-video p-2">
                    <p className="text-5xl mb-1">🤑</p>
                    <p className="text-white text-lg"><span className="line-through">Since I&apos;m unable to develop a payment function, </span>I&apos;m distributing 1000 pts to those who register now. Please play as a test user!</p>
                </div>
                <div className="flex flex-col justify-start items-center bg-gray-600 m-4 w-3/4 sm:w-1/3 aspect-video p-2">
                    <p className="text-5xl mb-1">☕️</p>
                    <p className="text-white text-lg">I&apos;m plannning to send gift cards to those who play as a test user and win the game.</p>
                </div>
            </div>
            <div className="flex flex-col justify-start w-full mt-4">
                <p className="text-xl text-gray-600 px-4 mb-4">
                Are you interested in this new game? Now it&apos;s your turn to experience it!
                </p>
                <p className="text-xl text-gray-600 px-4 mb-4">
                Come on, let&apos;s start the adventure together!
                </p>
            </div>

        </div>
    );
}