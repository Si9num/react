import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const HEADER = (): any => {
  const green = useRef(null);
  const blue = useRef(null);
  const changeColor = () => {
    green.current.style.color = 'rgba(11, 116, 8, 0.678)';
    blue.current.style.color = 'rgb(9, 66, 172)';
  };
  const changeColBlue = () => {
    green.current.style.color = 'rgb(9, 66, 172)';
    blue.current.style.color = 'rgba(11, 116, 8, 0.678)';
  };

  return (
    <header>
      <nav className="nav">
        <ul className="list">
          <li>
            <Link
              ref={green}
              onClick={() => changeColor()}
              className="home"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              ref={blue}
              onClick={() => changeColBlue()}
              className="about"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default HEADER;
