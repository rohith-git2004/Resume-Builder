import { Box,Paper } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";
import { IoArrowBackCircle } from "react-icons/io5";
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI';


function History() {

  const [allHistory,setAllHistory] = useState([])
  console.log(allHistory);
  useEffect(()=>{
    getHistory()
  },[])
  const getHistory = async ()=>{
  try {
    const result = await getHistoryAPI()
    if (result.status==200){
      setAllHistory(result.data)
    }
  } catch (err) {
    console.log(err);
    
  }
  }

  const deleteHistory = async (id)=>{
    try {
      await removeHistoryAPI(id)
      getHistory()
    } catch (err) {
      console.log(err);
      
    }
  }
  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link to={'/Resume'} className='float-end me-5' style={{marginTop:'-80px'}}><IoArrowBackCircle className='me-1' />Back</Link>
        <Box component="section" className='container-fluid'>
          <div className="row">
            {
              allHistory.length>0?
              allHistory?.map(item=>(
                <div key={item?.id} className="col-md-4">
                <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Review At: {item?.timeStamp}, 9:28:21 AM</h6>
                    <button onClick={()=>deleteHistory(item?.id)} className='btn text-danger fs-5'><MdDeleteForever /></button>
                  </div>
                  <div className="border rounded p-3">
                    <img className='img-fluid' width={'200px'} height={'200px'} src={item?.resumeImg} alt="" />
                  </div>
                </Paper>
              </div>
              ))
              :
              <p>No resumes are downloaded yet!!!</p>
            }
          </div>
        </Box>
    </div>
  )
}

export default History