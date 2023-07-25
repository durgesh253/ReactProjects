import React from 'react'

function Category({categoryes,filtercategory}) {
  return (
    <div className='conatiner'>
      {categoryes.map((btn) => {
        return(
        <button className='btn btn-info m-3'
        onClick={() => filtercategory(btn)}>
          {btn}
        </button>
        )
      })}
    </div>
  )
}

export default Category
