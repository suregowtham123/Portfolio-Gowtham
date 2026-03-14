import React, { useEffect, useState } from "react";
import axios from "axios";

function Portfolio() {

const [projects,setProjects] = useState([]);

useEffect(()=>{
    axios.get("http://localhost:5000/api/projects")
    .then(res => setProjects(res.data))
},[])

return(
<div>
<h1>My Projects</h1>

{projects.map((p,index)=>(
<div key={index}>
<h2>{p.title}</h2>
<p>{p.description}</p>
<a href={p.github}>Github</a>
</div>
))}

</div>
)
}

export default Portfolio;