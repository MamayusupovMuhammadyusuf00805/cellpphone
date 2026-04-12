import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section className="about-story">
      <div className="container story-container">
        
        <div className="story-content">
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by 
            wide range of tailored marketing, data and service solutions, 
            Exclusive has 10,500 sellers and 300 brands and serves 3 
            millions customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a 
            very fast. Exclusive offers a diverse assortment in categories 
            ranging from consumer.
          </p>
        </div>
        <div className="story-image">
          <img src="public/imgs/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png" alt="Two women shopping" />
        </div>
      </div>
    </section>
  );
};

export default About;