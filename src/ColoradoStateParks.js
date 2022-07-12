import React from "react";
import howManyParks from "./parks/howManyParks";
import { trees, wildlife } from "./parks/RockyMountain"
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <div>
    <h1>Colorado State Parks!</h1>;
    < MesaVerde/>

    </div>
  
  )
}
console.log(trees)
  wildlife()
  
  console.log(RMFunctions.trees)
  RMFunctions.wildlife()
  RMFunctions.elevation()
  

export default ColoradoStateParks;