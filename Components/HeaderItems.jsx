import React from 'react'

const HeaderItems = ({name,Icon}) => {
  return (
    <div className='rounded-2xl flex m-4 hover:bg-slate-500/10 p-1 '>
        <div className='mt-1 ml-2 hover:scale-125'>
            <Icon/>
        </div>
        <div className='ml-2 mr-2'>
            {name}
        </div>

      
    </div>
  )
}

export default HeaderItems