import React, { useState } from "react";

function NewPlantForm( { addNewPlant }) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  const {name, image, price} = formData

  function handleFormChange(e) {
    let key = e.target.name
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  function handleSubmit(e) {  
    e.preventDefault()
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    addNewPlant(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFormChange} value={name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleFormChange} value={image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleFormChange} value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
