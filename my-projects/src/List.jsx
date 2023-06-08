import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from './redux/listslice';

function List() {

    const {dataValue} = useSelector((state) => state.list);
   const distpatch = useDispatch();
   console.log(dataValue);
  

    const [textvalue , settextvalue] = useState();
  return (
    <>
    <div className='container py-5'>
        <input text="text" className='form-control' value={textvalue} onChange={(e) => settextvalue(e.target.value)}/>
        <button className='btn btn-success m-2 w-100'onClick={() => distpatch(changeValue(textvalue),settextvalue(""))} >ADD</button>
       {dataValue.length=== 0 && <h3>no Data</h3>}
       {dataValue.map((item,index) =>{
        return <h6 key={index}>{item}</h6>
       })}
        
        </div>
       
        </>
  )
}

export default List
