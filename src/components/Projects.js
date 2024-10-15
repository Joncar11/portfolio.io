// src/components/Projects.js
// src/components/Projects.js
import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'React To-Do App',
            description: 'To-Do List with Local Storage',
            embedCode: (
                <iframe
                    height="300"
                    style={{ width: '100%' }}
                    scrolling="no"
                    title="React To-Do App"
                    src="https://codepen.io/cjdevtech/embed/wvVJbRY?default-tab=result"
                    frameBorder="no"
                    allowTransparency="true"
                    allowFullScreen="true"
                    loading="lazy"
                ></iframe>
            ),
        },
        {
            title: 'React OpenWeather API Call',
            description: 'OpenWeatherAPI call based on City Input',
            embedCode: (
                <iframe
                    height="300"
                    style={{ width: '100%' }}
                    scrolling="no"
                    title="React OpenWeather API Call"
                    src="https://codepen.io/cjdevtech/embed/bGXqPbz?default-tab=result"
                    frameBorder="no"
                    allowTransparency="true"
                    allowFullScreen="true"
                    loading="lazy"
                ></iframe>
            ),
        },
        {
            title: 'React Current Time App',
            description: 'React and Babel to display current local time',
            embedCode: (
                <iframe
                    height="300"
                    style={{ width: '100%' }}
                    scrolling="no"
                    title="My CodePen Project"
                    src="https://codepen.io/cjdevtech/embed/JjQPmdq?default-tab=result"
                    frameBorder="no"
                    allowTransparency="true"
                    allowFullScreen="true"
                    loading="lazy"
                ></iframe>
            ),
        },
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.embedCode}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;


