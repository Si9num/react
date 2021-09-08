import { createAction } from '@reduxjs/toolkit';

export const VAL = createAction<string>('VAL');
export const SORT_BY_REL = createAction<string>('SORT_BY_REL');
export const SORT_BY_POP = createAction<string>('SORT_BY_POP');
export const SORT_BY_PUBL = createAction<string>('SORT_BY_PUBL');
export const PAGE = createAction<string>('PAGE');
export const SIZE = createAction<string>('SIZE');
