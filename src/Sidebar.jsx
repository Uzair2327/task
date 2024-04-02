import React from 'react'
import Home from '../src/assets/Home.svg'
import Listing from '../src/assets/Listing.svg'
import Reports from '../src/assets/Reports.svg'
import Users from '../src/assets/Users.svg'
const Sidebar = () => {
  return (
    <>
      <section className=''>
        <div className=" bg-[#00001E] h-[100vh] text-center  list-none">
          <p className="text-white font-bold text-[40px] pt-10">fuuzii</p>
          <div className=' py-12'>
            <div className="flex gap-3 list-style">
              <img src={Home} alt=" " className="h-6" />
              <li>Home</li>
            </div>
            <div className="flex gap-3 list-style">
              <img src={Users} alt=" " className="h-6" />
              <li >Users</li>
            </div>
            <div className="flex gap-3 list-style">
              <img src={Reports} alt=" " className="h-6" />
              <li>Reports</li>
            </div>
            <div className=" flex gap-3 list-style">
              <img src={Listing} alt=" " className="h-6" />
              <li>Listing</li>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar