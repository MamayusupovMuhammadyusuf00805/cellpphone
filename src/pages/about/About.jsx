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
          <img src="/imgs/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png" alt="Two women shopping" />
        </div>
      </div>
      <div className="customer">
        <div className="container">
            <div className="subscriber">
                    <img src="public/imgs/Services.png" alt="" />
                    <h2>10.5k </h2>
                    <p>Sallers active our site</p>
            </div>
            <div className="subscriber">
                <img src="public/imgs/Services(2).png" alt="" />
                <h2>33k</h2>
                <p>Mopnthly Produduct Sale</p>
            </div>
            <div className="subscriber">
                <img src="public/imgs/Services(2).png" alt="" />
                <h2>45.5k</h2>
                <p>Customer active in our site</p>
            </div>
            <div className="subscriber">
                <img src="public/imgs/Services(3).png" alt="" />
                <h2>25k</h2>
                <p>Anual gross sale in our site</p>
            </div>
        </div>
      </div>
      <div className="member">
        <div className="container">
            <div className="members">
                <img src="public/imgs/Frame 874.png" alt="" />
                <h2>Tom Cruise</h2>
                <p>Founder & Chairman</p>
                <div className="media">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div className="members">
                <img src="public/imgs/Frame 875.png" alt="" />
                <h2>Emma Watson</h2>
                <p>Managing Director</p>
                   <div className="media">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div className="members">
                <img src="public/imgs/Frame 876.png" alt="" />
                <h2>Will Smith</h2>
                <p>Product Designer</p>
                  <div className="media">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
      </div>
      <div className="money">
        <div className="container">
            <div className="cash">
                <img src="public/imgs/Services(4).png" alt="" />
                <h2>FREE AND FAST DELIVERY</h2>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div className="cash">
                <img src="public/imgs/Services(5).png" alt="" />
                <h2>24/7 CUSTOMER SERVICE</h2>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className="cash">
                <img src="public/imgs/Services(6).png" alt="" />
                <h2>MONEY BACK GUARANTEE</h2>
                <p>We return money within 30 days</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;