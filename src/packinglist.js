import { useState } from "react"

export default function Packinglist({item,ondeleteItem,ontoggleItem,clear}){
      const [sortBy,setSortby]=useState('input')
      let sortedItems;
      if(sortBy==='input') sortedItems=item
      if(sortBy==='description')sortedItems=item.slice().sort((a,b)=>a.description.localeCompare(b.description))
      if(sortBy==='packed')sortedItems=item.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
     
      return(
      <div className="list">
        <ul>
        {sortedItems.map((item)=><Item ondeleteitem={ondeleteItem} ontoggleItem={ontoggleItem} item={item} key={item.id}/>)}
         </ul>
         <div className="actions">
          <select value={sortBy} onChange={e=>setSortby(e.target.value)}>
            <option value='input'>Sort by input Order</option>
            <option value='description'>Sort by description</option>
            <option value='packed'>sort by packed status</option>
          </select>
          <button onClick={clear}>clear</button>
         </div>
      </div>
      
    )}

    function Item({item,ondeleteitem,ontoggleItem}){
      return (<li>
      <input type="checkbox"  onChange={()=>ontoggleItem(item.id)}/>
       <span style={item.packed?{textDecoration:
         "line-through"}:{}}>
           {item.quantity} {item.description}
       </span>
        <button onClick={()=>ondeleteitem(item.id)}>❌</button> 
        {/*here we put the  ()=>  , so that the onclick doesnot imediately call the function , instead of waiting for the ckick happen*/}
       </li> )
       }