import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// resume add api - called by userInputs, when finish btn clicked
export const addResumeAPI = async (resume)=>{
    return await commonAPI (`${serverURL}/resume`,"POST",resume)
}
//get resume api - called from viewResume, when page loaded()
export const getResumeAPI = async (id)=>{
    return await commonAPI(`${serverURL}/resume/${id}`,"GET",{})
}
//resume update api
export const updateResumeAPI = async (id,resume)=>{
    return await commonAPI(`${serverURL}/resume/${id}`,"PUT",{})
}
//add history api
//get history api
//remove history api

