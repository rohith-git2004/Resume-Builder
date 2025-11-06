//server connection request

import axios from "axios";

const commonAPI = async(url,httpMthod,reqBody)=>{
    const requestConfig={
    url,
    method:httpMthod,
    data:reqBody
    }

    // api call
    return await axios(requestConfig).then(res=>res).catch(err=>err)
}

export default commonAPI