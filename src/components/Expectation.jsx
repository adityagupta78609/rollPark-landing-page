import React from 'react'
import "./Expectation.css"
const Expectation = () => {
  return (<>
    <div className='flex flex-wrap justify-center items-center space-x-6 mt-6'>
      <div className='flex flex-wrap flex-col justify-center items-center'>
        <div>

        <p className='text-3xl font-bold'>What to expect? <span className='text-slate-400 italic font-normal'
        style={{
            "fontFamily":"sentinel"
        }}>A turnkey solution</span>
        </p>
        <p className='text-2xl font-light text-slate-400 italic' style={{
            "fontFamily":"sentinel",
            "maxWidth":"40rem",
        }}>From design to installation, Rollpark can handle every aspect of the job: site procurement, civil engineering, geotechnical engineering, design, site preparation, and installation.
        </p>
        <p className='my-4 text-lg font-semibold expectation-link mx-'>
            <a href="https://rollpark.us/installation/" target="_blank" > Installation process
            <i className='fa-solid fa-arrow-right mx-2'/>
            </a>
        </p>
        </div>
      </div>
      <div > 
        <img src="	https://rollpark.us/wp-content/uploads/2018/10/workers.jpg" alt="Workers img" width="300" className='ml-32'/>
      </div>
      
    </div>
    <hr/>
    </>
  )
}

export default Expectation
