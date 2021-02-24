import { createSelector} from 'reselect';
import memoize from 'lodash.memoize';



const selectShopCollection = state => state.shop;

export const selectShopItem = createSelector(
    [selectShopCollection], 
    shopData => shopData.collections);

export const selectCollectionForPreview = createSelector(
    [selectShopItem],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) => createSelector(
     [selectShopItem],
     collections => collections? collections[collectionUrlParam] : null
     )
);