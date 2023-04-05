import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const emptyFormData = {name: "", image: "", price: 0.0}
  const [formData, setFormData] = useState(emptyFormData)
  const { name, image, price } = formData

  const handleFormChange = (e) => {
    const value = e.target.value
    const key = e.target.name
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { 
        "content-type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(plant =>  onAddPlant(plant))
      setFormData(emptyFormData)
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
