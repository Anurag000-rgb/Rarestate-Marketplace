import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';
import { nftaddress, nftmarketaddress } from '../config';
import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';
import Link from 'next/link';


export default function Home() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider('https://speedy-nodes-nyc.moralis.io/c7a77cb6a01ee65090f5609a/avalanche/testnet');
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider);
    const data = await marketContract.fetchMarketItems();
    console.log(data);
    const items = await Promise.all(data.map(async i => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId)
      const meta = await axios.get(tokenUri)
      console.log(i.seller);
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
      return item;
      console.log(i.seller);

    }))

    setNfts(items)
    setLoadingState('loaded') 
  };

  async function buyNft(nft){
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    const transaction = await contract.createMarketSale(nftaddress, nft.itemId, {
      value: price
    })
    await transaction.wait();
    loadNFTs();
  }

  if(loadingState === 'loaded' && !nfts.length) return (
    <h1 className="px-20 py-10 text-3xl">No items in Marketplace</h1>
  )

  return (

    <div className="flex justify-center ">
    <div className="px-4 py-3" style={{ maxWidth: '1600px' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-32 ">
        {
          nfts.map((nft, i) => (
           
            <div key={i} className="border shadow rounded-xl overflow-hidden bg-gradient-to-r from-purple-100 to-pink-100">
              <img className= "p-4"src={nft.image} />
              <div className="p-4">
                <p style={{ height: '70px' }} className="text-2xl font-semibold">{nft.name}</p>
                <div style={{ height: '70px', overflow: 'hidden' }}>
                  <p className="text-gray-400">{nft.description}</p>
                  <p className="text-gray-400">{nft.address}</p>
                  <p className="text-gray-400">{nft.zipcode}</p>
                </div>
              </div>
            
    
              <div className="p-4 bg-black align-bottom pb-auto">
                <div className="flex flex-row justify-evenly">
                <p className="text-2xl mr-8 mb-4 font-bold text-white">{nft.price} AVAX</p>
                <p className="text-md mb-6 font-italic text-white px-3 bg-blue-600 text-center rounded-xl">Verified</p>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-12 rounded-md pb-auto" onClick={() => buyNft(nft)}>Buy</button>
              </div>
            </div>
            
          
          ))
        }
      </div>
    </div>
  </div>
       
  )
}
