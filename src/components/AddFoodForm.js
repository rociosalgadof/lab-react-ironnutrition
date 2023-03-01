import { useState } from "react"

export default function AddFoodForm(props){
    const [obj, setObj] = useState({name: "",
    calories: 0,
    image: "",
    servings: 0})

    function handleChange(event){
        let name = event.target.name
        let value = event.target.value
        if(name === "calories" || name === "servings"){
            value = parseInt(value)
        }
        setObj({...obj, [name]: value})
    }

    function handleClick(){
        props.onClick(obj)
    }
    
    console.log(obj)

    return (
        <div className="row justify-content-center">
        <div className="col-4 text-center">
        <h1 className="mb-5 mt-5">Add food entry</h1>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name:</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleChange} name="name"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Image:</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleChange} name="image"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Calories</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" name="calories" onChange={handleChange}/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Servings</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" name="servings" onChange={handleChange}/>
        </div>
        <button type="button" className="btn btn-primary mb-5" onClick={handleClick}>Create</button>
        </div>
        </div>
    )
}