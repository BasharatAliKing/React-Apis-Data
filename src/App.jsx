import React, { useEffect, useState } from 'react'

function App() {
    const [records,setRecord]=useState([]);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(responce=>responce.json())
       .then(data=>setRecord(data))
       .catch(err=>console.log(err));
    },[])
    
  return (
    <>
    <h1>Data Api Json Placeholder</h1>
    <ul>
       {
         records.map((list,index)=>{
          return  <li key={index}>{list.name} | {list.email} | {list.address.city}</li>
        })
       }
    </ul>
    </>
  )
}

export default App