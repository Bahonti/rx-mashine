import React, { useState } from "react";
import logo from "../../images/logo.png";
import Button from "../Button";
import Input from "../Input";
import "./style.css";
import image from "../../images/images";
import Popup from "reactjs-popup";
import AuthForm from "../AuthForm";
import RegisterForm from "../RegisterForm";
import SearchSelect from "../SearchSelect";
import Catalog from "../Catalog";

const Header = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [value, setValue] = useState({ value: "moskva", label: "Москва" });
  const [classCatalog, setClassCatalog] = useState(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <header className="header">
      <div className="header__contacts">
        <div className="container d-flex">
          <ul className="contacts">
            <li className="adress">
              <div className="tooltipBoundary">
                <button
                  type="button"
                  className="adress__button"
                  onClick={() => setOpen(true)}
                >
                  {value.label}
                </button>
                <Popup
                  open={open}
                  contentStyle={{
                    background: "#01012C",
                  }}
                  arrowStyle={{ color: "#01012C" }}
                  // closeOnDocumentClick
                  onClose={closeModal}
                  position="bottom left"
                >
                  <SearchSelect
                    closeModal={closeModal}
                    onChange={val => setValue(val)}
                  />
                </Popup>
              </div>
            </li>
            <li>
              <a>
                <img src={image("mail")} alt="" />
                info@rx-machine.ru
              </a>
            </li>
            <li className="contact">
              <a>
                <img src={image("phone")} alt="" />
                +7 902 704 44 99{" "}
              </a>
            </li>
          </ul>
          <ul className="contacts buttons">
            <li>
              <Button variant="primary">Разместить объявление</Button>
            </li>
            <li className="header__btn">
              <Button onClick={() => setOpenAuth(true)}>
                <img src={image("enter")} alt="#" />
                Войти
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container d-flex">
        <ul className="menu">
          <li className="headder__logo">
            <img src={logo} alt="" />
          </li>
          <li
            className={
              classCatalog === true ? "menu__catalog1" : "menu__catalog"
            }
            onClick={() =>
              classCatalog === false
                ? setClassCatalog(true)
                : setClassCatalog(false)
            }
          >
            {classCatalog === true ? (
              <img src={image("x")} alt="#" />
            ) : (
              <img src={image("ret1")} alt="#" />
            )}
            <a>Каталог</a>
          </li>
          <li className="menu__input">
            <Input />
          </li>
          <li className="menu__link hidden">
            <a>
              <img src={image("rent")} alt="" />
              <img src={image("rent1")} alt="" />
              Аренда
            </a>
          </li>
          <li className="menu__link hidden">
            <a>
              <img src={image("sale")} alt="" />
              <img src={image("sale1")} alt="" />
              Продажа
            </a>
          </li>
          <li className="menu__link hidden">
            <a>
              <img src={image("shipping")} alt="" />
              <img src={image("shipping1")} alt="" />
              Перевозка
            </a>
          </li>
          <li className="menu__link hidden">
            <a>
              <img src={image("kal")} alt="" />
              <img src={image("kal1")} alt="" />
              Заявки
            </a>
          </li>
          <li className="favorites hidden">
            <a>
              <img src={image("zhul")} alt="" />
              Избранное
            </a>
          </li>
        </ul>
      </div>
      <div className="header__hidden">
        <div className="container">
          <ul className="menu hidden-menu">
            <li className="menu__link">
              <a>
                <img src={image("rent")} alt="" />
                Аренда
              </a>
            </li>
            <li className="menu__link">
              <a>
                <img src={image("sale")} alt="" />
                Продажа
              </a>
            </li>
            <li className="menu__link">
              <a>
                <img src={image("shipping")} alt="" />
                Перевозка
              </a>
            </li>
            <li className="menu__link">
              <a>
                <img src={image("kal")} alt="" />
                Заявки
              </a>
            </li>
          </ul>
        </div>
      </div>
      <AuthForm
        openAuth={openAuth}
        setOpenAuth={setOpenAuth}
        setOpenRegister={setOpenRegister}
      />
      <RegisterForm
        openRegister={openRegister}
        setOpenRegister={setOpenRegister}
      />
      <Catalog
        className={classCatalog === true ? "catalog__block" : "catalog__none"}
        setClassCatalog={setClassCatalog}
      />
    </header>
  );
};

export default Header;
