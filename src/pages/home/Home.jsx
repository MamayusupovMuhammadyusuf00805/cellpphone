import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Cards from "../../components/Cards";
import Products from "../../components/Products";
import Pros from "../../components/Pros";
import { Datacontext } from "../../App";
function Home() {
  const { datacategory } = useContext(Datacontext);
  console.log(datacategory);
  const {productdata} =useContext(Datacontext)
  return (
    <div className="homepage">
      <div className="container">
        <div className="hero">
          <div className="lefth">
            {datacategory?.map((item) => {
              return <p> <img src={item?.image} alt="" />{item?.title}</p>;
            })}
          </div>
          <div className="righth">
            <img src="/imgs/Frame 560.png" alt="" />
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container">
          <div className="header">
            <p className="day">Today’s</p>
            <div className="head">
              <h1>Flash Sales</h1>
              <div className="timeover">
                <div className="time1">
                  <p>Days</p>
                  <p>Hours</p>
                  <p>Minutes</p>
                  <p>Seconds</p>
                </div>
                <div className="time">
                  <h2>03</h2>
                  <h2>23</h2>
                  <h2>19</h2>
                  <h2>56</h2>
                </div>
              </div>
              <div className="arrows">
                <i class="fa-solid fa-arrow-left"></i>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flexbox">
            {
                productdata?.map((item)=>{
                    return <Cards item={item} />
                })
            }
           
          
          </div>
        </div>
        <div className="bt">
          <button>View All Products</button>
        </div>
        <div className="category">
          <div className="container">
            <div className="header1">
              <p className="cat">Categories</p>
              <div className="ar">
                <h2>Browse By Category</h2>
                <div className="icon">
                  <i class="fa-solid fa-arrow-left"></i>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="types">
              <div className="type1">
                <img src="public/imgs/Category-CellPhone.png" alt="" />
                <p>Phones</p>
              </div>
              <div className="type1">
                <img src="public/imgs/Category-Computer.png" alt="" />
                <p>Computers</p>
              </div>
              <div className="type1">
                <img src="public/imgs/Category-SmartWatch.png" alt="" />
                <p>SmartWatch</p>
              </div>
              <div className="type1">
                <img src="public/imgs/Category-Camera.png" alt="" />
                <p>Camera</p>
              </div>
              <div className="type1">
                <img src="public/imgs/Category-Headphone.png" alt="" />
                <p>HeadPhones</p>
              </div>
              <div className="type1">
                <img src="public/imgs/Category-Gamepad.png" alt="" />
                <p>Gaming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="container">
            <div className="header3">
              <p className="month">This Month</p>
              <div className="best">
                <h2>Best Selling Products</h2>
                <button>View All</button>
              </div>
            </div>
            <div className="product">
              <Pros />
              <Pros />
              <Pros />
              <Pros />
            </div>
            <div className="music">
              <img src="public/imgs/Frame 600.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <div className="header4">
            <p>Our Products</p>
            <div className="exploring">
              <h2>Explore Our Products</h2>
              <div className="icon">
                <i class="fa-solid fa-arrow-left"></i>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="allpro">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
          <div className="bt">
            <button>View All Products</button>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="container">
          <p>Featured</p>
          <h2>New Arrival</h2>
          <div className="perfume">
            <div className="leftp">
              <img
                src="public/imgs/ps5-slim-goedkope-playstation_large 1.png"
                alt=""
              />
            </div>
            <div className="rightp">
              <img
                src="public/imgs/attractive-woman-wearing-hat-posing-black-background 1.png"
                alt=""
              />
              <div className="rights">
                <img src="public/imgs/Frame 707.png" alt="" />
                <img src="public/imgs/Frame 706.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
