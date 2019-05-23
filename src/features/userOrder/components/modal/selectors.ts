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
