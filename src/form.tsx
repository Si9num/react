import React, { ChangeEvent, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/header';
import Res from './components/result';
import About from './components/about';
import Error from './components/page404';
import Details from './components/details';
import getArticles from './redux/api';

import {
  VAL,
  PAGE,
  SIZE,
  SORT_BY_REL,
  SORT_BY_POP,
  SORT_BY_PUBL,
} from './redux/action';
import store from './redux/store';

const Form = () => {
  const [val, setValue] = useState('');

  const [page, setPage] = useState('1');
  const [size, setSize] = useState('10');
  const dispatch = useDispatch();

  function handleSubmit(ev: ChangeEvent<HTMLFormElement>) {
    ev.preventDefault();
    // setLoading(true);
    setValue(ev.target.value);
    dispatch(getArticles());
  }

  const location = useLocation();
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="anim" key={location.key}>
          <div>
            <Switch>
              <Route exact path="/">
                <section>
                  <form onSubmit={handleSubmit} className="form">
                    <div className="input">
                      <input
                        type="text"
                        value={val}
                        onChange={(ev) => {
                          dispatch(VAL(ev.target.value));
                          setValue(ev.target.value);
                        }}
                        disabled={store.getState().toolkit.loading}
                        required
                      />

                      <label>
                        Page:
                        <input
                          className="field"
                          type="text"
                          value={store.getState().toolkit.page}
                          onChange={(ev) => {
                            dispatch(PAGE(ev.target.value));
                            setPage(ev.target.value);
                          }}
                          disabled={store.getState().toolkit.loading}
                        />
                      </label>
                      <label>
                        Size:
                        <input
                          className="field"
                          type="text"
                          value={store.getState().toolkit.size}
                          onChange={(ev) => {
                            dispatch(SIZE(ev.target.value));
                            setSize(ev.target.value);
                          }}
                          disabled={store.getState().toolkit.loading}
                        />
                      </label>
                      <input
                        className="btn"
                        type="submit"
                        value={
                          store.getState().toolkit.loading
                            ? 'loading'
                            : 'search'
                        }
                        disabled={store.getState().toolkit.loading}
                      />
                    </div>

                    <div className="sortBtns">
                      <p className="sortLab">Sort by:</p>
                      <button
                        className="btn"
                        value={'relevancy'}
                        onClick={() => {
                          dispatch(SORT_BY_REL(store.getState().toolkit.sort));
                        }}
                      >
                        relevancy
                      </button>
                      <button
                        className="btn"
                        value={'popularity'}
                        onClick={() => dispatch(SORT_BY_POP('popularity'))}
                      >
                        popularity
                      </button>
                      <button
                        className="btn"
                        value={'publishedAt'}
                        onClick={() => dispatch(SORT_BY_PUBL('publishedAt'))}
                      >
                        publishedAt
                      </button>
                    </div>
                  </form>
                </section>
                <div className="wrap">
                  <Res />
                </div>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route
                exact
                path="/details/:title/:author/:content/:description/:publishedAt"
              >
                <Details />
              </Route>
              <Route exact path="*">
                <Error />
              </Route>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default Form;
