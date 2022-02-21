import React from 'react';
import "../../App.css"

const Burger = () => {
    return (
      <>
        <div className="Burger">
          <img
            className="img"
            src="https://macdonaldsmenu.ru/wp-content/uploads/2021/05/%D0%A2%D0%B5%D1%85%D0%B0%D1%81-%D0%91%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%B2-%D0%9C%D0%B0%D0%BA%D0%B4%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%B4%D1%81.jpg"
            alt="burger"
          />
          <div className='div-text'>
          <p className="text">
            Техас Бургер от McDonald’s имеет следующий состав: <br /> жареный бекон
            (нарезка); <br /> соус на основе растительных масел «Томаты-Гриль»;
            <br /> рубленый бифштекс из говядины (80 г), приготовленный на гриле; <br /> салат
            «Айсберг» (мелкая нарезка);<br /> булочка для гамбургеров, поджаренная в
            тостере;<br /> плавленый сыр «Чеддер»;<br /> репчатый лук резаный
            восстановленный.
          </p>
          </div>
        </div>
      </>
    );
};

export default Burger;