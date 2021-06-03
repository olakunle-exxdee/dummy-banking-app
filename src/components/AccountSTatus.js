import React from "react";
import { useSelector } from "react-redux";

const AccountSTatus = () => {
  const accountType = useSelector(
    (state) => state.bankingReducer.isSavingAccount
  );

  const value = accountType ? "Current Account" : "Savings Account";
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default AccountSTatus;
