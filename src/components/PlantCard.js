import React, {useState} from "react";

function PlantCard({plant, handleSoldOut}) {
  const [inStock, setInStock] = useState(true)

  function handleSoldOut() {
    setInStock(!inStock) 
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <div onClick={handleSoldOut} >
        {inStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      </div>
    </li>
  );
}

export default PlantCard;
