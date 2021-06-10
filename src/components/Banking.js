import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ACCOUNT_TYPE,
  COLLECT_INTEREST,
  DELETE_ACCOUNT,
  DEPOSIT,
  WITHDRAWAL,
} from "../redux/bankingSlice";

const Banking = () => {
  const [amount, setAmount] = useState("");
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const dispatch = useDispatch();
  const handleDeposit = () => {
    dispatch(
      DEPOSIT({
        balance: amount,
      })
    );
    setAmount("");
  };
  const handleWithdraw = () => {
    dispatch(
      WITHDRAWAL({
        balance: amount,
      })
    );
  };
  const handleInterest = () => {
    dispatch(COLLECT_INTEREST());
  };
  const handleDelete = () => {
    dispatch(DELETE_ACCOUNT());
  };

  const handleAccounttype = () => {
    dispatch(ACCOUNT_TYPE());
  };
  return (
    <div className="form-group">
      <input
        value={amount}
        type="text"
        className="form-control"
        onChange={handleAmount}
      />
      <button onClick={handleDeposit} className="btn btn-success">
        deposit
      </button>
      <button onClick={handleWithdraw} className="btn btn-primary">
        withdraw
      </button>
      <button onClick={handleInterest} className="btn btn-warning">
        collect interest
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        delete account
      </button>
      <button onClick={handleAccounttype} className="btn btn-secondary">
        change account type
      </button>
    </div>
  );
};

export default Banking;
