import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/comma-dangle */

const Res = ({ res }) => {
  return (
    <div>
      {res.map(
        (
          {
            author,
            content,
            description,
            publishedAt,
            title,
            url,
            urlToImage,
          }: any,
          idx: React.Key,
        ) => {
          return (
            <div className="block" key={idx}>
              <p className="text"> {title}</p>
              <p className="text">{author} </p>
              <p className="text">{content}</p>
              <p className="text">{description}</p>
              <p className="text">{publishedAt}</p>

              <p className="text">{url}</p>
              <img className="img" src={urlToImage} alt="" />
              <Link
                to={`/details/${title}/${author}/${content}/${description}/${publishedAt}`}
              >
                View more
              </Link>
            </div>
          );
        },
      )}
    </div>
  );
};
export default Res;
