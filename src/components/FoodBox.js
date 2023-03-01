export default function FoodBox({food, handleDelete, id}){

function handleClick(){
  handleDelete(id)
}

return (
<div class="card mt-5" style={{width: "18rem"}}>
  <img src={food.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{food.name}</h5>
    <p class="card-text">Servings: {food.servings}</p>
    <p class="card-text">Calories: {food.calories}</p>
    <button class="btn btn-primary" onClick={handleClick}>Delete</button>
  </div>
</div>
)
}