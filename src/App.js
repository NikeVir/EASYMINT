import {React,useEffect,useContext} from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Viewnft from "./pages/Viewnft";
import Multimint from "./pages/Multimint";
import Mintnft from "./pages/Mintnft";
import Roadmap from './pages/Roadmap'
import About from './pages/About'
import Navigation from "./components/nav/Navigation";
import Nftdetails from "./pages/Nftdetails";
import UserContext from "./ContexProvider";
import { getPKH } from "./utils/wallet";

function App() {
  const {setUseraddress,useraddress} =useContext(UserContext)
  useEffect(()=>{
    const getaccount =async()=>{
      const res =await getPKH();
      setUseraddress(res)
    } 
    getaccount();

  },[])
  return (
    <>
      <Navigation/>
      <Routes>
          <Route path="/mint" element={<Mintnft />} />
          <Route path="/multimint" element={<Multimint />} />
          <Route path="/" element={<Home />} />
          {useraddress !=''?(

            <Route path="/viewnft" element={<Viewnft />} />
            ):""}
             {useraddress !=''?(

<Route path="/nftdetails/:id" element={<Nftdetails />} />

):""}
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />

      </Routes>
    </>
  );
}

export default App;
