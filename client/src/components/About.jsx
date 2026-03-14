import React from "react";

function About() {
  return (

<section id="about" className="min-h-screen flex flex-col justify-center bg-gray-50 px-6 md:px-16 py-20">

{/* TITLE */}

<h2 className="section-title">
About <span>Me</span>
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

{/* LEFT SIDE TEXT */}

<div className="space-y-6 text-gray-700 text-lg">

<p>
Hello! I'm <span className="font-semibold text-blue-500">Gowtham</span>, a Computer Science student and
passionate <strong>FULL Stack Developer</strong> with strong interest in
Artificial Intelligence and Machine Learning.
</p>

<p>
I enjoy building scalable web applications and intelligent AI systems.
My work focuses on solving real-world problems using modern technologies
such as <strong>React, Node.js, Python, Machine Learning, and Cloud
Technologies</strong>.
</p>

<p>
I have developed multiple projects including:
</p>

<ul className="list-disc pl-6 space-y-2">

<li>
<strong>Typhoon Detection System</strong> – AI model to predict typhoon
direction and speed using satellite data.
</li>

<li>
<strong>Brain Stroke Prediction System</strong> – Machine learning model
to predict stroke risks based on medical datasets.
</li>

<li>
<strong>NLP Product Review Analyzer</strong> – Sentiment analysis system
using VADER, Hugging Face Transformers and NLTK.
</li>

<li>
<strong>Ride Together</strong> – Smart carpooling system designed with
user-centered UI/UX principles.
</li>

</ul>

<p>
I also published a <strong>research paper titled
"Heart Stroke Prediction Using Neural Networks"</strong> in
<strong> IJACEN (May 2025)</strong> focusing on early stroke prediction
using neural network models.
</p>

<p>
Along with technical work, I actively participate in sports and have won
<strong> medals in badminton and cricket competitions</strong>.
</p>

<p>
I continuously improve my skills through certifications from platforms
like <strong>Coursera, Microsoft, Scaler Academy, and IIT Bombay</strong>.
</p>

</div>

{/* RIGHT SIDE INFO CARDS */}

<div className="grid grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
<h3 className="text-3xl font-bold text-blue-500">4+</h3>
<p className="text-gray-600">Major Projects</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
<h3 className="text-3xl font-bold text-blue-500">5+</h3>
<p className="text-gray-600">Certifications</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
<h3 className="text-3xl font-bold text-blue-500">1</h3>
<p className="text-gray-600">Research Paper</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
<h3 className="text-3xl font-bold text-blue-500">4</h3>
<p className="text-gray-600">Sports Medals</p>
</div>

</div>

</div>

</section>

  );
}

export default About;