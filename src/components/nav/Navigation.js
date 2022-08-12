import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../css/navcss.css'
import { getPKH } from '../../utils/wallet' 
export default function Navigation() {
    const [profile,setProfile] = useState(false);
    useEffect(()=>{
        const getaccount=async()=>{
            const res = await getPKH();
            if(res != ''){
                setProfile(true)
            }
        }
        getaccount();
    })

    return (
        <div>
            <div className="container">
                <div className="navigation">
                    <ul className="list">
                        <span className="list-item" title="Home"> <Link to="/ ">
                            <span title="Home" className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <title>Home</title>
                                    <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                                    <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                                </svg>
                            </span>
                            <span className="text">Home</span>
                        </Link></span>
                        {
                            profile?(
                                <span className="list-item"> <Link to="/viewnft ">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <title>View NFTs</title>
                                    <path d="M432 112V96a48.14 48.14 0 00-48-48H64a48.14 48.14 0 00-48 48v256a48.14 48.14 0 0048 48h16" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={32} />
                                    <rect x={96} y={128} width={400} height={336} rx="45.99" ry="45.99" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={32} />
                                    <ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} />
                                    <path d="M342.15 372.17L255 285.78a30.93 30.93 0 00-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0141.46-1.87L496 402.91" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                                </svg>
                            </span>
                            <span className="text">View NFT</span>
                        </Link></span>
                            ):""
                        }
                       
                        <span className="list-item "> <Link to="/mint  ">
                            <span className="icon" id="mintbutton">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <title>Mint NFT</title>
                                    <path d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M216 352l96-96-96-96" />
                                </svg>
                            </span>
                            <span className="text">Mint NFT</span>
                        </Link></span>
                        <span className="list-item "> <Link to="/about ">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <title>About Us</title>
                                    <path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                                    <path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} />
                                    <path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                                    <path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} />
                                </svg>
                            </span>
                            <span className="text">About Us</span>
                        </Link></span>
                        <span className="list-item"> <Link to="/roadmap ">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <title>Roadmap</title>
                                    <circle cx={160} cy={96} r={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                                    <circle cx={160} cy={416} r={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M160 368V144" />
                                    <circle cx={352} cy={160} r={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                                    <path d="M352 208c0 128-192 48-192 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                                </svg>
                            </span>
                            <span className="text">Roadmap</span>
                        </Link></span>
                    </ul>
                </div>
            </div>
        </div>
    )
}
