import React, { useContext } from "react";
import '../css/home.css'
import { getPKH, connectWallet, disconnectWallet } from "../utils/wallet";
import { Link } from 'react-router-dom';
import UserContext from "../ContexProvider";

function Home() {

    const { useraddress, setUseraddress } = useContext(UserContext);

    const Onconnect = async () => {
        await connectWallet();
        const address = await getPKH();
        setUseraddress(address);
    }

    const onDisconnect = async () => {
        await disconnectWallet();
        setUseraddress("");
    }

    return (
        <>
            <div className="home_light home_x1" />
            <div className="home_light home_x2" />
            <div className="home_light home_x3" />
            <div className="home_light home_x4" />
            <div className="home_light home_x5" />
            <div className="home_light home_x6" />
            <div className="home_light home_x7" />
            <div className="home_light home_x8" />
            <div className="home_light home_x9" />
            <div className="home_container">
                <div className="home_displaycontent">
                    <h2>EasyMint NFTs on Tezos Blockchain</h2>
                    <h2>EasyMint NFTs on Tezos Blockchain</h2>
                </div>
                <div className="xxx">

                    {
                        useraddress == '' ? <button id="connect-wallet" onClick={Onconnect}>Connect wallet</button> : (
                            <button id="disconnect-wallet" onClick={onDisconnect}>&#128279; Disconnect Wallet</button>
                        )
                    }


                </div>

                <Link to='/mint'><button id="mint-nft-home-btn">Mint NFT</button></Link>
            </div>


        </>
    )
}

export default Home;