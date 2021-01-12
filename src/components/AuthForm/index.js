import React from "react";
import Popup from "reactjs-popup";
import image from "../../images/images";
import { useForm } from "react-hook-form";

const AuthForm = ({ openAuth, setOpenAuth, setOpenRegister }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => alert(JSON.stringify(data));
  return (
    <Popup
      overlayStyle={{ background: "rgba(0, 0, 43, 0.5)" }}
      modal
      nested
      open={openAuth}
      onClose={() => setOpenAuth(false)}
    >
      {close => (
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
                name="lastName"
                ref={register}
                placeholder="Пароль"
                className="input__lastName modal__input"
              />
              <button className="input__btn">
                <img src={image("sign")} />
                Войти
              </button>
              <div className="flex-between">
                <div>
                  <input type="checkbox" id="scales" name="scales" />
                  <label for="scales">Запомнить меня</label>
                </div>
                <a className="forgot">Забыли пароль?</a>
              </div>
              <span className="register__text">Впервые на RXMACHINE?</span>
              <a
                className="register__btn"
                onClick={() => {
                  setOpenRegister(true);
                  setOpenAuth(false);
                }}
              >
                Зарегистрируйтесь сейчас
              </a>
              <p className="modal__text">
                При входе вы подтверждаете согласие с условиями
                <a>пользовательского соглашения</a> и
                <a>политикой конфиденциальности</a>. Подробнее на сайте:{" "}
                <a>https://rx-machine.ru</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AuthForm;
