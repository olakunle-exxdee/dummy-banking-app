import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  isSavingAccount: false,
  isLoggedIn: false,
};

const bankingSlice = createSlice({
  name: "banking",
  initialState,
  reducers: {
    DEPOSIT: (state, action) => {
      return { ...state, balance: state.balance + action.payload.balance };
    },
    WITHDRAWAL: (state, action) => {
      return { ...state, balance: state.balance - action.payload.balance };
    },
    COLLECT_INTEREST: (state, action) => {
      return { ...state, balance: state.balance * 1.03 };
    },
    DELETE_ACCOUNT: (state) => {
      return { ...state, balance: 0 };
    },
    ACCOUNT_TYPE: (state) => {
      return { ...state, isSavingAccount: !state.isSavingAccount };
    },
    TOGGLE_AUTH: (state) => {
      return { ...state, isLoggedIn: !state.isLoggedIn };
    },
  },
});

export const {
  DEPOSIT,
  ACCOUNT_TYPE,
  DELETE_ACCOUNT,
  COLLECT_INTEREST,
  WITHDRAWAL,
  TOGGLE_AUTH,
} = bankingSlice.actions;
export default bankingSlice.reducer;
