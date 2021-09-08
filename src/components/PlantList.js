import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";


function PlantList( { newPlant } ) {

const [plants, setPlants] = useState([])

  useEffect(() =>{
    console.log('fetching')
    fetch(`http://localhost:6001/plants`)
      .then(resp => resp.json())
      .then(plantArr => 
        setPlants(plantArr))
  }, [])

  const displayPlants = [...plants, newPlant]

  console.log(displayPlants)

  const plantCards = displayPlants.map(plant => plant.name ? <PlantCard key={plant.name} plant={plant}/> : null)

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
