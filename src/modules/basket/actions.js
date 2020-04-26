export const SHOW_BASKET = 'SHOW_BASKET';
export const showBasketGood = (good) => ({
    type: SHOW_BASKET,
    good
});

export const HIDE_BASKET = 'HIDE_BASKET';
export const hideBasketGood = () => ({
    type: HIDE_BASKET,
});