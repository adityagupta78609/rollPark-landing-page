import React from 'react'
import './RollparkFooter.css'
const RollparkFooter = () => {
  return (
    <div className='flex lg:flex-row max-lg:flex-col flex-wrap py-6 relative' style={{
        "justifyContent":"space-around"
    }}>
      <div className="flex flex-wrap max-lg:mb-4">
        <div className='opacity-40'>
<img src="https://rollpark.us/wp-content/themes/rollpark/img/logo.svg" alt="" />
        </div>
        <div>
            <p className='font-bold'>Rollpark</p>
            <p className='text-slate-400'>13700 Providence Road, Suite 200
Weddington, NC 28104</p>

        </div>
      </div>
      <div className="flex flex-col max-lg:mb-4 ">
        <div className='text-3xl' style={{
            "fontFamily":"sentinel"
        }}>704-321-0802</div>
        <div className='text-3xl'>info@rollpark.us</div>
      </div>
      <div className="flex text-slate-400 flex-col text-right foot-3">
        {/* div for icons of social handles */}
        <div className='pb-1'>
            <a href="#">
            <i class="fa-brands fa-linkedin-in m-2"></i></a><a href="#">
            <i class="fa-brands fa-instagram m-2"></i> </a><a href="#">
            <i class="fa-brands fa-twitter m-2"></i>
            </a>
        </div>
        <div className='text-xs'>Copyright &copy; 2018 Rollpark</div>
        <div className='text-xs'>Trademark of Polivka International Company</div>
      </div>
    </div>
  )
}

export default RollparkFooter
