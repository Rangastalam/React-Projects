import React from 'react'
import { useState } from 'react'
const Form = ({onAdd}) => {
    const [first, setfirst] = useState('')
    const [service, setservice] = useState("")
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!first.trim()||!service.trim()) return;
        console.log({first,service});
        onAdd({first,service});
        setfirst("");
        setservice("");

    }
  return (
    <div className='h-70 w-80 bg-blue-400 rounded-2xl'>
        <form className='mt-15 ' onSubmit={onSubmit}>
            <input  type='text' placeholder='Customer Name' className='bg-amber-50 rounded-lg p-3 block ml-15' value={first} onChange={(e)=>{setfirst(e.target.value)}}></input>
            <select className='mt-4 ml-16 rounded-lg bg-amber-50 w-50 block' value={service} onChange={(e)=>{setservice(e.target.value)}}>
                <option value='Service'>Service</option>
                <option value='Payment'>Payment</option>
                <option value='Customer'>Customer</option>
            </select>
            <button type='submit' className='mt-3 bg-amber-800 p-2 rounded-lg'> Add to Queue</button>
        </form>
    </div>
  )
}

export default Form
