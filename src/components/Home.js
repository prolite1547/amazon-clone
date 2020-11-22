import React from "react";
import Product from "./Product";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id={1}
            title="AmazonBasics Wireless Computer Mouse with USB Nano Receiver - Black"
            price={12.99}
            rating={5}
            imageUrl="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UL960_FMwebp_QL65_.jpg"
          />

          <Product
            id={2}
            title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H"
            price={696.75}
            rating={5}
            imageUrl="https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title='Lenovo IdeaPad 3 14" Laptop, 14.0"'
            price={423.81}
            rating={4}
            imageUrl="https://m.media-amazon.com/images/I/71dqjxW8g5L._AC_UY218_.jpg"
          />
          <Product
            id={4}
            title='Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080)'
            price={729.0}
            rating={5}
            imageUrl="https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UY218_.jpg"
          />

          <Product
            id={5}
            title='ASUS VivoBook 17.3" FHD Widescreen LED Flagship Laptop Bundle'
            price={829.99}
            rating={4}
            imageUrl="https://m.media-amazon.com/images/I/51zbIZ-I1gL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title='HP Pavilion All-in-One 23.8" FHD IPS Touchscreen Widescreen LED Display'
            price={1149.0}
            rating={4}
            imageUrl="https://m.media-amazon.com/images/I/61L6qmfiwUL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
