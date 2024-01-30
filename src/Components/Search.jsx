import "./Search.css"
import Arrow from "../assets/images/icon-arrow.svg"
import { useEffect } from "react"
import { IPContext } from '../Contexts/IPContextProvider.jsx';
import { useContext } from "react";
import { useState } from "react";

export default function Search() {

    const { ip,setIp,targetedIP,setTargetedIP,ipDetails,setIpDetails,GetIPDetails } = useContext(IPContext);
    const [inputIp,setInputIp] = useState("")

    useEffect(() => {
        if (ip == ""){
            setIp(clientIp)
            setInputIp(clientIp)
            setTargetedIP(clientIp)
        }
    },[])

    const onTextChange = (e) => {
        setInputIp(e.target.value)
    }

    const SearchIp = (e) => {
        e.preventDefault();
        setTargetedIP(inputIp)
    }

    return (
        <div className="search">
            <div className="search-container">
                <div className="search-title">
                    IP Address Tracker
                </div>
                <form className="search-input-container" onSubmit={SearchIp}>
                    <input type="text" value={inputIp} onChange={onTextChange} className="search-input" placeholder="Search for any IP address or domain"/>
                    <button formAction="submit" className="search-arrow-container">
                        <img src={Arrow} alt="arrow" className="search-arrow" />
                    </button>
                </form>
            </div>
        </div>
    )
}
