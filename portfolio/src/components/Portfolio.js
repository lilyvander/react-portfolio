import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                <div className="project">
                    <img src="project1-image.jpg" alt="Project 1" />
                    <div className="project-details">
                        <h3>Project Recipes</h3>
                        <p>Built with JavaScript and APIs, an easy place to look for dinner and drink recipes.</p>
                        <div className="project-links">
                            <a href="project1-demo-url" target="_blank" rel="noopener noreferrer">Demo</a>
                            <a href="project1-github-url" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src="project2-image.jpg" alt="Project 2" />
                    <div className="project-details">
                        <h3>Project 2 Title</h3>
                        <p>Description of Project 2</p>
                        <div className="project-links">
                            <a href="project2-demo-url" target="_blank" rel="noopener noreferrer">Demo</a>
                            <a href="project2-github-url" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
