import { useState } from "react"

export default function Forms({onAddItem}){
      const [ description,setDescription]= useState("")
      const [quantity,setAmount]=useState(1)
     
    
      function handleSubmit(e){
        e.preventDefault()
    
    
    
    if (!description)return
      const newItem ={
        description,quantity,packed:false,id:Date.now() }
    
      console.log(newItem)
      onAddItem(newItem)
    
      setDescription('')
      setAmount(1)
    
      }   
    
      return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3> What do you need for your 😊 trip ? </h3>
        <select value={quantity} onChange={(e)=>setAmount(Number(e.target.value))}>
          {Array.from({length:10},(_,i)=>i+1).map(num=>(
           <option value={num} key={num}>
            {num}
          </option>))}
        </select>
        <input type="text" value={description} placeholder="Item....." onChange={(d)=>setDescription(d.target.value)}/>
        <button> ADD </button>
      </form>
      
    )}