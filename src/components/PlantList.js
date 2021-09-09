import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";


function PlantList( { newPlant, searchValue } ) {

const [plants, setPlants] = useState([])

  useEffect(() =>{
    console.log('fetching...')
    fetch(`http://localhost:6001/plants`)
      .then(resp => resp.json())
      .then(plantArr => 
        setPlants(plantArr))
  }, [newPlant])

  function deletePlant(id) {
    setPlants(plants.filter(plant => plant.id !== id))
  }

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchValue.toLowerCase()))

  const plantCards = filteredPlants.reverse().map(plant => plant.name ? <PlantCard key={plant.id} plant={plant} deletePlant={deletePlant}/> : null)

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
