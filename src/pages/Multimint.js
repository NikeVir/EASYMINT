import React, { useContext, useEffect, useState } from "react";
import "../css/multimint.css";
import { Container } from "react-bootstrap";
import UserContext from "../ContexProvider";
import { mulmintNFT } from "../utils/wallet";
import { uploadToIpfs } from "../utils/upload";

export default function Multimint() {
  const {useraddress} = useContext(UserContext)
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formdata, setFormdata] = useState([
    {name: "", symbol: "", desc: "" },
  ]);


  const handleFormChange = (index, event) => {
    let data = [...formdata];
    data[index][event.target.name] = event.target.value;
    setFormdata(data);
  };
  const addFields = () => {
    let newfield = { image: [], name: "", symbol: "", desc: "" };
    setFormdata([...formdata, newfield]);
  };

  const submit = async(e) => {
    e.preventDefault();
    console.log(formdata);
    var ipfs =[]
    for(var i=0;i<formdata.length;i++){
      const res = await uploadToIpfs(formdata[i].name,formdata[i].desc,formdata[i].symbol,formdata[i].undefined.file)
      ipfs[i] =res;
    }
    console.log(ipfs)
    const op = await mulmintNFT(useraddress,ipfs)
    console.log(op)
  };

  var loadFile =(index, event) =>{
    let data = [...formdata];
    var res = URL.createObjectURL(event.target.files[0]);
    
    data[index][event.target.image] = {
      file:event.target.files[0]
    };
    setFormdata(data);
   
  }

  return (
    <Container className="multimint">
      <div className="container">
        {formdata.map((input, index) => (
          <form  onSubmit={submit} key={index} className="multimint_form">
            
            <div className="row">
              <div className="col-25">
                <label for="fname">Upload Image</label>
              </div>
              <div className="col-75">
              <input
              type="file"
              accept="image/*"
              name="image"
              required
              value={input.image}
              onChange={(event) => {
                loadFile(index,event);
              }}
            />
            {!formdata[index].undefined?<p>no file uploaded</p>:<p>{formdata[index].undefined.file.name}</p>}

     
              </div>
            </div>

           
            <div className="row">
              <div className="col-25">
                <label for="fname">NFT NAME</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="fname"
                  value={input.name}
                  onChange={(event) => handleFormChange(index, event)}
                  name="name"
                  placeholder="Your NFT name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="lname">Symbol</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  value={input.symbol}
                  onChange={(event) => handleFormChange(index, event)}
                  id="lname"
                  name="symbol"
                  placeholder="NFT Symbol name.."
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label for="subject">Description</label>
              </div>
              <div className="col-75">
                <textarea
                  id="subject"
                  name="desc"
                  value={input.desc}
                  onChange={(event) => handleFormChange(index, event)}
                  placeholder="Write something.."
                  style={{ height: "200px" }}
                ></textarea>
              </div>
            </div>
           
          </form>
          
        ))}
        <button style={{background:"#1e8098",color:"white",margin:"10px", padding:"10px 25px",borderRadius:"3px",border:"none"}} onClick={addFields}>+ Add</button>
         <div className="row">
              <input style={{background:"#1e8098"}} type="submit" onClick={submit} value="Submit" />
            </div>
      </div>
    </Container>
  );
}
