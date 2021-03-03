import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="134123"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="12341234"
            title="Nurxiovo 3 in 1 Stand Mixer 850W 6 Speed Tilt-Head Kitchen Standing Mixer with 6.5QT Stainless Steel Bowl, Dough Hook Whisk Beater, Meat Blender and Juice Extracter Black"
            price={123.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71oNeWl7JXL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Rosewood/Rosewood, One Size (S &L Bands Included)"
            price={134.16}
            image="https://images-na.ssl-images-amazon.com/images/I/91au8g2DhML._AC_.jpg"
            rating={4}
          />
          <Product
            title="All-new Echo (4th Gen) - Charcoal - bundle with Philips Hue Bulbs (2-pack)"
            price={99.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71jhi1UU7LL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            title="New Apple iPad Pro (11-inch, Wi-Fi, 1TB) - Silver (2nd Generation)"
            price={1279.0}
            image="https://m.media-amazon.com/images/I/81lqq8UF5ML._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title='Samsung 34" QLED incurvé CJ79 Series Thunderbolt 3'
            price={1172.11}
            image="https://images-na.ssl-images-amazon.com/images/I/914iLnXLtRL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
