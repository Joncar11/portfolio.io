// src/components/About.js
import React from 'react';

const About = () => {
    return (
        <section id="about" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>About Me</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                <div style={{ flex: '1', padding: '10px' }}>
                    <p>Hello! I'm Carl Jones. Full stak web developer from Tempe, AZ. </p>
                    <p>With a decade of web development experience, delivering well designed websites and apps, on-time and on budget.</p>
                    <p>Experience with but certainly not limited to:PHP, Laravel, React, Next.js, Bootstrap, Vue.js (with TypeScript), Docker, MySQL, SQL, NoSQL, JavaScript, AJAX, .NET, C#, jQuery, HTML5, CSS3, Git, Salesforce, HubSpot, WordPress, WooCommerce, cPanel, Jira, Bitbucket, Confluence, Technical Support, Service Now, Workday, Windows, Tableau, Visio, SaaS, Unit Testing, AWS, RESTful APIs, Adobe, Figma  </p>
                </div>
                <div style={{ flex: '1', padding: '10px' }}>
                    <img 
                        src="path/to/your/image.jpg"  // Replace with your image path
                        alt="About Me"
                        style={{ width: '100%', borderRadius: '10px' }} 
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
