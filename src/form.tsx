import React, { ChangeEvent, useState } from 'react';

import Res from './result';
/* eslint-disable @typescript-eslint/comma-dangle */

const Form = () => {
  const [val, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState([]);
  const [sort, setSort] = useState('');
  const [page, setPage] = useState('1');
  const [size, setSize] = useState('10');

  function handleSubmit(ev: ChangeEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoading(true);
    const getResp = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${val}&from=2021-08-27&sortBy=${sort}&pageSize=${size}&page=${page}&apiKey=e8e992860fa74bfb88cc900a00bbace1`,
      );
      const data = await response.json();
      setLoading(false);
      console.log(data.articles);
      setRes(data.articles);
    };
    getResp();
  }

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit} className="form">
          <div className="input">
            <input
              type="text"
              value={val}
              onChange={(ev) => setValue(ev.target.value)}
              disabled={loading}
              required
            />

            <label>
              Page:
              <input
                className="field"
                type="text"
                value={page}
                onChange={(ev) => setPage(ev.target.value)}
                disabled={loading}
              />
            </label>
            <label>
              Size:
              <input
                className="field"
                type="text"
                value={size}
                onChange={(ev) => setSize(ev.target.value)}
                disabled={loading}
              />
            </label>
            <input
              className="btn"
              type="submit"
              value={loading ? 'loading' : 'search'}
              disabled={loading}
            />
          </div>

          <div className="sortBtns">
            <p className="sortLab">Sort by:</p>
            <button
              className="btn"
              value={'relevancy'}
              onClick={() => setSort('relevancy')}
            >
              relevancy
            </button>
            <button
              className="btn"
              value={'popularity'}
              onClick={() => setSort('popularity')}
            >
              popularity
            </button>
            <button
              className="btn"
              value={'publishedAt'}
              onClick={() => setSort('publishedAt')}
            >
              publishedAt
            </button>
          </div>
        </form>
      </section>
      <div className="wrap">
        <Res res={res} />
      </div>
    </div>
  );
};
export default Form;
