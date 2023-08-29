import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantComponent = plants.map(plant => {
      return <PlantCard key={plant.id} plant={plant}/>
    })
  return (
    <ul className="cards">{plantComponent}</ul>
  );
}

export default PlantList;
