import React, { useState } from 'react';
import styles from '../styles/TechStack.module.css';

const TechStack = () => {
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState('App Development');

  // Data for the technologies in each category
  const techData = {
    'App Development': [
      { name: 'Flutter', icon: '/Flutter 1.svg' },
      { name: 'Dart', icon: '/Dart 1.svg' },
      { name: 'Figma', icon: '/figma 1.svg' },
      { name: 'Postman', icon: '/postman 1.svg' },
    ],
    'Web Development': [
      { name: 'Html', icon: '/html 1.svg' },
      { name: 'Css', icon: '/css 1.svg' },
      { name: 'React', icon: '/reactjs 1.svg' },
      { name: 'Javascript', icon: '/javascript 2.svg' },
      { name: 'Node.js', icon: '/nodejs 1.svg' },
    ],
    'Graphic Designing': [
      { name: 'Photoshop', icon: '/photoshop 1.svg' },
      { name: 'Canva', icon: '/canva 1.svg' },
    ],
  };

  return (
    <section id="techstack" className={styles.techStack}>
      <h2 className={styles.title}>Our Tech Stack</h2>
      
      <div className={styles.buttonContainer}>
        {/* Buttons to switch between categories */}
        {Object.keys(techData).map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.iconContainer}>
        {/* Display technologies based on the selected category */}
        {techData[selectedCategory].map((tech, index) => (
          <div key={index} className={styles.techItem}>
            <img src={tech.icon} alt={tech.name} className={styles.techIcon} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;