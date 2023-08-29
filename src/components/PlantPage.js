import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react"

function PlantPage() {
  const [plants, setPlants] = useState ([])
  const [plantSearch, setPlantSearch] = useState("")
useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(response => response.json())
  .then(plants => setPlants(plants))
}, [])
const addNewPlant = event => {
  event.preventDefault()
  const newPlant = {
      "name": event.target.name.value,
      "image": event.target.image.value,
      "price": event.target.price.value
  }
  fetch('http://localhost:6001/plants', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept'": "application/json"
    },
    body: JSON.stringify(newPlant)
  })
  setPlants([...plants, newPlant])
}
const updatePlantSearch = event => setPlantSearch(event.target.value)

const filteredPlants = plants.filter(plant => {
  return (plantSearch ? plant.name.toUpperCase().includes(plantSearch.toUpperCase()): true)
})
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search updatePlantSearch={updatePlantSearch}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
