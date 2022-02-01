import react,{useState, useEffect} from 'react';
import login from "./login"
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import {useMoralis} from "react-moralis";
import Styles from "../styles/CreateNFT.module.css";
import { NFTStorage, Blob } from "nft.storage";
import { useRouter } from 'next/router';
//import { CIDString, StatusResult } from "nft.storage/dist/src/lib/interface";
import {
  nftaddress, nftmarketaddress
} from '../config'


import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'



const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlkNzRjN2VkODdhMTdmQTgyMjVERkEzOTE0YmMxZjI2MzJDMDdBMDciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MTY1MDY4NjY5NywibmFtZSI6Ik5GVG1hcmtldHBsYWNlLVBvbHlnb24tcHJvamVjdCJ9.jUqwU9d0esz_wnOiTmCaXmv3tvP1F5BW-B98bNYPcKk"
const client = new NFTStorage({token: API_TOKEN})

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlkNzRjN2VkODdhMTdmQTgyMjVERkEzOTE0YmMxZjI2MzJDMDdBMDciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0MzU0NzMyNTAxOSwibmFtZSI6IlJhcmVzdGF0ZS1LZXkifQ.dY3rUp1nRgCV1KsGyIL5eAodx_z6lRvc9wW4-Ysotxw"
const client1 = new NFTStorage({token: TOKEN});


