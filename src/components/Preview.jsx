//rfce
import React from 'react'
import {Divider, Button } from '@mui/material';

function Preview({resumeDetails}) {
  return (
    <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'> 
    <h3>{resumeDetails?.username}</h3>
    <h4>{resumeDetails?.jobTitle}</h4>
    <h6><span className='mx-2'>{resumeDetails?.location}</span>|<span className='mx-2'>{resumeDetails?.email}</span>|<span className='mx-2'>{resumeDetails?.mobile}</span></h6>
    <p className='my-2'>
        <a href={resumeDetails?.github} target='_blank'className='mx-1'>GITHUB</a>|<a href={resumeDetails?.linkdin} target='_blank'className='mx-1'>LINKEDIN</a>|<a href={resumeDetails?.portfolio} target='_blank'className='mx-1'>PORTFOLIO</a>
    </p>
    <Divider sx= {{fontSize:'25px',marginBottom:'10px'}}>Summary</Divider>
    <p style={{textAlign:'justify'}}>{resumeDetails?.summary}</p>
    
    <Divider sx= {{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
    <h4 className='mt-2'>{resumeDetails?.course}</h4>
    <h6><span className='mx-2'>{resumeDetails?.college}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|<span 
    className='mx-2'>{resumeDetails?.passoutyear}</span></h6>
    
    <Divider sx= {{fontSize:'25px',marginBottom:'10px'}}>Professional Details</Divider>
    <h4 className='mt-2'>{resumeDetails?.jobType}</h4>
    <h6><span className='mx-2'>{resumeDetails?.company}</span>|<span className='mx-2'>{resumeDetails?.cLocation}</span>|<span className='mx-2'>{resumeDetails?.duration}</span></h6>

    <Divider sx= {{fontSize:'25px',marginBottom:'10px'}}>Skills</Divider>
    <div className='d-flex flex-wrap justify-content-between my-3'>
      {
        resumeDetails?.userSkills?.map((item,index)=>(<Button key={index} variant="contained" className='m-1'>{item} </Button>))
      } 
    </div>
    </div>
    
  )
}

export default Preview