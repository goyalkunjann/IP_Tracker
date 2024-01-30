import "./Info.css";
import { IPContext } from '../Contexts/IPContextProvider.jsx';
import { useContext, useEffect } from "react"

export default function Info() {

    const { targetedIP,setTargetedIP,ipDetails,setIpDetails,GetIPDetails } = useContext(IPContext);

    useEffect(() => {
        if (targetedIP != ""){
            GetIPDetails(targetedIP);
        }
    }, [targetedIP])

    return (
        <div className="info">
            <div className="info-container">
                <div className="info-item">
                    <div className="info-item-title">
                        IP Address
                    </div>
                    <div className="info-item-result">
                        {ipDetails?.ip}
                    </div>
                </div>
                <div className="line"></div>
                <div className="info-item">
                    <div className="info-item-title">
                        Location
                    </div>
                    <div className="info-item-result">
                        {ipDetails?.location.region}, {ipDetails?.location.country}
                    </div>
                </div>
                <div className="line"></div>

                <div className="info-item">
                    <div className="info-item-title">
                        Timezone
                    </div>
                    <div className="info-item-result">
                        UTC {ipDetails?.location.timezone}
                    </div>
                </div>
                <div className="line"></div>

                <div className="info-item">
                    <div className="info-item-title">
                        ISP
                    </div>
                    <div className="info-item-result">
                        {ipDetails?.isp}
                    </div>
                </div>
            </div>
        </div>
    )
}
