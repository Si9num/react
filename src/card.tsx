import React from 'react';
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable object-curly-newline */

const Card = ({ card }) => {
  return (
    <div>
      {card.map(
        (
          { name, surname, dob, country, value }: HTMLFormElement,
          idx: React.Key
        ) => {
          return (
            <div className="card" key={idx}>
              <p>{name} </p>
              <p>{surname}</p>
              <p>{value}</p>
              <p>{dob}</p>
              <p>{country}</p>
            </div>
          );
        }
      )}
    </div>
  );
};
export default Card;
