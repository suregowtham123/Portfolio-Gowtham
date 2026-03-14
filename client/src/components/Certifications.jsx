import React,{useState} from "react";

function Certifications(){

const [selectedImage,setSelectedImage]=useState(null);

const certs=[

{
title:"Introduction to SQL",
org:"Scaler Academy",
img:"/sql.png"
},

{
title:"Prompt Engineering",
org:"Coursera",
img:"/prompt.png"
},

{
title:"Fundamentals of Digital Marketing",
org:"Coursera",
img:"/marketing.png"
},

{
title:"C",
org:"IIT Bombay",
img:"/iit1.png"
},

{
title:"C++",
org:"IIT Bombay",
img:"/iit2.png"
},

{
title:"Python",
org:"IIT Bombay",
img:"/iit3.png"
},

{
title:"Azure AI Fundamentals",
org:"Microsoft",
img:"/microsoft.png"
}

];

return(

<section id="certifications" className="section">

<h2 className="section-title">
<span>Certifications</span>
</h2>

<div className="grid grid-3">

{certs.map((c,index)=>(

<div key={index} className="card">

<h3>{c.title}</h3>

<p>{c.org}</p>

<img
src={c.img}
className="cert-img"
onClick={()=>setSelectedImage(c.img)}
/>

</div>

))}

</div>

{selectedImage &&(

<div className="popup" onClick={()=>setSelectedImage(null)}>

<img src={selectedImage}/>

</div>

)}

</section>

);

}

export default Certifications;