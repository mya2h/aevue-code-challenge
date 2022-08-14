/* eslint-disable default-param-last */
const initialState = 0;

const reducer = (
  state = initialState,
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case 'deposit':
      return state + payload;
    case 'withdraw':
      return state - payload;
    default:
      return state;
  }
};

export default reducer;
