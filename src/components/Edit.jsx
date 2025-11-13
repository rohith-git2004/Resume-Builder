import { useState,useRef } from 'react';
import React from 'react'
import { CiEdit } from "react-icons/ci";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";
import { updateResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight : '80vh',
  overflowY :'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Edit({resumeDetails,setResumeDetails}) {
    const [open, setOpen] = useState(false);
    const skillRef = React.useRef()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addSkill = (skill)=>{
    if(resumeDetails.userSkills.includes(skill)){
      alert('The given skill alredy added, please add another!!!')
    }else{
      setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})// spred resume details and adding new skill
      // to clear the text box after submit
      skillRef.current.value=""
    }
  } 
  const removeSkill = (skill)=>{
    setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
  }

  const handleResumeUpdate = async()=>{
      const {id,username, jobTitle, location } = resumeDetails;
      if(!username&& !jobTitle&& !location){
        alert("please filll the form completely....")
      }else{
        //api
        console.log("API called");
        try {
          const result = await updateResumeAPI(id,resumeDetails)
          console.log(result);
          if(result.status==200)
          alert('Resume Updated successfully!!!')
          handleClose()
        } catch (err) {
          console.log(err);
          
        }
      }
  }

  return (
    <div>
        <button onClick={handleOpen} className="btn fs-4 text-warning"><CiEdit/></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Personal Details */}
             <div>
                <h3>Personal Details</h3>
                <div className='d-flex row p-3'>
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                    <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                </div>
            </div>
            {/* contact Details */}
            <div>
                <h3>Contact Details</h3>
                <div className='d-flex row p-3'>
                    <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-mail" label="Email" variant="standard" />
                    <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-mobile" label="Phone Number" variant="standard" />
                    <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-github" label="Github Profile Link" variant="standard" />
                    <TextField value={resumeDetails.linkdin} onChange={e=>setResumeDetails({...resumeDetails,linkdin:e.target.value})} id="standard-basic-linkdin" label="Linkdin Profile Link" variant="standard" />
                    <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                </div>
            </div>
            {/* Education */}
            <div>
                <h3>Education Details</h3>
                <div className='d-flex row p-3'>
                    <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                    <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                    <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                    <TextField value={resumeDetails.passoutyear} onChange={e=>setResumeDetails({...resumeDetails,passoutyear:e.target.value})} id="standard-basic-year" label="Year of Passout" variant="standard" />
                </div>
            </div>
            {/*Professional Details  */}
             <div>
                <h3>Professional Details</h3>
                <div className='d-flex row p-3'>
                    <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic" label="Job or Internship" variant="standard" />
                    <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic" label="Company Name" variant="standard" />
                    <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})} id="standard-basic" label="Comapany Location" variant="standard" />
                    <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic" label="Duration" variant="standard" />
                </div>
            </div>
            {/* skill */}
            <div>
                <h3>Skills</h3>
                <div className='d-flex align-items-center justify-content-between p-3 w-100'>
                    <input ref={skillRef} placeholder='Add Skills' type="text" className="form-control" />
                    <Button onClick={()=>addSkill(skillRef.current.value)} variant="text">ADD</Button>
                </div>
                <h5>Added Skills :</h5>
                <div className='d-flex flex-wrap justify-content-between my-3'>
                    {
                      resumeDetails.userSkills?.length>0?
                      resumeDetails.userSkills?.map((skill,index)=>(
                        <Button key={index} variant="contained" className='m-1'>{skill}<FaXmark onClick={()=>removeSkill(skill)} className='ms-2 cursor-pointer'/></Button> 
                      ))
                      :
                      <p className='fw-bolder'>No skills are added yet!!!</p>
                      
                    }
                </div>
            </div>
            {/*Summary  */}
            <div>
                <h3>Summary</h3>
                <div className="p-3 row">
                    <TextField  onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Write a Short Summery of yourself" variant="standard" multiline rows={7}defaultValue={"Full-Stack MERN Developer skilled in building scalable, high-performance web applications using React.js, Node.js, Express, and MongoDB. Passionate about clean code, seamless user experiences, and efficient solutions. Experienced in RESTful API development, state management, and responsive UI design. Adept at database modeling, cloud deployment, and integrating modern frontend frameworks. Strong problem-solving skills, quick learner, and committed to delivering innovative, high-quality web applications that meet business goals."}/>
                </div>
            </div>
            {/* Button */}
            <div onClick={handleResumeUpdate} className="btn btn-warning text-light">update</div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit