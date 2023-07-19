import React from 'react';

import { NavLink } from 'react-router-dom';

function ListView({ products }) {
console.log("products" ,products)

  return (
    <>
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <div key={id} className="card grid grid-two-column">
            <figure>
              <img src={image} alt={name} />
            </figure>

            <div className="card-data">
              <h3>{name}</h3>
              <p>{price}</p>
              <p>{description.slice(0, 90)}...</p>

              <NavLink to={`/singleproduct/${id}`} className="btn-main">
                <button className="btn">Read More</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ListView;


