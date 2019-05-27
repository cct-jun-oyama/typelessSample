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
  Favorites,
  OrderNumberList,
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
  orderNumberList: OrderNumberList,
  favorites: 'sheep',
  orderNumber: 1,
};

export const reducer = createReducer(initialState)
  .on(Actions.selectView, (state, { viewType }) => {
    state.viewType = viewType;
  })
  .on(Actions.changeName, (state, { name }) => {
    state.userName = name;
  })
  .on(Actions.selectFavoritesKind, (state, { props }) => {
    state.favoritesKindList = _favoritesKindList(state, props);
    state.favorites = _setFavoritesByKind(state, props);
  })
  .on(Actions.selectFavorites, (state, { favoritesName }) => {
    state.favorites = favoritesName;
  })
  .on(Actions.selectOrderNumber, (state, { orderNumber }) => {
    state.orderNumber = orderNumber;
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

// TODO りふぁくた
const _setFavoritesByKind = (state: State, props: FavoritesKindData) => {
  const _favoritesKindList = _.map(state.favoritesKindList, item => {
    return {
      ...item,
      checked: item.id === props.id ? props.checked : item.checked,
    };
  });
  const userSelectedKindIds = _.map(
    _.filter(_favoritesKindList, v => v.checked),
    v => v.id
  );
  const filteredFavoritesList: FavoritesList = _.filter(
    state.favoritesList,
    item => userSelectedKindIds.includes(item.kind)
  );

  let favorites: Favorites;
  if (userSelectedKindIds.includes(props.id) && _.isEmpty(state.favorites)) {
    const _favorites = _.find(state.favoritesList, v => v.kind === props.id);
    favorites = _favorites ? _favorites.id : '';
  } else if (userSelectedKindIds.includes(props.id)) {
    favorites = state.favorites;
  } else if (
    _.isEmpty(userSelectedKindIds) ||
    _.isEmpty(filteredFavoritesList)
  ) {
    favorites = '';
  } else if (state.favorites) {
    favorites = state.favorites;
  } else {
    favorites = filteredFavoritesList[0].id as Favorites;
  }
  return favorites;
};
