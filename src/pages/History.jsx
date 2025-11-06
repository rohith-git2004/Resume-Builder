import { Box,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";
import { IoArrowBackCircle } from "react-icons/io5";


function History() {
  return (
    <div>
      <h1 className="text-center my-5">Downloaded Resume History</h1>
      <Link to={'/Resume'} className='float-end me-5' style={{marginTop:'-80px'}}><IoArrowBackCircle className='me-1' />Back</Link>
        <Box component="section" className='container-fluid'>
          <div className="row">
            <div className="col-md-4">
              <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Review At: 8/29/2025, 9:28:21 AM</h6>
                  <button className='btn text-danger fs-5'><MdDeleteForever /></button>
                </div>
                <div className="border rounded p-3">
                  <img className='img-fluid' width={'200px'} height={'200px'} src="https://www.wozber.com/public/templates/v2/previews/en/1/resume-template-1-w364x1.png" alt="" />
                </div>
              </Paper>
            </div>
          </div>
        </Box>
    </div>
  )
}

export default History