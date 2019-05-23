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
  .on(Actions.selectFavoritesKind, (state, { props }) => {
    state.favoritesKindList = _favoritesKindList(state, props);
    state.favorites = _setFavoritesByKind(state, props);
  })
  .on(Actions.selectFavorites, (state, { favoritesName }) => {
    state.favorites = favoritesName;
    state.favoritesList = _favoritesList(state, favoritesName);
    calculateTotalAmount(state);
  })
  .on(Actions.selectOrderNumber, (state, { orderNumber }) => {
    state.orderNumber = orderNumber;
    state.orderNumberList = _orderNumberList(state, orderNumber);
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

// TODO りふぁくた
const _setFavoritesByKind = (state: State, props: FavoritesKindData) => {
  const _favoritesKindList = _.map(state.favoritesKindList, item => {
    return {
      ...item,
      checked: item.id === props.id ? props.checked : item.checked,
    };
  });
  const userSelectedKind = _.map(
    _.filter(_favoritesKindList, v => v.checked),
    v => v.id
  );
  const filteredFavoritesList: FavoritesList = _.filter(
    state.favoritesList,
    item => userSelectedKind.includes(item.kind)
  );

  let favorites: Favorites;

  if (userSelectedKind.includes(props.id) && _.isEmpty(state.favorites)) {
    const _favorites = _.find(state.favoritesList, v => v.kind === props.id);
    favorites = _favorites ? _favorites.id : '';
  } else if (userSelectedKind.includes(props.id)) {
    favorites = state.favorites;
  } else if (_.isEmpty(userSelectedKind) || _.isEmpty(filteredFavoritesList)) {
    favorites = '';
  } else {
    favorites = filteredFavoritesList[0].id as Favorites;
  }
  calculateTotalAmountWithFavorites(state, favorites);
  return favorites;
};

const _favoritesList = (state: State, favoritesName: Favorites) => {
  return _.map(state.favoritesList, item => {
    return {
      ...item,
      selected: item.id === favoritesName,
    };
  });
};

const _orderNumberList = (state: State, orderNumber: number) => {
  return _.map(state.orderNumberList, item => {
    return {
      ...item,
      selected: item.id === orderNumber,
    };
  });
};

const calculateTotalAmount = (state: State) => {
  const targetFavorites = _.find(
    state.favoritesList,
    v => v.id === state.favorites
  );
  state.totalAmount = targetFavorites
    ? targetFavorites.amount * state.orderNumber
    : 0;
};

const calculateTotalAmountWithFavorites = (
  state: State,
  favorites: Favorites
) => {
  const targetFavorites = _.find(state.favoritesList, v => v.id === favorites);
  state.totalAmount = targetFavorites
    ? targetFavorites.amount * state.orderNumber
    : 0;
};
