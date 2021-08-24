import React from 'react';
import searchBar from './searchBar';
/* eslint-disable object-curly-newline */
import { date, director, title, genre, rating, img } from './data';

function Cards(props) {
  return (
    <div className="card">
      <div>
        <img src={`../public/assets/${props.img}.jpg`} alt="" />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.genre}</p>
        <p>{props.director}</p>
        <p>{props.rate}</p>
      </div>
    </div>
  );
}
function renderCard() {
  let templ: JSX.Element;
  const arrForCard = [];
  for (let i = 0; i < date.length; i += 1) {
    templ = (
      <Cards
        img={`${img[i]}`}
        title={`${title[i]}`}
        date={`Год:${date[i]}`}
        genre={`Жанр:${genre[i]}`}
        director={`Режиссер:${director[i]}`}
        rate={`Рейтинг:${rating[i]}`}
      />
    );
    arrForCard.push(templ);
  }
  return arrForCard;
}

export default renderCard;
