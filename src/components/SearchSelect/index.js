import React, { useState } from "react";
import "./style.css";
import image from "../../images/images";

const SearchSelect = ({ onChange, closeModal }) => {
  const [value, setValue] = useState("");
  const [picket, setPicket] = useState(null);
  const [valueClass, setValueClass] = useState("");
  return (
    <div className="searchSelect">
      <p>Список городов</p>
      <div className="searchSelect__photo">
        <img src={image("searchC")} />
        <input onChange={e => setValue(e.target.value)} value={value} />
      </div>
      <ul>
        {data
          .filter(item => {
            if (value === "") {
              return true;
            }
            return item.label
              .toLocaleLowerCase()
              .includes(value.toLocaleLowerCase());
          })
          .map(item => {
            return (
              <li
                value={item.value}
                onClick={() => setPicket(item)}
                className={item === picket ? "active" : ""}
              >
                <a>{item.label}</a>
              </li>
            );
          })}
      </ul>
      <a
        className="search__btn"
        onClick={() => {
          closeModal();
          onChange(picket);
        }}
      >
        Выбрать
      </a>
    </div>
  );
};

const data = [
  { value: "moskva", label: "Москва" },
  { value: "sancP", label: "Санкт-Петербург" },
  { value: "eketerenburg", label: "Екатеринбург" },
  { value: "kazan", label: "Казань" },
  { value: "krasnodar", label: "Краснодар" },
  { value: "krasnoiarsk", label: "Красноярск" },
  { value: "nizhniN", label: "Нижний Новгород" },
  { value: "krasnodar1", label: "Краснодар" },
  { value: "krasnoiarsk2", label: "Красноярск" },
];

export default SearchSelect;
