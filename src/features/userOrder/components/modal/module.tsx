import React from 'react';
import { createEpic, createReducer, useModule } from 'typeless';
import { ModalView } from './components/ModalView';
import {
  Actions,
  State,
  MODULE,
  FavoritesKindList,
  FavoritesList,
  FavoritesKindData,
} from './interface';
import _ from 'lodash';

// --- Epic ---
export const epic = createEpic(MODULE);

// --- Reducer ---
const initialState: State = {
  viewType: 'userSetting',
  userName: 'user name',
  favoritesKindList: FavoritesKindList,
  favoritesList: FavoritesList,
  favorites: '',
  orderNumber: 1,
  totalAmount: 0,
};

export const reducer = createReducer(initialState)
  .on(Actions.selectView, (state, { viewType }) => {
    state.viewType = viewType;
  })
  .on(Actions.changeName, (state, { name }) => {
    state.userName = name;
  })
  .on(Actions.selectFavoritesList, (state, { props }) => {
    state.favoritesKindList = _favoritesKindList(state, props);
    state.favorites = _setFavoritesByKind(state, props);
    calculateTotalAmount(state);
  })
  .on(Actions.selectFavorites, (state, { favoritesName }) => {
    state.favorites = favoritesName;
    calculateTotalAmount(state);
  })
  .on(Actions.selectOrderNumber, (state, { orderNumber }) => {
    state.orderNumber = orderNumber;
    calculateTotalAmount(state);
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

const _favoritesKindList = (state: State, props: FavoritesKindData) => {
  return _.map(state.favoritesKindList, item => {
    return {
      ...item,
      checked: item.id === props.id ? props.checked : item.checked,
    };
  });
};

const _setFavoritesByKind = (state: State, props: FavoritesKindData) => {
  const userSelectedKind = _.map(
    _.filter(_favoritesKindList(state, props), v => v.checked),
    v => v.id
  );
  const filteredFavoritesList: FavoritesList = _.filter(
    state.favoritesList,
    item => userSelectedKind.includes(item.kind)
  );
  if (userSelectedKind.includes(props.id)) {
    return state.favorites;
  } else {
    return filteredFavoritesList[0].id;
  }
};

const calculateTotalAmount = (state: State) => {
  const favorites = _.find(state.favoritesList, v => v.id === state.favorites);
  if (favorites) {
    state.totalAmount = favorites.amount * state.orderNumber;
  }
};
