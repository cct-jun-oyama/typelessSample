import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import { ModalView } from './components/ModalView';
import {
  Actions,
  State,
  MODULE,
  FavoritesKindList,
  FavoritesList,
} from './interface';
import _ from 'lodash';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: State = {
  viewType: 'userSetting',
  userName: 'hoge fuga',
  favoritesKindList: FavoritesKindList,
  favoritesList: FavoritesList,
  favorites: '',
  orderNumber: 1,
};

export const reducer = createReducer(initialState)
  .on(Actions.selectView, (state, { viewType }) => {
    state.viewType = viewType;
  })
  .on(Actions.changeName, (state, { name }) => {
    state.userName = name;
  })
  .on(Actions.selectFavoritesList, (state, { props }) => {
    state.favoritesKindList = _.map(state.favoritesKindList, item => {
      return {
        ...item,
        checked: item.id === props.id ? props.checked : item.checked,
      };
    });
  })
  .on(Actions.selectFavorites, (state, { favoritesName }) => {
    state.favorites = favoritesName;
  });

// --- Module ---
export default () => {
  useModule({
    epic,
    reducer,
    reducerPath: ['userOrderModal'],
    actions: Actions,
  });
  return <ModalView />;
};

export const useModalModule = () =>
  useModule({
    epic,
    reducer,
    reducerPath: ['userOrderModal'],
    actions: Actions,
  });
