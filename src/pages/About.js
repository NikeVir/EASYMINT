import React from "react"
import '../css/about2.css'
import { Link } from 'react-router-dom';
import behance from '../assets/behance.png';
import twitter from '../assets/twitter.png';
import dribble from '../assets/dribble.png';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';


function About() {
    return (
        <div>
            <div className="left">
                <div className="box">
                    <p>About US</p>
                </div>
                <div className="textabout">
                We are a group of 3 highly enthusiastic developers built "EasyMint" - A Seamless NFT minting platform on Tezos. Using React as front-end, the web app is highly responsive and smooth to mint.
Features such as Multiple NFTs minting and NFT minting to other address are implemented and fully operational, Many more exciting features will be added soon.
                </div>
                <div className="social-icons"><a href="https://twitter.com/EasyMint001" target="_blank" className="social-link twitter-link "><img src={twitter} width={36} height={36} alt="" /></a>
                    <a href="https://www.facebook.com/Easy-mint-102723372554502" target="_blank" className="social-link facebook-link "><img src={fb}width={36} height={36} alt="" /></a>
                    <a href="https://www.instagram.com/easymint001/" target="_blank" className="social-link instagram-link "><img src={insta} width={36} height={36} alt="" /></a>
                    <a href="https://dribbble.com/Easymint" target="_blank" className="social-link dribble-link "><img src={dribble} width={36} height={36} alt="" /></a>
                    <a href="https://www.behance.net/easymint" target="_blank" className="social-link behance-link"><img src={behance} width={36} height={36} alt="" /></a>
                </div>

            </div>
        </div>
    )
}

export default About;