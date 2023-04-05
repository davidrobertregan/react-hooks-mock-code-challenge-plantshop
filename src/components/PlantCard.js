import React, { useState } from "react";

function PlantCard({ plant }) {

  const [inStock, setInStock] = useState(true)
  const [showEdit, setShowEdit] = useState(false)
  const [plantPrice, setPlantPrice] = useState(plant.price)

  const handleChangePrice = (e) => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({...plant, price: plantPrice})
    })
    .then(resp => resp.json())
    .then(plant => {
      setShowEdit(false)
    })
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {showEdit ? 
        <div>
          <input value={plantPrice} onChange={(e) => setPlantPrice(e.target.value)} type="text"></input>
          <button onClick={handleChangePrice}>Change Price</button>
        </div>
        :
        <div>
          <p>Price: {plantPrice}</p>
          <button onClick={() => setShowEdit(true)}>✏️</button>
        </div>
      }
      {inStock ? (
        <button onClick={() => setInStock(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
