import '../styles/globals.css'
import Link from 'next/link'
import {MoralisProvider} from 'react-moralis'
function MyApp({ Component, pageProps }) {
  return(
    
    <div>
      <MoralisProvider appId='KfL79qAhALKn6pc2JXnZmc6gdkJLpijOVJjHwKZc' 
      serverUrl="https://2zinzaq7qxtl.usemoralis.com:2053/server" >
      <nav className="border-b p-1 bg-center bg-cover	fixed w-full z-50 bg-black">
        <div className="">
        <p className="text-4xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 opacity-1">Rarestate Marketplace</p>
        </div>
        <div>
        <Link href="/wallet">
            <a className='mr-6 text-pink-500 bg-white p-4 mx-20'>
              Wallet Balance
            </a>
        </Link>
        </div>
        <div className="flex mt-4 justify-center items-center text-center">
          <Link href="/">
            <a className='mr-6 text-pink-500'>
              Home
            </a>
          </Link>
          <Link href="/create-NFT">
            <a className='mr-6 text-pink-500'>
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className='mr-6 text-pink-500'>
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className='mr-6 text-pink-500'>
              Creator Dashboard
            </a>
          </Link>
          <Link href="/lottery">
            <a className='mr-6 text-pink-500'>
              Lottery
            </a>
          </Link>
          <Link href="/broker">
            <a className='mr-6 text-pink-500'>
              Broker
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
      </MoralisProvider>
    </div>
  )
}

export default MyApp
