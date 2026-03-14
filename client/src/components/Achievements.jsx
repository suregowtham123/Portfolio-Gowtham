import React from "react";

function Achievements(){

return(

<section id="achievements" className="section">

<h2 className="section-title">
<span>Acheivments</span>
</h2>

<div className="grid grid-2">

<div className="card">

<h3>Technical</h3>

<p>
Published research paper
<strong>
Heart Stroke Prediction Using Neural Networks
</strong>
(IJACEN May 2025)
</p>

<img src="/certificate.png" className="achievement-img"/>

</div>

<div className="card">

<h3>Non Technical</h3>

<p>🏸 2 Badminton Medals</p>
<p>🏏 2 Cricket Medals</p>

<div className="grid grid-2">

<img src="/BADMINTON.jpg" className="achievement-img"/>
<img src="/CRICKET.jpg" className="achievement-img"/>

</div>

</div>

</div>

</section>

);

}

export default Achievements;