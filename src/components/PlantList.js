import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  const plantCards = plants.map(p => <PlantCard key={p.id} plant={p}/>)

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
