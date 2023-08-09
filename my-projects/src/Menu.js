import React from 'react';

function Menu({ data }) {
  return (
    <div className='col-md-4 w-75'>
        <h1 className='text-center' style={{borderBottom:"5px solid green" ,width:"120px"}}>Our Menus</h1>
      
      <div className="row">
        {data.map((item) => {
          const { id, title, price, img, desc } = item;
          return (
            <div className="col-md-4 mt-2" key={id}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    {title} <span className="mt-2" style={{ backgroundColor: 'green', border: '1px solid black' }}>Price: {price}</span>
                  </h5>
                  <p className="card-text">{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
