import React,{useEffect,useState} from "react";
import axios from "axios";

function Projects(){

const [projects,setProjects]=useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/projects")
.then(res=>setProjects(res.data));

},[]);

return(

<section id="projects" className="section">

<h2 className="section-title">
<span>Projects</span>
</h2>

<div className="grid grid-3">

{projects.map((p,index)=>(

<div key={index} className="project-card">

<h3>{p.title}</h3>

<p>{p.description}</p>

<a href={p.github} target="_blank">
View Github →
</a>

</div>

))}

</div>

</section>

);

}

export default Projects;