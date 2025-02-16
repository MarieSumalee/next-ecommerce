import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';
import React from 'react';
SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h1>Welcome to the official website of</h1>
                <h2>The Farmer Chefs</h2>
                <a href="#" className="btn-shop">
                  <i className="icon-right" />
                  Read more
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Top Chef Stories</h2>
                <h3>Inspirational stories of the top Thai chefs from all over the world. We are committed to providing you with the finest culinary experience. Chef Thuleewan has tirelessly spent numerous hours searching for the top Thai chefs from all over the world and interviewing them. She has created a platform where you can relish the most authentic Thai cuisine crafted by these amazing exceptional chefs. We hope you have a great time browsing our website. If you have any queries or would like to be featured as one of our best chefs, please feel free to contact us. We are eagerly waiting to hear from you.</h3>
                <br></br>
                <h3>Thank you for visiting our page.</h3>
                <br></br>
                <h3>Chef Thuleewan Boonyaratana -
                  Author of The Farmer Chefs' Book</h3><br></br>
                <h3>thefarmerchefs@gmail.com</h3>

                <br></br><br></br>
                <a href="#" className="btn-shop">
                  <i className="icon-right" />
                  Read more
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
};

export default PageIntro