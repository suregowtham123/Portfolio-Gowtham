import React from "react";

function ResearchPapers(){

const papers = [

{
title:"Heart Stroke Prediction Using Neural Networks",
journal:"IJACEN – May 2025",
description:"Early stroke prediction using neural network models.",
file:"/papers/stroke-paper.pdf"
},

{
title:"An Integrated NLP System for Verdict Generation from YouTube and Product Reviews via Telegram Bot",
journal:"Research Paper – 2026",
description:"An NLP based system that analyzes YouTube comments and product reviews, performs sentiment analysis, extracts keywords, and generates final verdict summaries using a Telegram Bot interface.",
file:"/papers/nlp-verdict-system.docx"
}

];

return(

<section id="research" className="section">

<h2 className="section-title">
 <span>Research Papers</span>
</h2>

<div className="grid grid-2">

{papers.map((paper,index)=>(

<div key={index} className="card">

<h3>{paper.title}</h3>

<p>{paper.journal}</p>

<p>{paper.description}</p>

<a href={paper.file} download className="paper-btn">
Download Paper
</a>

</div>

))}

</div>

</section>

);

}

export default ResearchPapers;