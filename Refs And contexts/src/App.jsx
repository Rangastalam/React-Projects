import { forwardRef, useRef } from "react"
import './App.css'


const CustomInput=forwardRef(({label,placeholder},ref)=>{
  return(
    <div className="mb-4 mt-5">
      <label>{label}</label>
      <input ref={ref} className="px-3 py-3 focus:ring-blue-400 bg-amber-50 rounded-xl focus:border-amber-600 focus:border-2 w-full" type="text" placeholder={placeholder}></input>
    </div>

  )
})
const App = () => {
  const inputref=useRef(null);
  const inputFocus=()=>{
    inputref.current?.focus();
  }
  const getInputValue=()=>{
    if(inputref.current){
      alert(`Input value: ${inputref.current.value}`);
    }
  }
  const clearInputValue=()=>{
    if(inputref.current){
      inputref.current.value='';
    }
  }
  return (
    <div className="px-7 py-10 w-full bg-gray-500">
      <CustomInput ref={inputref} label='Girl' placeholder="My Girl's Name"/>
      <div className="flex flex-wrap gap-4">
      <button className="bg-blue-400 text-amber-50 px-3 py-3 rounded-xl" onClick={inputFocus}>focus input</button>
      <button className="bg-blue-900 text-amber-50 px-3 py-3 rounded-xl" onClick={getInputValue}>get input Value</button>
      <button className="bg-red-500 text-amber-50 px-3 py-3 rounded-xl"onClick={clearInputValue}>Clear input Value</button>
      </div>
    </div>
  )
}

export default App
