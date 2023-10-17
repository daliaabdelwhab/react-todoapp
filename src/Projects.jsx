import React from 'react';
import './Projects.css';
import Card from './Card';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="card-container">
        <Card
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image="path/to/image1.jpg"
        />
        <Card
          title="Project 2"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
          image="path/to/image2.jpg"
        />
        {/* Add more Card components as needed */}
      </div>
    </section>
  );
};

export default Projects;