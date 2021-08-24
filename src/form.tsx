import React, { ChangeEvent, useState } from 'react';
import './index.css';
import { arrForCountry } from './country';

const Form = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('Беларусь');
  const [check, setCheck] = useState(false);
  const [switcher, setSwitch] = useState(false);
  const clear = () => {
    setName('');
    setSurname('');
    setDob('');
    setCountry('Беларусь');
    setCheck(false);
  };
  function handleSubmit(ev: { preventDefault: () => void }) {
    ev.preventDefault();
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
              checked={switcher}
              onChange={() => setSwitch((agree) => !agree)}
            />
            <span className="dot"></span>
            <p className="status-male">Male</p>
            <p className="status-female">Female</p>
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
      <section className="card-container" id="card-container"></section>
    </div>
  );
};
export default Form;
