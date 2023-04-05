import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchValue, setSearchValue] = useState("")

  const getPlants = () => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(plantsData => setPlants(plantsData))
  }

  const onAddPlant = (plant) => {
    const updatedPlants = [plant, ...plants]
    setPlants(updatedPlants)
  }

  const onDeletePlant = (id) => {
    const updatedPlants = plants.filter(p => p.id !== id)
    setPlants(updatedPlants)
  }

  useEffect(getPlants, [])

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search setSearchValue={setSearchValue}/>
      <PlantList searchValue={searchValue} onDeletePlant={onDeletePlant} plants={plants}/>
    </main>
  );
}

export default PlantPage;
