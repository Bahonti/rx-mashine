/*  Популярные магазины  */
import React from "react";
import "./style.css";
import "../../../../style/index.css";
import image from "../../../../images/images";
import Popup from "reactjs-popup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";
import PopularStoreItem from "../../../../components/PopularStoreItem";

SwiperCore.use([Navigation]);
const PopularStores = () => {
  const data = getData();
  const itemPerPage = 3;
  return (
    <div className="popularStores">
      <div className="container">
        <div className="popularStores__h4">
          <h4>Популярные магазины</h4>
          <Popup
            trigger={open => <button className="tooltip__button">?</button>}
            position="right center"
            contentStyle={{ background: "rgba(0, 0, 43, 0.2)" }}
            on={["hover", "focus"]}
            closeOnDocumentClick
          >
            <p className="popup-content__p">
              Представлены магазины с
              <br /> наибольшим количеством
              <br /> объявлений и просмотров
            </p>
          </Popup>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {new Array(Math.ceil(data.length / itemPerPage))
            .fill(undefined)
            .map((swiperIteration, swiperIterationIndex) => {
              return (
                <SwiperSlide>
                  <div className="popularStores__block">
                    {data
                      .slice(
                        swiperIterationIndex * itemPerPage,
                        (swiperIterationIndex + 1) * itemPerPage,
                      )
                      .map(popularStoresItem => {
                        return (
                          <PopularStoreItem
                            name={popularStoresItem.name}
                            signature={popularStoresItem.signature}
                            logo={popularStoresItem.logo}
                            photos={popularStoresItem.photos}
                          />
                        );
                      })}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

function getData() {
  return [
    {
      name: "Caterpillar",
      signature: "подпись",
      logo: "/images/cat.png",
      photos: [
        {
          url: "/images/frame1.png",
        },
        {
          url: "/images/frame2.png",
        },
        {
          url: "/images/frame3.png",
        },
      ],
    },
    {
      name: "Volvo",
      signature: "подпись",
      logo: "/images/volvo.png",
      photos: [
        {
          url: "/images/frame1.png",
        },
        {
          url: "/images/frame2.png",
        },
        {
          url: "/images/frame3.png",
        },
      ],
    },
    {
      name: "Metong",
      signature: "подпись",
      logo: "/images/metong.png",
      photos: [
        {
          url: "/images/frame1.png",
        },
        {
          url: "/images/frame2.png",
        },
        {
          url: "/images/frame3.png",
        },
      ],
    },
    {
      name: "Caterpillar",
      signature: "подпись",
      logo: "/images/cat.png",
      photos: [
        {
          url: "/images/frame1.png",
        },
        {
          url: "/images/frame2.png",
        },
        {
          url: "/images/frame3.png",
        },
      ],
    },
    {
      name: "Volvo",
      signature: "подпись",
      logo: "/images/volvo.png",
      photos: [
        {
          url: "/images/frame1.png",
        },
        {
          url: "/images/frame2.png",
        },
        {
          url: "/images/frame3.png",
        },
      ],
    },
    {
      name: "Metong",
      signature: "подпись",
      logo: "/images/metong.png",
      photos: [
        {
          url: "/images/frame1.png",
        },
        {
          url: "/images/frame2.png",
        },
        {
          url: "/images/frame3.png",
        },
      ],
    },
    {
      name: "Caterpillar",
      signature: "подпись",
      logo: "/images/cat.png",
      photos: [
        {
          url: "/images/frame1.png",
        },
        {
          url: "/images/frame2.png",
        },
        {
          url: "/images/frame3.png",
        },
      ],
    },
    {
      name: "Volvo",
      signature: "подпись",
      logo: "/images/volvo.png",
      photos: [
        {
          url: "/images/frame1.png",
        },
        {
          url: "/images/frame2.png",
        },
        {
          url: "/images/frame3.png",
        },
      ],
    },
    {
      name: "Metong",
      signature: "подпись",
      logo: "/images/metong.png",
      photos: [
        {
          url: "/images/frame1.png",
        },
        {
          url: "/images/frame2.png",
        },
        {
          url: "/images/frame3.png",
        },
      ],
    },
  ];
}

export default PopularStores;
