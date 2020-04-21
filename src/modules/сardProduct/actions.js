export const SHOW_GOOD = 'SHOW_GOOD';
export const showGood = (good) => ({
    type: SHOW_GOOD,
    good
});

export const HIDE_GOOD = 'HIDE_GOOD';
export const hideGood = () => ({
    type: HIDE_GOOD,
});