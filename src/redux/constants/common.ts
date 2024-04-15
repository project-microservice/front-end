export const REDUCER_NAME = {
  CATEGORY: 'categorySlice',
  AUTH: 'auth',
  PRODUCT: 'productSlice',
};

export const API_PREFIX = {
  CATEGORY: 'category',
  AUTH: 'auth',
  PRODUCT: 'product',
};
// GET POST PUTCH DELETE
export const ACTIONS = {
  GET_CATEGORY: `${REDUCER_NAME.CATEGORY}/getListCategory`,
  GET_PRODUCT_BY_CATEGORY_ID: `${REDUCER_NAME.PRODUCT}/getProductByCategoryId`,
};
