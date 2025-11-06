import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'
function UserForm() {
    //create state for storing resume details
    const [resumeDetails,setResumeDetails] = React.useState({
      username:"",
      jobTitle:"",
      location:"",
      email:"",
      mobile:"",
      github:"",
      linkdin:"",
      portfolio:"",
      course:"",
      college:"",
      university:"",
      passoutyear:"",
      jobType:"",
      company:"",
      cLocation:"",
      duration:"",
      userSkills:[],
      summary:""
    })
  return (
    <div className='container'>
      <div className="row p-5">
        <div className="col-lg-6">
          <UserInputs resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
        </div>
        <div className="col-lg-6">
          {
            resumeDetails.username&&
            <Preview resumeDetails={resumeDetails}/>
          }
          
        </div>
      </div>
    </div>
  )
}

export default UserForm