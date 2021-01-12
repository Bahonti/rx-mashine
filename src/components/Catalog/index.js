import React, { useState } from "react";
import "./style.css";

const Catolog = ({ className }) => {
  const [tab, setTab] = useState(1);
  return (
    <div className={className}>
      <div className="catalog">
        <ul className="catalog__menu">
          <li className={tab === 1 ? "active1" : ""} onClick={() => setTab(1)}>
            <a>Бетонное оборудование</a>
          </li>
          <li className={tab === 2 ? "active1" : ""} onClick={() => setTab(2)}>
            <a>Грузовики, кузова</a>
          </li>
          <li className={tab === 3 ? "active1" : ""} onClick={() => setTab(3)}>
            <a>Дорожна техника</a>
          </li>
          <li className={tab === 4 ? "active1" : ""} onClick={() => setTab(4)}>
            <a>Землеройная техника</a>
          </li>
          <li className={tab === 5 ? "active1" : ""} onClick={() => setTab(5)}>
            <a>Карьерная техника</a>
          </li>
          <li className={tab === 6 ? "active1" : ""} onClick={() => setTab(6)}>
            <a>Коммунальная техника</a>
          </li>
          <li className={tab === 7 ? "active1" : ""} onClick={() => setTab(7)}>
            <a>Лесная техника</a>
          </li>
          <li className={tab === 8 ? "active1" : ""} onClick={() => setTab(8)}>
            <a> Мини-техника</a>
          </li>
          <li className={tab === 9 ? "active1" : ""} onClick={() => setTab(9)}>
            <a>Мини-техника</a>
          </li>
          <li
            className={tab === 10 ? "active1" : ""}
            onClick={() => setTab(10)}
          >
            <a>Подъемная техника</a>
          </li>
          <li
            className={tab === 11 ? "active1" : ""}
            onClick={() => setTab(11)}
          >
            <a>Полуприцепы</a>
          </li>
          <li
            className={tab === 12 ? "active1" : ""}
            onClick={() => setTab(12)}
          >
            <a>Прицепы</a>
          </li>
          <li
            className={tab === 13 ? "active1" : ""}
            onClick={() => setTab(13)}
          >
            <a>Прочая техника</a>
          </li>
          <li
            className={tab === 14 ? "active1" : ""}
            onClick={() => setTab(14)}
          >
            <a>Складская техника</a>
          </li>
          <li
            className={tab === 15 ? "active1" : ""}
            onClick={() => setTab(15)}
          >
            <a>Специальные автомобили</a>
          </li>
          <li
            className={tab === 16 ? "active1" : ""}
            onClick={() => setTab(16)}
          >
            <a>Строительное оборудование</a>
          </li>
        </ul>
        {tab == 1 && (
          <div className="catalog__data">
            <div className="data__block">
              <span>А</span>
              <p>Автобетоносмесители, автомиксеры</p>
              <p>Асфальтобетонные, асфальтные заводы</p>
              <span>Б</span>
              <p>Бетонные заводы, мобильные БСУ</p>
              <p>Бетононасосы, автобетононасосы</p>
              <p>Бетонораздаточные стрелы</p>
              <p>
                Бетоносмесительные установки БСУ, <br />
                стационарные бетоносмесители
              </p>
              <p>Бетоноукладчики</p>
              <p>Битумные установки</p>
              <span>В</span>
              <p>Вибраторы для бетона глубинные</p>
              <p>Вибропрессы</p>
              <p>Виброрейки для бетона</p>
              <span>З</span>
              <p>Затирочные машины по бетону</p>
            </div>
            <div className="data__block">
              <span>П</span>
              <p>
                Парогенераторы промышленные,
                <br /> термомасляные нагреватели
              </p>
              <span>Р</span>
              <p>Растворонасосы</p>
              <p>Растворосмесители</p>
              <span>С</span>
              <p>Силосы для цемента</p>
              <p>Стационарные бетононасосы</p>
              <span>Т</span>
              <p>Торкрет-установки, шприц-машины</p>
              <span>Ш</span>
              <p>Штукатурные станции</p>
            </div>
          </div>
        )}
        {tab == 2 && (
          <div className="catalog__data">
            <div>2</div>
          </div>
        )}
        {tab == 3 && (
          <div className="catalog__data">
            <div>3</div>
          </div>
        )}
        {tab == 4 && (
          <div className="catalog__data">
            <div>4</div>
          </div>
        )}
        {tab == 5 && (
          <div className="catalog__data">
            <div>5</div>
          </div>
        )}
        {tab == 6 && (
          <div className="catalog__data">
            <div>6</div>
          </div>
        )}
        {tab == 7 && (
          <div className="catalog__data">
            <div>7</div>
          </div>
        )}
        {tab == 8 && (
          <div className="catalog__data">
            <div>8</div>
          </div>
        )}
        {tab == 9 && (
          <div className="catalog__data">
            <div>9</div>
          </div>
        )}
        {tab == 10 && (
          <div className="catalog__data">
            <div>10</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Catolog;
