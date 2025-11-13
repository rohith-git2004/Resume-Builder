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
    return await commonAPI(`${serverURL}/resume/${id}`,"PUT",resume)
}
//add history api
export const addHistoryAPI = async (history)=>{
    return await commonAPI(`${serverURL}/history`,"POST",history)
}
//get history api
export const getHistoryAPI = async ()=>{
    return await commonAPI(`${serverURL}/history`,"GET",{})
}

//remove history api - called from history component , when page load() , inside useeffect hook

export const removeHistoryAPI = async (id)=>{
    return await commonAPI(`${serverURL}/history/${id}`,"DELETE",{})
}