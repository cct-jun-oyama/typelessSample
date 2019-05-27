import { FavoritesList } from './interface';
import { useMappedState, createSelector } from 'typeless';
import _ from 'lodash';

export const getFilteredFavoritesList = createSelector(
  [
    state => state.userOrderModal.favoritesKindList,
    state => state.userOrderModal.favoritesList,
  ],
  (favoritesKindList, favoritesList) => {
    const userSelectedKind = _.map(
      _.filter(favoritesKindList, v => v.checked),
      v => v.id
    );
    const filteredFavoritesList: FavoritesList = _.filter(favoritesList, item =>
      userSelectedKind.includes(item.kind)
    );
    return filteredFavoritesList;
  }
);

export function FilteredFavoritesList() {
  const { filteredFavoritesList } = useMappedState(state => ({
    filteredFavoritesList: getFilteredFavoritesList(state),
  }));
  return filteredFavoritesList;
}

export const getCalculateTotalAmount = createSelector(
  [
    state => state.userOrderModal.favorites,
    state => state.userOrderModal.favoritesList,
    state => state.userOrderModal.favoritesKindList,
    state => state.userOrderModal.orderNumber,
  ],
  (favorites, favoritesList, favoritesKindList, orderNumber) => {
    const checkedFavoritesKindIdList = _.map(
      _.filter(favoritesKindList, v => v.checked),
      v => v.id
    );
    const findFavorites = _.find(favoritesList, v => v.id === favorites);
    let calculateTotalAmount;
    if (findFavorites) {
      calculateTotalAmount = findFavorites.amount * orderNumber;
    } else if (!_.isEmpty(checkedFavoritesKindIdList)) {
      const _calculateTotalAmount = _.find(
        favoritesList,
        checkedFavoritesKindIdList[0]
      );
      calculateTotalAmount = _calculateTotalAmount
        ? _calculateTotalAmount.amount * orderNumber
        : 0;
    } else {
      calculateTotalAmount = 0;
    }
    return calculateTotalAmount;
  }
);

export function CalculateTotalAmount() {
  const { calculateTotalAmount } = useMappedState(state => ({
    calculateTotalAmount: getCalculateTotalAmount(state),
  }));
  return calculateTotalAmount;
}
