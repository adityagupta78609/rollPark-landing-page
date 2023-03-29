import React from 'react'
import Avatar from './Avatar'

const IndustryStrip = () => {
  return (
    <div>
      <div className='flex lg:ml-48 max-md:ml-4 md:ml-16  my-10 text-3xl font-bold'>
        <p>
            Tailored to Your Industry
        </p>
      </div>

      <div className='sm:flex max-sm:grid max-sm:grid-cols-3 justify-start  sm:flex-wrap lg:ml-48 max-md:ml-4 md:ml-16' >
      
        <Avatar url="https://rollpark.us/wp-content/uploads/2018/10/logistics.jpg" data="Autologistics" color="red"/>
        <Avatar url="https://rollpark.us/wp-content/uploads/2018/10/7_auto-manufacturing@2x.png" data="Auto-manufacturing"/>
        <Avatar url="https://rollpark.us/wp-content/uploads/2018/10/specialevents.jpg" data="Events"/>
        <Avatar url="https://rollpark.us/wp-content/uploads/2018/10/yeah.png" data="Hollywood"/>
        <Avatar url="https://rollpark.us/wp-content/uploads/2018/10/16_waterdrop-cycle@2x.png" data="Permitting Restrictions"/>
        <Avatar url="	https://rollpark.us/wp-content/uploads/2018/10/5_clock@2x.png" data="Universities"/>
        <Avatar url="https://rollpark.us/wp-content/uploads/2018/10/10_save-money@2x.png" data="Parking Managers"/>
      </div>

      <div className='lg:ml-48 max-md:ml-4 md:ml-16 py-8'>
        <p className='text-2xl font-bold'>Economic Uncertainty in the Autologistics World</p>
        <p className='text-2xl text-slate-400 md:w-2/3 max-md:w-full'>With an uncertain economic climate and ever growing inventory, ports and auto manufacturers need a parking material that keeps cars free of dust and damage at a lost cost.</p>
      </div>
    </div>
  )
}

export default IndustryStrip
