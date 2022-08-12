import React, { useContext, useState,useEffect } from 'react'
import '../css/nftdetailcss.css'
import UserContext from '../ContexProvider'

import { Link,useParams} from 'react-router-dom';
import axios from 'axios';

export default function Nftdetails() {
    // const { viewItem } = useContext(UserContext);

    const [resdata,setresdata] = useState([])
    const {id} = useParams();
    const [loading, setLoading] = useState("true");

    useEffect(() => {
        const loadData = async () => {
                const res = await axios.get(`https://api.jakartanet.tzkt.io/v1/tokens/balances?id=${id}`)
                setresdata(res.data)
                console.log(res.data)
                setLoading("false");
        }
        loadData();
    }, [])
    return (
        <>
        {
                loading  == "false" ? (
                <div itemID="NftDetail_outer1">
                    <div className="NftDetail_left">
                        <div className="NftDetail_f">
                            <div className="NftDetail_grid-item">
                                <div className="NftDetail_item-style">
                                    <div className="thumb">
                                    <img style={{ maxHeight: "336px", minHeight: "166px" }}src={`https://ipfs.io/ipfs/${resdata[0].token.metadata.thumbnailUri.split("ipfs://")[1]
                                                }`} className="NftDetail_image-avatar" alt="" />
                                    </div>

                                    <div className="NftDetail_content">
                                        <h3 className="NftDetail_title">
                                            <a href="#">{resdata[0].token.metadata.name}</a>
                                        </h3>

                                        <div className="NftDetail_profile d-flex-center">
                                            <a href="#">
                                                <img src="uthor.jpg" className="NftDetail_image-avatar" alt="" />
                                            </a>
                             
                                            <i className="NftDetail_r"></i>
                                        </div>


                                    </div>
                                </div>

                                <div className="NftDetail_empty1"></div>
                            </div>

                            <div className="NftDetail_right1">
                                <section>
                                    <div className="NftDetail_container">
                                        <div className="NftDetail_background-img">
                                            <div className="NftDetail_name">{resdata[0].token.metadata.name}</div>
                                            <div className="NftDetail_hash">{resdata[0].token.metadata.tokenId}</div>
                                            <div className="NftDetail_box">
                                                <div className="NftDetail_content">

                                                    <div className="NftDetail_con" >
                                                        <div className="NftDetail_head">
                                                            <h1 >{resdata[0].token.metadata.name}</h1>
                                                            <h2 >{resdata[0].token.metadata.tokenId}</h2>
                                                        </div>
                                                        <p><a >{resdata[0].token.contract.address}</a></p>
                                                        <p><a>{resdata[0].token.metadata.image}</a></p>
                                                        <p><a>{resdata[0].token.metadata.description}</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="NftDetail_buttons-section1" >
                                        <Link to='/' className="NftDetail_button1" role="button">Back Home</Link>
                                        <button  className="NftDetail_button1" role="button"><a style={{textDecoration:"none",color:"green",fontSize:"18px"}} target="_blank" href={`https://jakartanet.tzkt.io/KT1XSqpRQUqubwJwdjRFduYwKa3vXAqBssxU/tokens/${resdata[0].token.tokenId}/transfers`}>View on tzkt</a></button>

                                    </div>
                                </section>


                            </div>
                        </div>
                    </div>
                </div>) : <h1>loading .......</h1>
        }
        </>

    )
}
