import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";
import { addResumeAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

const steps = ['Basic Information', 'Contact Details', 'Educational Details','Work Experience','Skills & Certification','Review & Submit'];

function UserInputs({resumeDetails,setResumeDetails}) {
  const skillSuggestionArray=['NODE JS','MONGODB','EXPRESS JS','REACT','ANGULAR','LEADERSHIP','COMMUNICATION','COACHING','POWER BI','MS EXCEL']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  //create state for storing resume details
  // const [resumeDetails,setResumeDetails] = React.useState({
  //   username:"",
  //   jobTitle:"",
  //   location:"",
  //   email:"",
  //   mobile:"",
  //   github:"",
  //   linkdin:"",
  //   portfolio:"",
  //   course:"",
  //   college:"",
  //   university:"",
  //   passoutyear:"",
  //   jobType:"",
  //   company:"",
  //   cLocation:"",
  //   duration:"",
  //   userSkills:[],
  //   summary:""
  // })

  //reference to skill input tag
const skillRef = React.useRef()
  
  console.log(resumeDetails);
  
  // to navigate
  const navigate = useNavigate()
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
const renderSteps = (stepCount)=>{
    switch(stepCount){
        case 0 : return(
            <div>
                <h3>Personal Details</h3>
                <div className='d-flex row p-3'>
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                    <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                </div>
            </div>
        )
        case 1 : return(
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
        )
        case 2 : return(
            <div>
                <h3>Education Details</h3>
                <div className='d-flex row p-3'>
                    <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                    <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                    <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                    <TextField value={resumeDetails.passoutyear} onChange={e=>setResumeDetails({...resumeDetails,passoutyear:e.target.value})} id="standard-basic-year" label="Year of Passout" variant="standard" />
                </div>
            </div>
        )
        case 3 : return(
            <div>
                <h3>Professional Details</h3>
                <div className='d-flex row p-3'>
                    <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic" label="Job or Internship" variant="standard" />
                    <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic" label="Company Name" variant="standard" />
                    <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})} id="standard-basic" label="Comapany Location" variant="standard" />
                    <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic" label="Duration" variant="standard" />
                </div>
            </div>
        )
        case 4 : return(
            <div>
                <h3>Skills</h3>
                <div className='d-flex align-items-center justify-content-between p-3 w-100'>
                    <input ref={skillRef} placeholder='Add Skills' type="text" className="form-control" />
                    <Button onClick={()=>addSkill(skillRef.current.value)} variant="text">ADD</Button>
                </div>
                <h5>Suggestions : </h5>
                <div className='d-flex flex-wrap justify-content-between my-3'>
                    {
                        skillSuggestionArray.map((item,index)=>(
                            <Button onClick={()=>addSkill(item)} key={index} variant="outlined"className='m-2'>{item}</Button>
                        ))
                    }
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
        )
        case 5 : return(
            <div>
                <h3>Summary</h3>
                <div className="p-3 row">
                    <TextField  onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="Write a Short Summery of yourself" variant="standard" multiline rows={7}defaultValue={"Full-Stack MERN Developer skilled in building scalable, high-performance web applications using React.js, Node.js, Express, and MongoDB. Passionate about clean code, seamless user experiences, and efficient solutions. Experienced in RESTful API development, state management, and responsive UI design. Adept at database modeling, cloud deployment, and integrating modern frontend frameworks. Strong problem-solving skills, quick learner, and committed to delivering innovative, high-quality web applications that meet business goals."}/>
                </div>
            </div>
        )
        default:return null
    }
}
const handleAddResume = async () => {
  const { username, jobTitle, location } = resumeDetails;

  if(!username&& !jobTitle&& !location){
    alert("please filll the form completely....")
  }else{
    //api
    console.log("API called");
    try{
    const result = await addResumeAPI(resumeDetails)
    console.log(result);
    if(result.status==201){
      alert("Resume added Successfully!!!")
        const {id} = result.data
          //success redirect view page
          navigate(`/resume/${id}/view`)
    }
  }catch(error){
    console.log(error);
    
  }
  }
  
}
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* render contents according to step */}
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {activeStep === steps.length - 1 ? <Button onClick={handleAddResume}>FINISH</Button> : <Button onClick={handleNext}>NEXT</Button>}
            
            
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInputs