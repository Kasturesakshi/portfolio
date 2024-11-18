import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Sakshi Revan Kasture</h1>
        <p>CSE undergraduate student </p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
            I am Sakshi kasture, Pursuing B.Tech degree in D Y Patil college of engineering and technology, kolhapur.
            I'm computer science engineering final year student. Eager to apply academic knowledge to real world 
            applications and continuously develop new skills in engineering technologies.
        </p>
      </section>


      <section className="Education">
        <h2>Education</h2>
        <div className="Education">
          <h5>"D Y Patil college of engineering and technology, kolhapur</h5>

         <h6> B.Tech in Computer Science and Engineerinng (2021-2025)</h6> 

          <h5> HSC examination (2021) 85.84%</h5>
          <h5> SSC examination (2019) 84.80%</h5>
           
        </div>
        </section>





      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Php</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>"Memory Maker Website"</h3>
          <p>Created an Memory Makers website using HTML and CSS for the fronted and manage data using PHP 
            and MySQL. PHP used for the backend and MySQL for database connectivity. This project allow user 
            to manage, and book the events as per their date, website can manage, organise and book events 
            successfully. </p>
          <a href="https://github.com/Kasturesakshi/project_DYPCET/tree/main">View Project</a>
        </div>
        <div className="project-card">
          <h3>Color detection</h3>
          <p>  
            Created an color-detection project using python programming language. This project can identify the 
            different colors of the any img given by the user in standard rage, which makes easy to the user to 
            identify different shades of colors.</p>
          
        </div>
      </section>





      <section className="Certification">
        <h2>Certification</h2>
        <div className="certificates">
          <h3>"CISCO Networking Academy "</h3>
          <p>Successfully achieved student level credential for completing the Introduction to Cybersecurity 
          course. </p>
        </div>

        <div className="certificates">
          <h3>"AWS Academy Graduate "</h3>
          <p> Successfully achieved student level credential for completing the AWS Academy Cloud Foundations
          course.  </p>
        </div>
        </section>


        <section className="Professional Experience">
        <h2>Internships</h2>
        <div className="Internships">
          <h3>"Revolution IT solutions, Kolhapur, Maharashtra"</h3>
          <p> I have done 1 month internship in "Revolutions IT solutions" with domain Machine learning with 
          Python in 2023. During the internship I complete one project which is "Spam Detection". </p>
        </div>
        </section>



      <footer className="footer">
        <p>Connect with me:</p>
        <a href="www.linkedin.com/in/sakshi-kasture-a62b13230" target="_blank" rel="Sakshi kasture">LinkedIn</a> |
        <a href="https://github.com/Kasturesakshi/project_DYPCET/tree/main" target="_blank" rel="Sakshi Kasture"> GitHub</a>
      </footer>
    </div>
  );
}

export default App;
