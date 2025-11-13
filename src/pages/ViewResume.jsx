import React, { useEffect,useState } from 'react'
import Preview from '../components/Preview';
import { Link, useParams } from 'react-router-dom';
import { addHistoryAPI, getResumeAPI } from '../services/allAPI';
import { FaDownload } from "react-icons/fa6";
import { IoIosRefreshCircle } from "react-icons/io";
import { HiMiniBackward } from "react-icons/hi2";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


function ViewResume() {
  const {id} = useParams()
  console.log(id);
  const [resume,setResume] = useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails = async ()=>{
    const result = await getResumeAPI(id)
    console.log(result);
    if(result.status==200){
      setResume(result.data)
    }
  }

  const handleDownloadResume = async ()=>{
    // create pdf document
    const doc = new jsPDF();
    const preview = document.getElementById("preview")

    //screenshot of preview - to take screenshot of html elements : html2canvas
    const canvas = await html2canvas(preview,{scale:2})
    // console.log(canvas);

    //convert canvas to image
    const resumeImg = canvas.toDataURL('image/png')
    // console.log(resumeImg);
    
    //add screenshot to pdf
    const imgWidth = doc.internal.pageSize.getWidth()
    const imgHeight = doc.internal.pageSize.getHeight()
    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgWidth)

    //download pdf
    doc.save(`${resume.username}-resume.pdf`)

    //local time date = new date
    const localTimeData = new Date();
    const timeStamp = `${localTimeData.toDateString()}, ${localTimeData.toLocaleTimeString()}`;
    // console.log(timeStamp);
    try {
      await addHistoryAPI({timeStamp,resumeImg})
    } catch (err) {
      console.log(err);
      
    }

    
  }
  
  
  return (
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <button onClick={handleDownloadResume} className="btn fs-4 text-primary"><FaDownload /></button>
                <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                <Link to={'/history'} className="btn fs-4 text-primary"><IoIosRefreshCircle /></Link>
                <Link to={'/resume'} className="btn fs-4 text-success"><HiMiniBackward /></Link>
              </div>
                 <div id ='preview' className="d-flex justify-content-center" style={{marginTop : -30}}>
            <Preview resumeDetails={resume} />
          </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    </>
  )
}

export default ViewResume