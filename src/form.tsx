import React, { ChangeEvent, useRef, useState } from 'react';
import './index.css';
import { arrForCountry } from './country';
import Card from './card';
/* eslint-disable object-curly-newline */

const Form = () => {
  const tog = useRef(null);
  const male = useRef(null);
  const female = useRef(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('Беларусь');
  const [check, setCheck] = useState(false);
  const [switcher, setSwitch] = useState(false);
  const [card, setCard] = useState([]);
  const clear = () => {
    setName('');
    setSurname('');
    setDob('');
    setCountry('Беларусь');
    setCheck(false);
  };
  const toggle = () => {
    if (tog.current.checked) {
      male.current.style.visibility = 'visible';
      female.current.style.visibility = 'hidden';
    } else {
      male.current.style.visibility = 'hidden';
      female.current.style.visibility = 'visible';
    }
  };
  function handleSubmit(ev: ChangeEvent<HTMLFormElement>) {
    ev.preventDefault();
    const value = switcher ? 'male' : 'female';
    setCard((state) => [...state, { name, surname, dob, country, value }]);

    clear();
  }

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={(ev) => setSurname(ev.target.value)}
            required
          />
          <label className="toggle">
            <input
              id="sex"
              className="toggle-check"
              type="checkbox"
              value={switcher ? 'female' : 'male'}
              checked={switcher}
              ref={tog}
              onChange={() => setSwitch((agree) => !agree)}
              onClick={() => toggle()}
            />
            <span className="dot"></span>
            <p ref={male} className="status-male">
              Male
            </p>
            <p ref={female} className="status-female">
              Female
            </p>
          </label>
          <label htmlFor="dob">Date of birth</label>
          <label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(ev) => setDob(ev.target.value)}
              required
            />
          </label>
          <label htmlFor="country">Country</label>
          <select
            name=""
            id="country"
            value={country}
            onChange={(ev) => setCountry(ev.target.value)}
            required
          >
            {arrForCountry}
          </select>
          <label>
            <input
              id="isCheck"
              type="checkbox"
              checked={check}
              onChange={() => setCheck((agree) => !agree)}
              required
            />
            i agree with terms and conditions
          </label>
          <input type="submit" className="send" value="send" />
        </form>
      </section>
      <section className="card-container">
        <Card card={card} />
      </section>
    </div>
  );
};
export default Form;
