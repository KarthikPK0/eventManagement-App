import React from 'react'
import hImage1 from '../assets/images/himage1.png'
import './Home.css'
import bg1 from '../assets/images/bg1.png'

function Home() {
  return (
   <>
    <div  className="row s1 vh-100 mx-0" style={{backgroundColor:'#D9DBDE'}}>
        <div className="col col-xs-12 col-sm-12 col-md-6 ps-4 pe-4 ps-5 s1c1">
          <h2>
          "Effortless Event Planning <br /> at Your <span style={{color:'#840505'}}>Fingertips</span>"
          </h2>

            <p className='s1c1p' >
            Browse through our curated list of top event planners and vendors, and seamlessly book appointments to make your <br /> event planning stress-free.
            </p>

            <button className='s1Button mt-5'>Book Events <i className="fa-solid fa-arrow-right ms-1"></i></button>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-6 s1c2">
          <img width={'400px'} src={hImage1} alt="home-image" className="s1Image" />
        </div>
    </div>

    <div className="s2 pt-5 w-100 d-flex flex-column align-items-center pb-5">
        <h3 className="text-center fw-bold">
        Top Rated Events
        </h3>

        <p className='text-center mt-3'>
        Simply browse through our extensive list of trusted planners, schedule <br /> your appointment hassle-free.
        </p>

        {/* Horizontal Scrollable Image Container */}
        <div className="image-container  mt-3 d-flex justify-content-center align-items-center w-100 overflow-auto pt-2">
            <div className="img img1 me-3"></div>
            <div className="img img2 me-3"></div>
            <div className="img img3 me-3"></div>
            <div className="img img4 me-3"></div>
            <div className="img img5 me-3"></div>
            <div className="img img6"></div>
        </div>
    </div>

    <div className="s3 w-100 d-flex flex-column pb-5">
    <h3 className="text-center pt-5 fw-bold">
    Top Events to Book
        </h3>

        <p className='text-center mt-3'>
        Easily browse through our extensive list of curated events, find <br /> the ones that match your interests, and book your spot <br />seamlessly
        </p>
    </div>

    
   </>
  )
}

export default Home
