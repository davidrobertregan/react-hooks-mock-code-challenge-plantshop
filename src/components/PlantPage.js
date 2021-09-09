import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [newPlant, setNewPlant] = useState({})
const [searchValue, setSearchValue] = useState("")


  function addNewPlant(formData) {
    setNewPlant(formData)  
  }

  function returnSearchValue(searchInput) {
    setSearchValue(searchInput)
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search returnSearchValue={returnSearchValue}/>
      <PlantList newPlant={newPlant} searchValue={searchValue}/>
    </main>
  );
}

export default PlantPage;
