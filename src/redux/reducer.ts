import { createReducer } from '@reduxjs/toolkit';
/* eslint-disable import/no-cycle */

import getArticles from './api';

import {
  VAL,
  SORT_BY_POP,
  SORT_BY_PUBL,
  SORT_BY_REL,
  PAGE,
  SIZE,
} from './action';

const initialState = {
  val: 'f',
  loading: false,
  res: [],
  sort: 'relevancy',
  page: '1',
  size: '10',
};

export default createReducer(initialState, (builder) => {
  builder.addCase(VAL, (state, action) => ({ ...state, val: action.payload }));
  builder.addCase(PAGE, (state, action) => ({
    ...state,
    page: action.payload,
  }));
  builder.addCase(SIZE, (state, action) => ({
    ...state,
    size: action.payload,
  }));
  builder.addCase(SORT_BY_REL, (state) => ({
    ...state,
    sort: state.sort,
  }));
  builder.addCase(SORT_BY_POP, (state, action) => ({
    ...state,
    sort: action.payload,
  }));
  builder.addCase(SORT_BY_PUBL, (state, action) => ({
    ...state,
    sort: action.payload,
  }));
  builder.addCase(getArticles.pending, (state) => ({
    ...state,
    loading: true,
  }));
  builder.addCase(getArticles.fulfilled, (state, action) => ({
    ...state,
    res: action.payload.articles,
    loading: false,
  }));
});
