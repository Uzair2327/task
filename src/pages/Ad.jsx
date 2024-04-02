import React from 'react'
import Sidebar from '../Sidebar'
import Teer from '../assets/Teer.svg'
import Three from '../assets/Three.svg'
import Watch from '../assets/Watch.svg'
import search from '../assets/search.svg'
const arr=[{img:'jj',}]
const Ad = () => {
  return (
    <section className="flex">
      <div className="w-[17%]">
        <Sidebar />
      </div>
      <section className='w-[83%]'>
        <div className="flex  mt-4 mx-10">
          <div className="w-[80%]  flex gap-5">
            <img src={Teer} alt="" className="h-6" />
            <p>Ad (5)</p>
          </div>
          <div className="flex gap-4">
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search here"
                className="border rounded-2xl p-[6px] pl-12 "
              />
            </div>
            <img src={search} className="absolute top-6 pl-4 " />
            <div>
              <img src={Three} alt="" srcset="" className="h-14 mt-[-6px]" />
            </div>
          </div>
        </div>
        <div className=' bg-slate-50'>
          <div>
          
          <img src={Watch} alt="" />
          <p>hello</p>
          <p>gggg</p>
          </div>
          </div>
      </section>
      
    </section>
  );
}

export default Ad