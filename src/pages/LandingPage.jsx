import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{width:'100%', height:'100vh',backgroundImage: "url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')",backgroundAttachment:'fixed',backgroundPosition:'top', backgroundSize:'cover'}}className="container-fluid row align-items-center">
        <div className='row'>
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:"rgba(255, 255, 255, 0.5)"}}>
            <h3>Designed to get hired,
              your skills, your story, your next job -all is one.</h3>
              <Link to={'/resume'}className='btn text-white' style={{backgroundColor:'purple'}}>Make Your Resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>
      {/* tools */}
      <section className='m-5'>
        <h1 className="text-center">Tools</h1>
        <div className="container row align-items-center">
          <div className="col-md-6">
            <div className='my-3'>
              <h4>Resume</h4>
              <p>Create Unlimited new resumes and easily edit then afterwards.</p>
            </div>
            <div className='my-3'>
              <h4>Cover Letters</h4>
              <p>Easily Write Professional Cover letters.</p>
            </div>
            <div className='my-3'>
              <h4>Jobs</h4>
              <p>Automatically receive new and relevant job postings</p>
            </div>
            <div className='my-3'>
              <h4>Aplications</h4>
              <p>Effortlessly manage and track your job applications in an organized manner.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
          </div>
        </div>
      </section>
      {/* image */}
      <section style={{height:'500px', width:'100%', backgroundImage:'url("https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg")', backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}></section>
      {/* testimony */}
      <section className='m-5'>
        <h1 className='text-center my-5'>Testimonial</h1>
        <div className="row container">
          <div className="col-md-5">
            <h3 className='text-center text-bold my-5'>Trusted by Professional worldwide</h3>
            <p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p className='fs-5'style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p className='fs-5'style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className='col-3'>
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className='col-3'>
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
              </div>
              <div className='col-3'>
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
              <div className='col-3'>
                <img className='w-100' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" />
              </div>
            </div>
            <div className="row my-3">
              <div className='col-3'>
                <img className='w-100' src="https://rvkflowtech.com/wp-content/uploads/2019/02/person6.jpg" alt="" />
              </div>
              <div className='col-3'>
                <img className='w-100' src="https://rtvision.in/wp-content/uploads/person2.jpg" alt="" />
              </div>
              <div className='col-3'>
                <img className='w-100' src="https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=500/https://media.easy-peasy.ai/8098e80e-9692-4c01-a788-1e72b52b8aeb/7a9349d2-287e-4e01-b052-c48adff98405.png" alt="" />
              </div>
              <div className='col-3'>
                <img className='w-100' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="" />
              </div>
            </div>
            <div className="row my-3">
              <div className='col-3'>
                <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180" alt="" />
              </div>
              <div className='col-3'>
                <img className='w-100' src="https://media.craiyon.com/2025-07-08/GS8Rhl3pQMGQb3F7WXaq-Q.webp" alt="" />
              </div>
              <div className='col-3'>
                <img className='w-100' src="https://rvkflowtech.com/wp-content/uploads/2019/02/person6.jpg" alt="" />
              </div>
              <div className='col-3'>
                <img className='w-100' src="https://img.freepik.com/free-photo/smiley-woman-outdoors-city_23-2148774316.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage