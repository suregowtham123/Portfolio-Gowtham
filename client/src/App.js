import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import ResearchPapers from "./components/ResearchPapers";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App(){

return(

<div>

<Navbar/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Achievements/>
<ResearchPapers/>
<Certifications/>
<Contact/>

</div>

);

}

export default App;