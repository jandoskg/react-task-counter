import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { menuContext } from '../../contexts/MainContext';
import "../../App.css"

import { Link } from 'react-router-dom';

const Receipts = () => {
    let {setMeal}=useContext(menuContext);
    return (
      <>
      <div className='mealsCard'>



        <Card style={{ width: "18rem" }}>
          <Card.Img  style={{height: "12rem"}}variant="top" src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg" />
          <Card.Body>
            <Card.Title>Техасский Burger</Card.Title>
            <Card.Text>
            Бургер – это приготовленный на гриле бифштекс из сочной рубленой говядины, салат «Айсберг», соус «Томаты-Гриль», свежий лук и хрустящий бекон.

              
            </Card.Text>
            <Link to="/meals/burger">
            <Button onClick={(e) => setMeal(e.target.value)}
            value="burger"variant="primary">Рецепт</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img  style={{height: "12rem"}}variant="top" src="https://e2.edimdoma.ru/data/recipes/0013/8509/138509-ed4_wide.jpg?1628764412" />
          <Card.Body>
            <Card.Title>Италиянская Пицца</Card.Title>
            <Card.Text>
            Пицца – это национальное итальянское блюдо, представляющее собой круглую открытую лепешку, покрытую расплавленным сыром и томатами.

            </Card.Text>
            <Link to="/meals/pizza">
            <Button onClick={(e) => setMeal(e.target.value)}
            value="pizza"variant="primary">Рецепт</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img  style={{height: "12rem"}}variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-202104-airfryerhotdogs-044-1619472270.jpg" />
          <Card.Body>
            <Card.Title>Кыргызский Хот-Дог</Card.Title>
            <Card.Text>
            Хот-дог — пшеничная булка с сосиской или колбасой, приправленной кетчупом, майонезом, горчицей и иногда овощами, зеленью, сыром или беконом.
              
            </Card.Text>
            <Link to="/meals/hotdog">
            <Button onClick={(e) => setMeal(e.target.value)}
            value="hotdog"variant="primary">Рецепт</Button>
            </Link>
          </Card.Body>
        </Card>
        </div>
        {/* <Ingredients/> */}
      </>
    );
};

export default Receipts;