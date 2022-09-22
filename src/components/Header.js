import React from 'react'
import Mail from "../svgs/mail.svg";
import Stream from '../images/streams-icon.png'
import { useEffect, useState, useRef } from 'react'
import { Icon } from '@iconify/react';
const Header = () => {
  const [tab, setTab] = useState(1)

  const handleClick = (id) => {
    setTab(id)
  };
  return (
    <div className='header justify-between'>
    <div className='first-header-div flex '>
     <div className='buttons flex'>
      <span className={tab === 1? 'span-1 bg-[white] text-black justify-between' : 'span-1 text-white bg-[#3d3f43] justify-between'} onClick={() => handleClick(1)} > <span className='flex'><img src={Mail} className=" mr-1" style={{width:"8px"}} /> Mail </span> <Icon icon="iconoir:cancel" className='mr-1'/></span>

      

     </div>
     <div className='buttons flex ml-1.5' >
      <span className={tab === 2? 'span-1 bg-[white] text-black justify-between' : 'span-1 text-white bg-[#3d3f43] justify-between'} onClick={() => handleClick(2)} > <span className='flex'><img src={Mail} className=" mr-1" style={{width:"8px"}} />Manage </span><Icon icon="iconoir:cancel"  className='mr-1'/></span>
   
      

     </div>
     <div className='buttons flex ml-1.5'>
      <span className={tab === 3? 'span-1 bg-[white] text-black justify-between' : 'span-1 text-white bg-[#3d3f43] justify-between'} onClick={() => handleClick(3)} ><span className='flex'><img src={Stream} className=" mr-1 mt-1" style={{height:"10px", width:"10px"}} />  Streams </span><Icon icon="iconoir:cancel" className='mr-1' /></span>
  
      

     </div>
    </div>

    <div className='second-header-div'>

    </div>
    </div>
  )
}

export default Header
