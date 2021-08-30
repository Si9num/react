import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
const Details: any = () => {
  const { title, url, publishedAt, description, content, author } = useParams<{
    title: string;
    url: string;
    publishedAt: string;
    description: string;
    content: string;
    author: string;
  }>();

  return (
    <div className="block">
      <p className="text"> {title}</p>
      <p className="text">{author} </p>
      <p className="text">{content}</p>
      <p className="text">{description}</p>
      <p className="text">{publishedAt}</p>
      <p className="text">{url}</p>
    </div>
  );
};

export default Details;
