import React, { useContext, useEffect, useState } from "react";
import '../css/mockmint.css'
import UserContext from "../ContexProvider";
import { mintNFT } from "../utils/wallet";
import Mintednftbox from "../components/mintednftbox/Mintednftbox";
import MintednftOther from "../components/mintednftbox/MintednftOther";
import { uploadToIpfs } from "../utils/upload";
import {Link} from 'react-router-dom'

export default function Mintnft() {
  const [toggle, setToggle] = useState("own")
  const { useraddress } = useContext(UserContext)
  const [loading, setloading] = useState(false)
  const [upload, setuploading] = useState(true)



  const submitforOther = async (e) => {
    setloading(true)
    e.preventDefault();
    const name = e.target.title.value
    const image = e.target.image.files[0]
    const description = e.target.desc.value
    const symbol = e.target.symbol.value
    const address = e.target.address.value
    var ipfs = await uploadToIpfs(name, description,symbol, image)
    if (ipfs != undefined) {
      setloading(false)
    }
    const res = await mintNFT(address, ipfs)
    setuploading(true)
    console.log(res)
    e.target.reset();
  }



  const submitforOwn = async (e) => {
    e.preventDefault();
    const name = e.target.title.value
    const image = e.target.image.files[0]
    const description = e.target.desc.value
    const symbol = e.target.symbol.value
    const address = useraddress
    setloading(true)
    var ipfs = await uploadToIpfs(name, description,symbol, image)
    if (ipfs != undefined) {
      setloading(false)
    }
    const res = await mintNFT(address, ipfs)
    console.log(res)
  }



  return (
    <div>
      <div className="outer-box5">
        <div className="owner-toggle" >


          {toggle == "own" ?
            (<><button id="other-mint" onClick={() => setToggle("other")}>Toggle to Mint NFT in Other address</button>
              <Mintednftbox setupload={upload} submit={submitforOwn} />
            </>) :

            (
              <>
                <button id="self-mint" onClick={() => setToggle("own")}>Toggle to Mint NFT in Same address</button>
                <MintednftOther setupload={upload} submit={submitforOther} />
              </>
            )}

        </div>

        {
          !loading ? "" : (
            <div className="block-ui-container">
              <div className="block-ui-overlay" />
              <div className="block-ui-message-container">
                <div className="block-ui-message">
                  <h4>Uploading to IPFS..</h4>
                  <div className="loading-indicator">
                    <svg id="indicator" viewBox="0 0 100 100">
                      <circle id="circle" cx="50" cy="50" r="45" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <Link to="/multimint"  type="submit" style={{position:"absolute",width:"200px", left:"20%",bottom:"10px",textDecoration:"none",fontSize:"1.5vw"}} className="mint-btn"> &rarr; Mint Multiple</Link>


    </div >
  )
}
