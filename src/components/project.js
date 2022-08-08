import React from 'react'

const project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img src={item.image} alt="" />
        </div>
    </div>
  )
}

export default project;