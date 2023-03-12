import geoip from "geoip-lite";
import axios from "axios";


const pleaseGiveMyDetails = async () => {
    let response = await axios({
        method: "GET",
        url: `https://ifconfig.me/all.json`
    });
    let ip = response.data.ip_addr;
    let myDetails = await geoip.lookup(ip);
    return myDetails
}

export { pleaseGiveMyDetails }