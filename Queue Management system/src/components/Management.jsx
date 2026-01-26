import React from 'react'

const Management = ({onUpdate,onRemove,queue}) => {
  return (
    <div className='w-150 h-70  bg-amber-700'>
        {queue.map((customer)=>(
            <div key={customer.id}>
                <div>
                    <h3>{customer.first}</h3>
                    <p>{customer.service}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Management
