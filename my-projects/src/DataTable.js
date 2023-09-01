import React, { useState } from 'react'

function DataTable() {
    const data = [
        {id : 1 , name : "Durgesh" , age : 20},
        {id : 2 , name : "sanket" , age : 23},
        {id : 3 , name : "Pradip" , age : 29},
        {id : 4 , name : "Nilesh" , age : 23},
        {id : 5 , name : "harish" , age : 20},
        {id : 6 , name : "yash" , age : 19},
        {id : 7, name : "vansh" , age : 28},
        {id : 8 , name : "siraj" , age : 17},
        {id : 9 , name : "aditya" , age : 12},
        {id : 10 , name : "sankalp" , age : 10},
    ];

    const [DataValue,SetDataVlue] = useState(data)
    const [searchValue ,setsearchValue] = useState("")
    const handlesearch = (e) => {
       setsearchValue(e.target.value)
       const filterSearch = data.filter((item) => 
       item.name.toLowerCase().includes(e.target.value.toLowerCase()))
       SetDataVlue(filterSearch)
    }
  return (
    <div className='container'>
    <div className='search-container'>
    <input type="text"  className='search-input' placeholder='Search By Name' value={searchValue}
       onChange={handlesearch}/>
    </div>
    <table className='data-table'>
    <thead>
    <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>AGE</th>
    </tr>
    </thead>
    <tbody>
    {DataValue.map((item) => {
        return(
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        </tr>
        ) 
    })}
    
    </tbody>

    </table>
      
    </div>
  )
}

export default DataTable
