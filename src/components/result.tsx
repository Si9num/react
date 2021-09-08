import React from 'react';
import { Link } from 'react-router-dom';
import store from '../redux/store';

const Res = () => (
  <div>
    {store
      .getState()
      .toolkit.res.map(
        (
          {
            author,
            content,
            description,
            publishedAt,
            title,
            url,
            urlToImage,
          }: HTMLFormElement,
          idx: React.Key,
        ) => (
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
        ),
      )}
  </div>
);

export default Res;
