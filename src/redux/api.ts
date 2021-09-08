import { createAsyncThunk } from '@reduxjs/toolkit';

/* eslint-disable import/no-cycle */
import store from './store';

const getArticles = createAsyncThunk('RES', async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${
      store.getState().toolkit.val
    }&from=2021-08-27&sortBy=${store.getState().toolkit.sort}&pageSize=${
      store.getState().toolkit.size
    }&page=${store.getState().toolkit.page}&apiKey=${process.env.apiKey}`,
  );
  const data = await response.json();

  return data;
});
export default getArticles;
