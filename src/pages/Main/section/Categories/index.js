import React from "react";
import "./style.css";
import "../../../../style/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import CategoryItem from "../../../../components/CategoryItem";

SwiperCore.use([Navigation]);
const Categories = () => {
  const itemPerPage = 8;
  const data = getData();
  return (
    <div className="categories">
      <div className="container">
        <h4>Категории</h4>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={() => null}
          onSwiper={swiper => null}
        >
          {new Array(Math.ceil(data.length / itemPerPage))
            .fill(undefined)
            .map((swiperIteration, swiperIterationIndex) => {
              return (
                <SwiperSlide>
                  <div className="categories__blocks">
                    {data
                      .slice(
                        swiperIterationIndex * itemPerPage,
                        (swiperIterationIndex + 1) * itemPerPage,
                      )
                      .map(categotyItem => {
                        return (
                          <CategoryItem
                            name={categotyItem.name}
                            count={categotyItem.count}
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
    { name: "Бетонное оборудование", count: "63 159" },
    { name: "Буровое оборудвание", count: "21 431" },
    { name: "Грузовики, кузова", count: "23 456" },
    { name: "Дорожная техника", count: "10 709" },
    { name: "Землеройная техника", count: "21 431" },
    { name: "Карьерная техника", count: "63 159" },
    { name: "Коммунальная техника", count: "23 456" },
    { name: "Лесная техника", count: "459" },
    { name: "Бетонное оборудование", count: "63 159" },
    { name: "Буровое оборудвание", count: "21 431" },
    { name: "Грузовики, кузова", count: "23 456" },
    { name: "Дорожная техника", count: "10 709" },
    { name: "Землеройная техника", count: "21 431" },
    { name: "Карьерная техника", count: "63 159" },
    { name: "Коммунальная техника", count: "23 456" },
    { name: "Лесная техника", count: "459" },
    { name: "Бетонное оборудование", count: "63 159" },
    { name: "Буровое оборудвание", count: "21 431" },
    { name: "Грузовики, кузова", count: "23 456" },
    { name: "Дорожная техника", count: "10 709" },
    { name: "Землеройная техника", count: "21 431" },
    { name: "Карьерная техника", count: "63 159" },
    { name: "Коммунальная техника", count: "23 456" },
    { name: "Лесная техника", count: "459" },
  ];
}

export default Categories;
