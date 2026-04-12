import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="homepage">
      <div className="container">
        <div className="hero">
          <div className="lefth">
            <p>
              Woman’s Fashion <i class="fa-solid fa-chevron-right"></i>
            </p>
            <p>
              Men’s Fashion <i class="fa-solid fa-chevron-right"></i>
            </p>
            <p>Electronics</p>
            <p>Home & Lifestyle</p>
            <p>Medicine</p>
            <p>Sports & Outdoor</p>
            <p>Baby’s & Toys</p>
            <p>Groceries & Pets</p>
            <p>Health & Beauty</p>
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
            <div className="flex">
              <div className="flex1">
                <button>-40%</button>
                <div className="ic">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-eye"></i>
                </div>
              </div>
              <img src="public/imgs/Frame 611.png" alt="" />
              <p>HAVIT HV-G92 Gamepad</p>
              <span>$120</span>
              <div className="star">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div className="flex">
              <div className="flex1">
                <button>-35%</button>
                <div className="ic">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-eye"></i>
                </div>
              </div>
              <img src="public/imgs/ak-900-01-500x500 1.png" alt="" />
              <p>AK-900 Wired Keyboard</p>
              <span>$960</span>
              <div className="star">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div className="flex">
              <div className="flex1">
                <button>-30%</button>
                <div className="ic">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-eye"></i>
                </div>
              </div>
              <img src="public/imgs/Frame 613.png" alt="" />
              <p>IPS LCD Gaming Monitor</p>
              <span>$370</span>
              <div className="star">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div className="flex">
              <div className="flex1">
                <button>-25%</button>
                <div className="ic">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-eye"></i>
                </div>
              </div>
              <img src="public/imgs/Frame 614.png" alt="" />
              <p>S-Series Comfort Chair </p>
              <span>$375</span>
              <div className="star">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
            </div>
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
              <div className="product1">
                <div className="heart">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-eye"></i>
                </div>
                <img src="public/imgs/Frame 605.png" alt="" />
                <p>The north coat</p>
                <span>$260</span>
              </div>
              <div className="product1">
                <div className="heart">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-eye"></i>
                </div>
                <img src="public/imgs/Frame 606.png" alt="" />
                <p>Gucci duffle bag</p>
                <span>$960</span>
              </div>
              <div className="product1">
                <div className="heart">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-eye"></i>
                </div>
                <img src="public/imgs/Frame 610.png" alt="" />
                <p>RGB liquid CPU Cooler</p>
                <span>$160</span>
              </div>
              <div className="product1">
                <div className="heart">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-regular fa-eye"></i>
                </div>
                <img src="public/imgs/Frame 612.png" alt="" />
                <p>Small BookSelf</p>
                <span>$360</span>
              </div>
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
            <div className="all1">
              <div className="i">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-eye"></i>
              </div>
              <img src="public/imgs/Frame 604.png" alt="" />
              <p>Breed Dry Dog Food</p>
              <span>$100</span>
            </div>
            <div className="all1">
              <div className="i">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-eye"></i>
              </div>
              <img src="public/imgs/Frame 604(1).png" alt="" />
              <p>CANON EOS DSLR Camera</p>
              <span>$360</span>
            </div>
            <div className="all1">
              <div className="i">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-eye"></i>
              </div>
              <img src="public/imgs/Frame 604(2).png" alt="" />
              <p>ASUS FHD Gaming Laptop</p>
              <span>$700</span>
            </div>
            <div className="all1">
              <div className="i">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-eye"></i>
              </div>
              <img
                src="public/imgs/curology-j7pKVQrTUsM-unsplash 1.png"
                alt=""
              />
              <p>Curology Product Set </p>
              <span>$500</span>
            </div>
            <div className="all1">
              <div className="i">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-eye"></i>
              </div>
              <img src="public/imgs/Frame 608.png" alt="" />
              <p>Kids Electric Car</p>
              <span>$960</span>
            </div>
            <div className="all1">
              <div className="i">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-eye"></i>
              </div>
              <img src="public/imgs/Frame 608(1).png" alt="" />
              <p>Jr. Zoom Soccer Cleats</p>
              <span>$1160</span>
            </div>
            <div className="all1">
              <div className="i">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-eye"></i>
              </div>
              <img src="public/imgs/Frame 608(2).png" alt="" />
              <p>GP11 Shooter USB Gamepad</p>
              <span>$660</span>
            </div>
            <div className="all1">
              <div className="i">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-eye"></i>
              </div>
              <img src="public/imgs/Frame 608(3).png" alt="" />
              <p>Quilted Satin Jacket</p>
              <span>$660</span>
            </div>
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
                <img src="public/imgs/ps5-slim-goedkope-playstation_large 1.png" alt="" />
            </div>
            <div className="rightp">
                <img src="public/imgs/attractive-woman-wearing-hat-posing-black-background 1.png" alt="" />
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
