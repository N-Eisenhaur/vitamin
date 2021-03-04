import React from 'react';
import LazyLoad from 'react-lazyload';
import './Card.css';

//animation prop created?
//divClass names are css classes
//there are three divs front is first onclick show back the element is in ()prop.card
//to use a lazy load commponet they must wrap the beginning after variable (props) and ending div just before the end bracket

const Card = (props) => (

  //<LazyLoad height={800} offset={-100}>

    <div className={props.card.animation}>
      <div className="front" onClick={() => props.showBack(props.card)}>
        <img src="juice.jpg" alt="Avatar" className="card-image" />
        <div className="container">
          <h3>Vitamin Juice <span className="price">$24.99</span></h3>
          <p>Need a jump on your vitamins while drinking? Tired of popping the pills?
          Drink our vitamin enhanced juice, available in several flavours.</p>
        </div>
      </div>
      <div className="container-back back" onClick={() => props.showFront(props.card)}>
        <h3>Vitamin Juice <span className="price">$24.99</span></h3>
        <p>{props.card.description}</p>
      </div>
    </div>
 // </LazyLoad>

);//      <p>{props.card.description}</p> is in data file folder

export default Card;
