import React from 'react'

const Footer = () => {
    const date=new Date();
  return (
    <div className='Footer'>
        CopyRights @{date.getFullYear()}
    </div>
  )
}

export default Footer