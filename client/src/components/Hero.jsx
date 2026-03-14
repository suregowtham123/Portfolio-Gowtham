import React from "react";
import profile from "../assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {

return(

<section className="hero-section">

<div className="hero-container">

{/* LEFT SIDE */}

<div className="hero-content">

<p className="hero-tag">HELLO 👋</p>

<h1 className="hero-title">
I'm <span className="hero-highlight">Sure Gowtham</span>
</h1>

<h2 className="hero-role">
Full Stack Developer • Devops Engineer • AI Enthusiast • ML Explorer
</h2>

<p className="hero-desc">
Passionate about building scalable web applications and intelligent
AI systems. Experienced in full-stack development, machine learning
and cloud technologies.
</p>

{/* BUTTONS */}

<div className="hero-buttons">

<a href="#projects" className="btn btn-primary">
🚀 View Projects
</a>

<a href="/resume.pdf" download className="btn btn-outline">
⬇ Download Resume
</a>

</div>

{/* SOCIAL ICONS */}

<div className="hero-socials">

<a
href="https://www.linkedin.com/in/sure-gowtham-577692278/"
target="_blank"
rel="noreferrer"
>
<FaLinkedin/>
</a>

<a
href="https://github.com/suregowtham123"
target="_blank"
rel="noreferrer"
>
<FaGithub/>
</a>

<a href="mailto:suregowthamkumar@gmail.com">
<FaEnvelope/>
</a>

<a
href="https://leetcode.com/u/22bce1906/"
target="_blank"
rel="noreferrer"
>
<SiLeetcode/>
</a>

<a
href="https://www.naukri.com/mnjuser/profile?id=&altresid"
target="_blank"
rel="noreferrer"
className="social-text"
>
Naukri
</a>

<a
href="https://unstop.com/u/suregow34164"
target="_blank"
rel="noreferrer"
className="social-text"
>
Unstop
</a>

</div>

</div>

{/* RIGHT SIDE IMAGE */}

<div className="hero-image">

<img src={profile} alt="profile"/>

</div>

</div>

</section>

);

}

export default Hero;