export default function CreateNFTs(){

  const [formInput, updateFormInput] = useState({ Price: "", NFTname: "", Ownername: "", Address: "", Zipcode: "", Description: "", PhoneNo: "", Email: ""});
  const [fileUrl, setFileUrl] = useState(null);
  const [front, setFront] = useState(null);
  const [back,setBack] = useState(null);
  const [video,setVideo] = useState(null);
  const [dl, setDl] = useState(null);
  const [nftPhoto, setNftPhoto] = useState(null);
  const [qrcode, setQRcode] = useState(null);
  const [ec, setEc] = useState(null);
  const [registation, setRegistation] = useState(null);
  const [tax, setTax] = useState(null);
  const [transfer, setTransfer] = useState(null);
  const router = useRouter(null);


    async function onChange_front(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setFront(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_back(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setBack(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_video(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setVideo(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_Dl(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setDl(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_NFTphoto(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setNftPhoto(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_QRcode(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setQRcode(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_EC(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setEc(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_Reg(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setRegistation(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_Tax(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setTax(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_Transfer(e) {
      const files = e.target.files[0];
      try{
          const cid = await client.storeBlob(new Blob([files]));
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(cid);
          console.log(files);
          setTransfer(url);
      } catch(e){
        console.log(e.message);
      }
    }
    async function onChange_multipleFiles(e) {
      const files = e.target.files;
      try{
          for(let i=0; i<files.length; i++){
            const file = await files[i].name;
            console.log(file);

          }
          const cid = await client.storeDirectory(files);
          const query = await client.status(cid);
          const url = `https://${cid}.ipfs.dweb.link`
          console.log(url);
          console.log(query)
          console.log(cid);
          console.log(files);
          setFileUrl(url);
      } catch(e){
        console.log(e.message);
      }
    }  

    async function createItem() {
      const { NFTname, Description, Ownername, Email, Address, PhoneNo, Zipcode, Price } = formInput
      if (!NFTname || !Description || !Zipcode || !Address || !Price || !Ownername  || !Email || !PhoneNo  || !fileUrl || !front || !back
        || !dl || !nftPhoto || !ec || !registation || !tax || !transfer) return

      const data = JSON.stringify({
        NFTname, Ownername, Description, Email, PhoneNo, Address, images: fileUrl, aadharFront: front, aadharBack: back,
        video: video, drivingLicense: dl, image: nftPhoto, qrcode: qrcode, encumbranceCertificate: ec, landRegistration: registation,
        landTax: tax, landTransferPaper: transfer
      })
      try {
        const cid = await client1.storeBlob(new Blob([data]));
        //const status = await client.status(added);
        //console.log(status);
        const url = `https://${cid}.ipfs.dweb.link`
        console.log(url);
        /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
        createMarketSale(url)
      } catch (error) {
        console.log('Error uploading file: ', error)
      } 
    }

    async function createMarketSale(url) {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)    
        const signer = provider.getSigner()
        let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
        let transaction = await contract.createToken(url)
        let tx = await transaction.wait()
        let event = tx.events[0]
        let value = event.args[2]
        let tokenId = value.toNumber()
        console.log(tokenId);
        const price = ethers.utils.parseUnits(formInput.Price, 'ether')
      
        contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
        let listingPrice = await contract.getListingPrice()
        listingPrice = listingPrice.toString()
    
        transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
        await transaction.wait()
        router.push('/')
      }

      return (
        <div className="flex justify-center pb-10">
          <div className="w-1/2 flex flex-col pb-12 mt-40 rounded shadow-xl bg-gradient-to-r from-purple-100 to-pink-100 p-4 z-0">
            <div className={Styles.bg}>
            <h1 className={Styles.title}>Add Your Land To Rarestate Marketplace</h1>
            </div>
            <input 
              placeholder="Land or House Plot Number"
              className="mt-8 border rounded p-4 bg-gray-100 border-black"
              onChange={e => updateFormInput({ ...formInput, NFTname: e.target.value })}
            />
            <input 
              placeholder="Name of Owner"
              className="mt-2 border rounded p-4 bg-gray-100 border-black"
              onChange={e => updateFormInput({ ...formInput, Ownername: e.target.value })}
            />
            <input 
              placeholder="Address Of Land"
              className="mt-2 border rounded p-4 bg-gray-100 border-black"
              onChange={e => updateFormInput({ ...formInput, Address: e.target.value })}
            />
             <input 
              placeholder="Zipcode"
              className="mt-2 border rounded p-4 bg-gray-100 border-black"
              onChange={e => updateFormInput({ ...formInput, Zipcode: e.target.value })}
            />
          

            <textarea
              placeholder="Land or House Description"
              className="mt-2 border rounded p-4 bg-gray-100 border-black"
              onChange={e => updateFormInput({ ...formInput, Description: e.target.value })}
            />
            <div className="flex flex-col justify-evenly">
            <input
              placeholder="Land Price in AVAX"
              className="mt-2 border rounded p-4 bg-gray-100 border-black"
              onChange={e => updateFormInput({ ...formInput, Price: e.target.value })}
            />
            <input 
              placeholder="Phone Number"
              type="tel"
              className="mt-2 border rounded p-4 bg-gray-100 border-black"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={e => updateFormInput({ ...formInput, PhoneNo: e.target.value })}
            />
            <input 
              placeholder="Email"
              type="email"
              className="mt-2 border rounded p-4 bg-gray-100 border-black"
              onChange={e => updateFormInput({ ...formInput, Email: e.target.value })}
            />
            </div>
            <div className="flex flex-row justify-evenly mt-2">
            <p className={Styles.paragraph}>Aadhar Card Front</p>
            <p className={Styles.paragraph}>Aadhar Card Back</p>
            </div>
            <div className="flex flex-row justify-evenly">
            <input
              type="file"
              name="AadharFront"
              className="my-4"
              onChange={onChange_front}
            />
            {
              front && (
                <img className="rounded mt-4 mb-4" width="200" src={front} />
              )
            }
            <input
              type="file"
              name="AadharBack"
              className="my-4"
              onChange={onChange_back}
            />
            {
              back && (
                <img className="rounded mt-4" width="200" src={back} />
              )
            }
            </div>
            <div className="flex flex-row justify-evenly mt-2">
            <p className={Styles.paragraph}>Driving Licence</p>
            <p className={Styles.paragraph}>Plot on google earth QRCode</p>
            <p className={Styles.paragraph}>House or Land Images Max 10 images</p>
            </div>
            <div className="flex flex-row justify-evenly">
            <input
              type="file"
              name="DL"
              className="my-4"
              onChange={onChange_Dl}
            />
            {
              dl && (
                <img className="rounded mt-4 mb-4" width="200" src={dl} />
              )
            }
            <input
              type="file"
              name="QRcode"
              className="my-4"
              multiple
              onChange={onChange_QRcode}
            />
            {
              qrcode && (
                <img className="rounded mt-4 mb-4" width="200" src={qrcode} />
              )
            }
            <input
              type="file"
              name="landImages"
              className="my-4"
              multiple
              onChange={onChange_multipleFiles}
            />
            {
              fileUrl && (
                <a href={fileUrl}>File URL</a>
              )
            }
            </div>
            <div className="flex flex-row justify-evenly mt-2">
            <p className={Styles.paragraph}>NFT Front Image</p>
            <p className={Styles.paragraph}>Land or House Video(Min Size 10mb)</p>
            <p className={Styles.paragraph}>Original encumbrance certificate PDF</p>
            </div>
            <div className="flex flex-row justify-evenly">
            <input
              type="file"
              name="NFTImage"
              className="my-4"
              onChange={onChange_NFTphoto}
            />
            {
              nftPhoto && (
                <img className="rounded mt-4 mb-4" width="200" src={nftPhoto} />
              )
            }

            <input
              type="file"
              name="Video"
              className="my-4"
              onChange={onChange_video}
            />
            {
              video && (
                <video className="rounded mt-4 mb-4" width="200" looper src={video} />
              )
            }
            <input
              type="file"
              name="EC"
              className="my-4"
              onChange={onChange_EC}
            />
             {
              ec  && (
                <a href={ec}>Registration PDF</a>
              )

            }

            

            </div>
            <div className="flex flex-row justify-evenly mt-2">
            <p className={Styles.paragraph}>Original Land Registration PDF</p>
            <p className={Styles.paragraph}>Original Land Tax Payment Recipt PDF</p>
            <p className={Styles.paragraph}>Original Land Transfer Paper PDF</p>

            </div>
            <div className="flex flex-row justify-evenly">
            <input
              type="file"
              name="RegistrationPaper"
              className="my-4"
              onChange={onChange_Reg}
            />
            {
              registation  && (
                <a href={registation}>Registration PDF</a>
              )

            }

            <input
              type="file"
              name="Tax"
              className="my-4"
              onChange={onChange_Tax}
            />
            {
              tax  && (
                <a href={tax}>Tax PDF</a>
              )

            }

            <input
              type="file"
              name="TransferPaper"
              className="my-4"
              onChange={onChange_Transfer}
            />
            {
              transfer  && (
                <a href={transfer}>Transfer PDF</a>
              )

            }

            </div>
            
            <button onClick={createItem} className="font-bold mt-4 bg-pink-500 hover:bg-white text-white hover:text-black rounded p-4 shadow-lg">
              Add To Rarestate Marketplace
            </button>
          </div>
        </div>
    )
}