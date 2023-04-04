import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchValue }) {
  const filteredPlants = plants.filter(p => p.name.toLowerCase().includes(searchValue.toLowerCase()))

  const plantCards = filteredPlants.map(p => <PlantCard key={p.id} plant={p}/>)

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
