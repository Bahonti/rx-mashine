/*  Популярные магазины  */
import React, { useState } from "react";
import "./style.css";
import "../../../../style/index.css";
import image from "../../../../images/images";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Popup from "reactjs-popup";
import "swiper/swiper-bundle.css";
import BestOfferItem from "../../../../components/BestOfferItem";

SwiperCore.use([Navigation]);
const POSITION_TYPES = ["right center"];

const BestOffer = () => {
  const [tab, setTab] = useState(1);
  const data = getData();
  const itemPerPage = 4;
  return (
    <div className="container best">
      <div className="popularStores__h4">
        <h4>Лучшие предложение</h4>
        <Popup
          trigger={open => <button className="tooltip__button">?</button>}
          position="right center"
          contentStyle={{ background: "rgba(0, 0, 43, 0.2)" }}
          on={["hover", "focus"]}
          closeOnDocumentClick
        >
          <p className="popup-content__p">
            Представлены объявления
            <br /> с наибольшим количеством
            <br /> просмотров
          </p>
        </Popup>
      </div>
      <div className="bestOffer__tab">
        <span className={tab === 1 ? "active" : ""} onClick={() => setTab(1)}>
          Аренда
        </span>
        <span className={tab === 2 ? "active" : ""} onClick={() => setTab(2)}>
          Продажа
        </span>
        <span className={tab === 3 ? "active" : ""} onClick={() => setTab(3)}>
          Перевозки
        </span>
        <span className={tab === 4 ? "active" : ""} onClick={() => setTab(4)}>
          Заявки
        </span>
      </div>
      {tab == 1 && (
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
                  <div className="bestOffer">
                    {data
                      .slice(
                        swiperIterationIndex * itemPerPage,
                        (swiperIterationIndex + 1) * itemPerPage,
                      )
                      .map(bestOfferItem => {
                        return (
                          <BestOfferItem
                            img={bestOfferItem.img}
                            title={bestOfferItem.title}
                            used={bestOfferItem.used}
                            name={bestOfferItem.name}
                            price={bestOfferItem.price}
                            time={bestOfferItem.time}
                            adress={bestOfferItem.adress}
                          />
                        );
                      })}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}

      {tab == 2 && (
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
                  <div className="bestOffer">
                    {data
                      .slice(
                        swiperIterationIndex * itemPerPage,
                        (swiperIterationIndex + 1) * itemPerPage,
                      )
                      .map(bestOfferItem => {
                        return (
                          <BestOfferItem
                            img={bestOfferItem.img}
                            title={bestOfferItem.title}
                            used={bestOfferItem.used}
                            name={bestOfferItem.name}
                            price={bestOfferItem.price}
                            time={bestOfferItem.time}
                            adress={bestOfferItem.adress}
                          />
                        );
                      })}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
      {tab == 3 && (
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
                  <div className="bestOffer">
                    {data
                      .slice(
                        swiperIterationIndex * itemPerPage,
                        (swiperIterationIndex + 1) * itemPerPage,
                      )
                      .map(bestOfferItem => {
                        return (
                          <BestOfferItem
                            img={bestOfferItem.img}
                            title={bestOfferItem.title}
                            used={bestOfferItem.used}
                            name={bestOfferItem.name}
                            price={bestOfferItem.price}
                            time={bestOfferItem.time}
                            adress={bestOfferItem.adress}
                          />
                        );
                      })}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
      {tab == 4 && <div>Tab4</div>}
    </div>
  );
};

function getData() {
  return [
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
    {
      img: "/images/trec.png",
      title: "VOLVO FH 13-440",
      used: "Б/У",
      name: "Бортовой грузовик",
      price: "24 569 000 ₽",
      time: "8 декабря 18:37",
      adress: "Москва",
    },
  ];
}

export default BestOffer;
