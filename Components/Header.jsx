import React, { useState } from 'react';
import HeaderItems from './headerItems';

import { HiBell,
         HiAtSymbol,
         HiDotsVertical,
         HiMusicNote,
         HiHome
 } from "react-icons/hi";
const Header = () => {
 
  const menu=[
  //  { name:"Details",
  //   Icon:HiHome
  // },
  // {
  //   name:"Sound",
  //   Icon:HiMusicNote
  // },
  // {
  //   name:"Notifications",
  //   Icon:HiBell
  // },
  {
    name:"Contact Me",
    Icon:HiAtSymbol
  },
  {
    name:"details",
    Icon:HiDotsVertical
  }
];
  return (
        (
    <div className='flex fixed z-20'>
        
        {menu.map((item,index)=><HeaderItems name={item.name} Icon={item.Icon}/>)}
    </div>
  )
    )
}

export default Header
