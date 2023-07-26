import React from 'react';



function List({ items,removeItem,edititem }) {
  return (
    <>
      <div className=''> {/* Corrected the class name to 'container' */}
        {items.map((data) => {
          const { id, title } = data;
          return (
            <article key={id}>
              <h5>{title}</h5>
             <button className='btn btn-success btn-sm m-1' onClick={() => edititem(id)}>edit</button>
             <button className='btn btn-danger btn-sm' onClick={() => removeItem(id)}>Delete</button>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default List;

