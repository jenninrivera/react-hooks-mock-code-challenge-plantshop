import React, {useState} from "react";

function PlantCard({plant}) {
  const [inStock, setInStock] = useState(plant.in_stock)

  function handleSoldOut() {
    setInStock(inStock === !inStock)
    // fetch('http://localhost:6001/plants/' + id, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify ({
    //     in_stock: inStock
    //   })
    // })
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
        {plant.inStock ? (
        <button className="primary" onClick={handleSoldOut}>In Stock</button>
      ) : (
        <button onClick={handleSoldOut}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
