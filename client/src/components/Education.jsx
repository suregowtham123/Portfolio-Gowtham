import React from "react";

function Education() {

const education = [
{
degree: "B.Tech Computer Science and Engineering",
institution: "VIT Chennai",
duration: "2022 - 2026",
description:
"Graduated in Computer Science and Engineering with a strong foundation in software development, artificial intelligence, machine learning, cloud computing, and full-stack web development."
},
{
degree: "Higher Secondary Education (Class XII)",
institution: "Narayana junior collage",
duration: "2020 - 2022",
description:
"Completed higher secondary education with focus on Mathematics, Physics, and Computer Science."
},
{
degree: "Secondary Education (Class X)",
institution: "Ratnam High School",
duration: "2019 - 2020",
description:
"Completed secondary education with excellent academic performance."
}
];

return (
<section id="education" className="section">

<h2 className="section-title">
 <span>Education Journey</span>
</h2>

<div className="education-container">

{education.map((item, index) => (

<div key={index} className="education-card">

<div className="education-year">
{item.duration}
</div>

<h3>{item.degree}</h3>

<h4>{item.institution}</h4>

<p>{item.description}</p>

</div>

))}

</div>

</section>
);
}

export default Education;
