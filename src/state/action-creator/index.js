export const depositMoney = (amount) => (dispatch) => {
  dispatch({
    type: 'deposit',
    payload: amount,
  });
};

export const withdrawMoney = () => (dispatch) => {
  dispatch({
    type: 'withdraw',
    payload: 3999,
  });
};
