import React, { useState, createContext } from 'react';
export const IPContext = createContext();
const IPContextProvider = (props) => {
    const [ip, setIp] = useState("")
    const [targetedIP, setTargetedIP] = useState(ip)
    const [ipDetails,setIpDetails] = useState();

    let GetIPDetails = async(ipAddress) => {
        setTargetedIP(ipAddress);
        const res = await fetch(" https://geo.ipify.org/api/v2/country?apiKey="+ import.meta.env.VITE_API_KEY + "&ipAddress=" + targetedIP)
        const data = await res.json();
        setIpDetails(data);
    }

    return (
        <IPContext.Provider value={{ 
            ip,
            setIp,
            targetedIP,
            setTargetedIP,
            ipDetails,
            setIpDetails,
            GetIPDetails
        }}>
            {props.children}
        </IPContext.Provider>
    );
}
export default IPContextProvider;