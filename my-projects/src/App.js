import React, { useState } from 'react'
import data from './data'
import Category from './Category';
import Menu from './Menu';

// const allcategories =  ["all",...new Set(data.map((item) => item.category))];


const allcategories = ["all",...new Set(data.map((item) => item. category))]
console.log(allcategories);
function App() {
  const [menu,setmenu] = useState(data);
  const[categoryes,setcategoyes] = useState(allcategories);
  const filtercategory = (category) => {
    if(category === "all"){
      setmenu(data);
      return
    }

    const newdata = data.filter((item) =>  item.category === category);
    setmenu(newdata)
  }
  // const[menu,setmenu] = useState(data);
  // const [categoryes,setcategoyes]= useState(allcategories)
  // console.log(data);
  

  // const filtercategory = (category) => {
  //   if(category === "all") {
  //     setmenu(data);
  //     return
  //   }
    
  //   const newdata = data.filter((item) => item.category === category);
  //     setmenu(newdata);
  // }
  return (
    <div className=''>
          <h1 className='text-center' style={{borderBottom:"5px solid green" ,width:"120px"}}>Our Menus</h1>
         <Category filtercategory={filtercategory} categoryes={categoryes} />
         <Menu data={menu}  />
    </div>
  )
}

export default App
