import geoip from "geoip-lite";
import axios from "axios";
import os from 'os';

const interfaces = os.networkInterfaces();

const localDeviceIP = async () => {
    for (const iface of Object.values(interfaces)) {
      for (const alias of iface) {
        if (alias.family === 'IPv4' && !alias.internal) {
        //   console.log(alias.address);
            return alias.address;
        }
      }
    }
    
}

const pleaseGiveMyDetails = async () => {
    let response = await axios({
        method: "GET",
        url: `https://ifconfig.me/all.json`
    });
    let ip = response.data.ip_addr;
    let myDetails = await geoip.lookup(ip);
    let deviceLocalIP = await localDeviceIP()
    return {
        ...myDetails ,
        ip : response.data.ip_addr, 
        deviceLocalIP : deviceLocalIP
    }
}

export default pleaseGiveMyDetails 