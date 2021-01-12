import React, { useState } from "react";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import image from "../../images/images";

const RegisterForm = ({ openRegister, setOpenRegister }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));
  const [result, setResult] = useState(false);
  return (
    <Popup
      overlayStyle={{ background: "rgba(0, 0, 43, 0.5)" }}
      modal
      nested
      open={openRegister}
      onClose={() => {
        setOpenRegister(false);
        setResult(false);
      }}
    >
      {close =>
        !result ? (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="modal__title">
              <h5>Авторизация на</h5>
              <p className="modal__title__p">
                RX<span>MACHINE</span>
              </p>
            </div>
            <div className="content">
              <form onSubmit={handleSubmit(onSubmit)} className="modal__form">
                <input
                  name="firstName"
                  ref={register}
                  placeholder="Адрес электронной почты"
                  className="input__firstName modal__input"
                />
                <input
                  name="password"
                  ref={register}
                  placeholder="Пароль"
                  className="input__lastName modal__input"
                />
                <input
                  name="confirmPassword"
                  ref={register}
                  placeholder="Подтвердите пароль"
                  className="input__confirmPassword modal__input"
                />

                <button className="input__btn" onClick={() => setResult(true)}>
                  Зарегистрироваться
                </button>
                <span className="register__text">Уже есть аккаунт?</span>
                <a className="register__btn">Авторизуйтесь сейчас</a>
                <p className="modal__text">
                  При регистрации вы подтверждаете согласие с условиями
                  <a>пользовательского соглашения</a> и
                  <a>политикой конфиденциальности</a>. Подробнее на сайте:
                  <a>https://rx-machine.ru</a>
                </p>
              </form>
            </div>
          </div>
        ) : (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="modal__title">
              <h5>Авторизация на</h5>
              <p className="modal__title__p">
                RX<span>MACHINE</span>
              </p>
            </div>
            <div className="content result">
              <img src={image("result")} />
              <span>Вы успешно зарегистрировались!</span>
              <p>
                Для подтверждения аккаунта
                <br />
                мы отправили ссылку на вашу почту
              </p>
            </div>
          </div>
        )
      }
    </Popup>
  );
};

export default RegisterForm;
