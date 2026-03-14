import React from "react";
import "../styles/cards.css";
import "../styles/sections.css";

function Skills(){

const skills=[
"JavaScript","React","Node.js","Express.js","MongoDB",
"HTML","CSS","Java","Spring Boot","Python",
"Machine Learning","Natural Language Processing","Flask","REST API","Git",
"GitHub","Docker","Containers","DevOps","Terraform",
"Ansible","Jira","AWS","Cloud Computing","Operating Systems",
"Linux","Random Forest","VADER Sentiment Analysis","Hugging Face Transformers","TensorFlow",
"Pandas","NumPy","Scikit-learn","Data Analysis","Data Visualization",
"Power BI","Microsoft Excel","Microsoft PowerPoint","Wireshark","VS Code"
];

return(

<section id="skills" className="section">

<h2 className="section-title">
<span>Skills</span>
</h2>

<div className="grid-container grid-5">

{skills.map((skill,index)=>(
<div key={index} className="card">
<h3>{skill}</h3>
</div>
))}

</div>

</section>

);

}

export default Skills;