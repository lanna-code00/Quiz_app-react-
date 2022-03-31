import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
 <nav className="navbar navbar-secondary bg-success position-sticky">
  <div className="container">
    <p className="navbar-brand text-white">
        CHEKKIT
    </p>
  </div>
</nav>
    <div className="how-section1">
                    <div className="row">
                        <div className="col-md-6 how-img mb-5">
                            <img src="https://image.shutterstock.com/image-vector/car-icon-long-shadow-flat-260nw-580161904.jpg" className="rounded-circle img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <h4>Automobile Survey</h4>
                                        <h4 className="subheading text-white">Hello! Welcome to survey system</h4>
                        <p className="" style={{color: '#EEEEEE'}}>Here, you answer questions based on automobiles. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                          <div className='row'>
                             <div className='col-md-12'>
                                 <Link to='/questions'><button className='btn btn-danger'>START SURVEY</button></Link>
                             </div>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 mb-5">
                            <h4>Automobile Survey</h4>
                                        <h4 className="subheading text-white">Hello! Welcome to survey system</h4>
                        <p className="" style={{color: '#EEEEEE'}}>Here, you answer questions based on automobiles. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div className='row'>
                             <div className='col-md-12'>
                                 <Link to='/result-page'> 
                                 <button className='btn btn-info text-white'>VIEW YOUR SURVEY RESULT</button>
                                 </Link> 
                             </div>
                          </div>
                        </div>
                        <div className="col-md-6 how-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSHZO2enST4FtcJVTPI4XYp7BGUtJ6MLA7nD_NMrt0nqQ6JPJN8BGSFzFfukDXiAYLw0&usqp=CAU" className="rounded-circle img-fluid" alt=""/>
                        </div>
                    </div>
                
                </div>
    
    </>
  )
}
