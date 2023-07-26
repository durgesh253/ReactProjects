import React, { useEffect } from 'react';
import { useState } from 'react';
import List from './List';

const getlocalstorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return (list = JSON.parse(localStorage.getItem('list')))
  }
  else{
    return [];
  }
}

function App() {
  const [name, setname] = useState("");
  const [list, setlist] = useState(getlocalstorage());
  const [editingItemId, setEditingItemId] = useState(null);

  

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("hello durgesh");

    if (editingItemId) {
      // Update existing item
      const updatedList = list.map((item) =>
        item.id === editingItemId ? { ...item, title: name } : item
      );
      setlist(updatedList);
      setname("");
      setEditingItemId(null); // Clear the editing item ID after editing
    }
     else{
    const newitem = { id: new Date().getTime().toString(), title: name };
    setlist([...list, newitem]) // Corrected variable name from List to list
    setname(""); // Clear the input field after submission
     }
  }

  useEffect(() => {
  localStorage.setItem('list' ,JSON.stringify(list))
  },[list]);

  const removeItem = (id) => {
    setlist(list.filter((del) => del.id !== id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    if (specificItem) {
      setname(specificItem.title);
      setEditingItemId(id); // Keep track of the editing item's ID
    }
  };

  return (
    <div className='section w-100  m-5'>
      <div className='conatiner shadow w-50'>
        <form action="" onSubmit={handlesubmit}>
          <h2>Add Items to My Shop</h2>
          <input type="text" className='form-control w-25' value={name} onChange={(e) => setname(e.target.value)} />
          <button className='btn btn-primary btn-sm mt-2'>Submit</button>
        </form>
        <div className=''>
          <List items={list} removeItem={removeItem} edititem={editItem}/> {/* Corrected prop name from item to items */}
        </div>
      </div>
    </div>
  )
}

export default App;

