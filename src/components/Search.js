import { useState } from "react"

export default function Search(props){
    const [str, setStr] = useState("")


    function handleChange(event){
        let val = event.target.value
        console.log(val)
        setStr(val)
        props.handleChange(str)
    }


return (
<div className="row justify-content-center mb-5 ">
<div className="col-4 text-center">
<h1>Search</h1>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid justify-content-center">
    <form class="d-flex mt-5">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} value={str}/>
      <button class="btn btn-outline-success" type="button">Search</button>
    </form>
  </div>
</nav>
</div>
</div>
    )
}