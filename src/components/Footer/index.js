import React from "react";
import logo from "../../images/big-logo.png";
import "./style.css";
import "../../style/index.css";
import image from "../../images/images";

const Footer = () => {
  return (
    <footer>
      <div className="footer__main">
        <div className="container">
          <div className="footer">
            <div className="footer__logo">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="footer__logo-text">
                <p>
                  Площадка по продаже, аренде, перевозкам коммерческого
                  транспорта, грузовиков, спецтехники, сельхозтехники и
                  запчастей.
                </p>
                <a href="">Москва</a>
              </div>
            </div>
            <div className="footer__menu">
              <span>Услуги</span>
              <ul>
                <li>
                  <a href="">Аренда</a>
                </li>
                <li>
                  <a href="">Продажа</a>
                </li>
                <li>
                  <a href="">Перевозка</a>
                </li>
                <li>
                  <a href="">Заявки</a>
                </li>
              </ul>
            </div>
            <div className="footer__menu">
              <span>Сотрудничество</span>
              <ul>
                <li>
                  <a href="">Реклама</a>
                </li>
                <li>
                  <a href="">Разместить объявление</a>
                </li>
                <li>
                  <a href="">Оставить заявку</a>
                </li>
                <li className="media__title">Мы в соцсетях</li>
                <li className="media__block">
                  <a href="">
                    <img src={image("face")} alt="" />
                  </a>
                  <a href="">
                    <img src={image("inst")} alt="" />
                  </a>
                  <a href="">
                    <img src={image("vk")} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__menu">
              <span>Контакты</span>
              <ul>
                <li>
                  <a href="" className="footer__info">
                    +7 902 704 44 99{" "}
                  </a>
                </li>
                <li>
                  <a href="" className="footer__info">
                    info@rx-machine.ru
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__img">
              <img src={image("footerImg")} alt="#" />
            </div>
          </div>
          <div className="footer footer__text">
            <p>
              <img src={image("footImg")} alt="" />
              RXMACHINE 2020
            </p>
            <p>Пользовательское соглашение</p>
            <p>Договор оферты</p>
            <p>Политика конфиденциальности</p>
          </div>
        </div>
      </div>
      <div className="footer__hiden">
        <div className="container">
          <div className="footer__catalog buttom__menu">
            <img src={image("ret1")} />
            <p>Каталог</p>
          </div>
          <div className="footer__ad buttom__menu">
            <img src={image("ret2")} />
            <p>Объявление</p>
          </div>
          <div className="footer__favorites buttom__menu">
            <img src={image("ret3")} />
            <p>Избранное</p>
          </div>
          <div className="footer__signin buttom__menu">
            <img src={image("ret4")} />
            <p>Войти</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
