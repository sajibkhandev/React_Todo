import React, { useState } from 'react'
import { FaTrash,FaPenAlt,FaTimes } from "react-icons/fa";

export default function App() {
  let [name,setName]=useState("")
  let [caption,setCaption]=useState("")
  let [span1,setSpan1]=useState(false)
  let [span2,setSpan2]=useState(false)
  let [edit,setEdit]=useState(false)
  let [editindex,setEditindex]=useState("")
  let [arr,setArr]=useState([])
  let handleInput1=(e)=>{
    setName(e.target.value);
  }
  let handleInput2=(e)=>{
    setCaption(e.target.value);
  }
  let handleButton=()=>{
    if(name.length<=0){
      setSpan1(true)
    }else if(caption.length<=0){
      setSpan2(true)
    }else{
      let arr2=[...arr]
      arr2.push({
        name:name,
        caption:caption
      })
      setArr(arr2)
      setName("")
      setCaption("")
      setSpan1(false)
      setSpan2(false)

    }
   
  }
  let handelDelete=(index)=>{
    let arr2=[...arr]
    arr2.splice(index,1)
    setArr(arr2)

  }
  let handleEdit=(item,index)=>{
    setEdit(true)
    setName(item.name)
    setCaption(item.caption)
    setEditindex(index)
    

  }
  let handleUpdate=()=>{
    if(name.length<=0){
      setSpan1(true)
    }else if(caption.length<=0){
      setSpan2(true)
    }else{
   let arr2=[...arr]
   arr2[editindex]=({
    name:name,
    caption:caption
   })
   setArr(arr2)
   setEdit(false)
   setSpan1(false)
   setSpan2(false)
   setName("")
   setCaption("")
    
      }}
  


  return (
    <>
    <div className='bg-black h-screen overflow-scroll'>
    <div className='max-w-container mx-auto pt-[60px] px-6  md:pb-[100px]'>
      <div className='bg-[#97B4FF]  relative'>
        <h1 className='text-center text-3xl md:text-6xl text-white font-bold py-10 md:py-[60px] '>Todo App</h1>
        <div className='relative  mx-auto w-[250px] md:w-[400px]'>
          <input onChange={handleInput1}  value={name} type="text" placeholder='Full Name :' className=' relative block mx-auto md:w-[400px] mb-[12px] rounded-[2px] py-[3px]  px-[10px] text-lg font-semibold placeholder:text-base placeholder:font-normal placeholder:italic outline-0 ' />
        {span1?<span className='text-red-500 absolute top-[10px] left-[218px] md:left-[370px]'><FaTimes/></span>:""}
        </div>
       <div className='relative  mx-auto w-[250px] md:w-[400px]'>
         <textarea onChange={handleInput2} value={caption} type="text" placeholder='Here is your Description' className='block mx-auto md:w-[400px] rounded-[2px] py-[5px] px-[10px] text-lg font-semibold placeholder:text-base placeholder:font-normal placeholder:italic outline-0'/>
        {span2?<span className='text-red-500 absolute top-[10px] left-[218px] md:left-[370px]'><FaTimes/></span>:""}
       </div>
        {edit?
        <div className='flex justify-center'>
        <button onClick={handleUpdate} className='inline-block bg-purple-500 py-2 px-5 md:py-2.5 md:px-8 text-white rounded-md font-bold md:text-xl my-[30px] '>Update</button>
        </div>
        :
        <div className='flex justify-center'>
        <button onClick={handleButton} className='inline-block bg-purple-500 py-2 px-5 md:py-2.5 md:px-8 text-white rounded-md font-bold md:text-xl my-[30px] '>Add Todo</button>
        </div>
        }
        
      </div>
      <div className='bg-[#97B4FF] py-7 md:py-[50px] '>
        <div className=''>
          {arr.map((item,index)=>(
            <div key={index} className=' mx-6 md:w-[600px] mx-auto mb-[15px] border-2 border-white rounded-md relative'>
              <h1 className='text-2xl font-bold text-black py-[10px] pr-[40px] pl-[40px] '>{item.name}</h1>
            <p className='text-sm font-semibold text-black pb-[10px] pr-[40px] pl-[40px]'>{item.caption}</p>
            <FaTrash onClick={()=>handelDelete(index)}  className='text-[#B70C15] absolute top-[20px] right-[30px]'/>
            <FaPenAlt onClick={()=>handleEdit(item,index)} className='text-[#313131] absolute top-[20px] right-[60px]'/>
            </div>
          ))}
        </div>

      </div>

    </div>
    </div>
    </>
   
  )
}
