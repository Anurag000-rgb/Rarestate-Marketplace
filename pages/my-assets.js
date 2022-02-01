import {ethers} from 'ethers';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Web3Modal from "web3modal";
import { useRouter } from 'next/router'
import {useMoralis} from "react-moralis"
import Login from "./login"

import {
    nftaddress, nftmarketaddress
  } from '../config'
  
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

export default function MyAsserts() {
    //const [reSaledNfts, setReSaledNfts] = useState([]);
    //const [resalePrice, setResalePrice] = useState({price: ''});
    const { authenticate, isAuthenticated, user, Moralis } = useMoralis();

    const [nfts, setNfts] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')
  
    useEffect(() => {
      loadMyNFTs();
    }, []);
  
    async function loadMyNFTs() {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner()
      const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
      const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
      const data = await marketContract.fetchMyNFTs();
      console.log(data);
      const items = await Promise.all(data.map(async i => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId)
        console.log(i.tokenId);
        const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
          price,
          meta: tokenUri,
          itemId: i.itemId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.NFTname,
          description: meta.data.Description,
          address: meta.data.Address,
          zipcode: meta.data.Zipcode
        }
        return item
      }))
      setNfts(items)
      setLoadingState('loaded');
    };

      async function createResale(nft) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        //console.log(provider);
        const price = ethers.utils.parseUnits(resalePrice.price, 'ether')
        const signer = provider.getSigner();
        const user = await signer.getAddress();
        const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
        const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
        //const tokenID = await tokenContract.tokenURI(nft.itemId)
        let listingPrice = await contract.getListingPrice()
        listingPrice = listingPrice.toString()
        console.log(nft.tokenId)
        console.log(nft.itemId)
        const transaction = await contract.addToMarketAgain(nftaddress, nft.itemId, price, {
          value: listingPrice
        })
        await transaction.wait();
        loadMyNFTs();

        //router.push('/')
      }
    
  
   
  
    if(loadingState === 'loaded' && !nfts.length) return (
      <h1 className="px-20 py-10 text-3xl">No Assets Available</h1>
    )
  
    return (
      <div>
      {isAuthenticated ? (
      <div className="flex justify-center ">
      <div className="px-4 py-3" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-32 ">
          {
            nfts.map((nft, i) => (
             
              <div key={i} className="border shadow rounded-xl overflow-hidden bg-gradient-to-r from-purple-100 to-pink-100">
                <img className= "p-4"src={nft.image} />
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{nft.description}</p>
                    <p className="text-gray-400">{nft.address}</p>
                    <p className="text-gray-400">{nft.zipcode}</p>
                  </div>
                </div>
              
      
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{nft.price} AVAX</p>
                  <a className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-28 rounded" href={nft.meta}>Download</a>
                </div>
              </div>
              
            
            ))
          }
        </div>
      </div>
      </div>
      ) : (
        <Login/>
      )}
         </div>
    )
}
  

  


