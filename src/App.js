// src/App.js
import foods from "./foods.json";
import './App.css';
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App () {
  const [food, setFood] = useState(foods)

  function handdleAdd(obj){
    setFood([...food, obj])
  }

  function handleChange(search){
      let str = search.toLocaleLowerCase()
      const results = food.filter((element)=> element.name.toLowerCase().includes(str))
      setFood(results)
  }

  function handleDelete(id){
    const results = food.filter((element, i)=> i !== id)
    setFood(results)
  }

  return (
    <>
  <AddFoodForm onClick={(param) => handdleAdd(param)}/>
  <Search handleChange={(param) => handleChange(param)}/>
  <div className="App">
    <h1>Food List</h1>
    <div className="row justify-content-evenly mt-5">
    {food.map((item, i)=>{
      return(
      <FoodBox id={i} handleDelete={(params)=>handleDelete(params)} food={ {
      name: item.name,
        calories: item.calories,
        image: item.image,
        servings: item.servings
        }} />)})}
    </div>
    </div>
   </>
    )
}
export default App;