import React, {useState} from "react";

function PlantCard({ plant, deletePlant }) {

  const { name, image, price} = plant

  const [inStock, setInStock] = useState(true)
  const [seePriceUpdate, setSeePriceUpdate] = useState(false)
  const [newPrice, setNewPrice] = useState(price)

  function handleStockClick(){
    console.log("fired!")
    setInStock(!inStock)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('submitfired')
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: newPrice
      })
    })
    setSeePriceUpdate(!seePriceUpdate)
  }

  function handleDeleteClick() {
    deletePlant(plant.id)
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
  })}

  return (
    <li className="card">
      <div id='card-image'>
        <button onClick={handleDeleteClick}>X</button>
        <img src={image} alt={name}/>
      </div>
      <h4>{name}</h4>
      <p>Price: ${newPrice}</p>
      {inStock ? (
        <button onClick={handleStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
      {seePriceUpdate ?
      (<> <button onClick={() => setSeePriceUpdate(!seePriceUpdate)}>Hide Form</button>
      <form onSubmit={handleSubmit}>
        <label>Enter Price
          <input onChange={(e) => setNewPrice(e.target.value)}value={newPrice} type='number'></input>
        </label>
        <input type="submit"></input>
      </form> </>) : (<button onClick={() => setSeePriceUpdate(!seePriceUpdate)}>Update Price</button>)}
    </li>
  );
}

export default PlantCard;
