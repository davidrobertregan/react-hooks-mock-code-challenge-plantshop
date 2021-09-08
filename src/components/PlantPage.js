import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [newPlant, setNewPlant] = useState({})

  function addNewPlant(formData) {
    setNewPlant(formData)  
  }


  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search />
      <PlantList newPlant={newPlant}/>
    </main>
  );
}

export default PlantPage;
