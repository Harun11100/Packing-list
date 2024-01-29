import { useState } from "react"
import Logo from "./logos.js"
import Forms from "./form.js"
import Packinglist from "./packinglist.js"
import Stats from "./stats.js"
  
const initialItems = [
 { id: 1, description: "Mobile", quantity: 2, packed:false }, 
  { id: 2, description: "charger", quantity: 2, packed: false },
  { id: 3, description: "Laptop", quantity: 2, packed: false },
  { id: 4, description: "Money", quantity: 100, packed:false },
  
]


export default function App(){
  const [items , setItems]=useState(initialItems)

  function addItemHandler(items){

    setItems((item)=>[...item,items])
  }


  function deleteItemHandler(id){
    console.log(id)
    setItems(item=>item.filter(item=>item.id!==id))
  }


  function toggleHandler(id){

    setItems((items)=>
    items.map((item)=>
    item.id===id?{...item,packed:! item.packed}: item))

  }

  function ClearList(){
    const confirmed=window.confirm('Are you sure to clear list? ')
    
    if(confirmed)setItems([])
  }
   
 return<div className="app">  
    <Logo/>
    <Forms onAddItem={addItemHandler}/>
    <Packinglist item={items} clear={ClearList} ondeleteItem={deleteItemHandler} ontoggleItem={toggleHandler}/>
    <Stats item={items}/>
  </div>
 
}






