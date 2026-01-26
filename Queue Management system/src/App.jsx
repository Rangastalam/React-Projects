import { useState } from 'react'

import './App.css'
import Form from './components/Form.jsx'
import Management from './components/Management.jsx'

function App() {
  const [queue, setqueue] = useState([])
  const onAdd=(customer)=>{
    setqueue([...queue, {...customer,id: Date.now,status:'waiting'}])
  } 
  const onUpdate=(customer_id,newStatus)=>{
    setqueue(queue.map(customer=>{
      return customer.id===customer_id?{...customer, status:newStatus}: customer;
      
    }))
  }
  const onRemove=(id)=>{
    setqueue(queue.filter(customer=>{
      customer.id!==id
    }))
  }
  return (
    <>
    
      <div className='mt-50 text-center'>
        <h1 className='text-blue-700 text-5xl font-bold '> Queue Management System</h1>
        
      </div>
      <div className='flex text-center gap-15 mt-9 w-full justify-center'>
        <Form onAdd={onAdd}/>
        <Management onRemove={onRemove} onUpdate={onUpdate} queue={queue}/>
      </div>
    </>
    
  )
}

export default App
