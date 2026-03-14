import React from "react";

function Navbar() {

const links = [
"about",
"skills",
"projects",
"achievements",
"research",
"certifications",
"contact"
];

return(

<nav className="navbar">

<div className="nav-container">

<h1 className="logo">Portfolio</h1>

<div className="nav-links">

{links.map((link)=>(
<a key={link} href={`#${link}`}>

{link.charAt(0).toUpperCase() + link.slice(1)}

</a>
))}

</div>

</div>

</nav>

);

}

export default Navbar;