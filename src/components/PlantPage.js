import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  const getPlants = () => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(plants => setPlants(plants))
  }

  const onAddPlant = (plant) => {
    const updatedPlants = [plant, ...plants]
    setPlants(updatedPlants)
  }

  useEffect(getPlants, [])

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
