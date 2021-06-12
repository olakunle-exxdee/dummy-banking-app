import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ACCOUNT_TYPE,
  COLLECT_INTEREST,
  DELETE_ACCOUNT,
  DEPOSIT,
  WITHDRAWAL,
} from "../redux/bankingSlice";
import Alert from "./Alert";

const Banking = () => {
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const handleAmount = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setAmount(parseInt(e.target.value));
    }
  };

  const dispatch = useDispatch();

  const handleDeposit = () => {
    if (!amount) {
      showAlert(true, "danger", "enter a value");
    } else {
      dispatch(
        DEPOSIT({
          balance: amount,
        })
      );
      showAlert(true, "success", `$${amount} has been deposited`);
      setAmount("");
    }
  };
  const handleWithdraw = () => {
    if (!amount) {
      showAlert(true, "danger", "enter a value");
    } else {
      dispatch(
        WITHDRAWAL({
          balance: amount,
        })
      );
      showAlert(true, "success", `$${amount} has been withdraw`);
      setAmount("");
    }
  };
  const handleInterest = () => {
    showAlert(true, "success", `$ interest has been added 🚀🚀🚀`);
    dispatch(COLLECT_INTEREST());
  };
  const handleDelete = () => {
    showAlert(true, "success", `$ account has been deleted`);
    dispatch(DELETE_ACCOUNT());
  };

  const handleAccounttype = () => {
    dispatch(ACCOUNT_TYPE());
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  return (
    <div className="form-group">
      <input
        value={amount}
        type="text"
        className="form-control"
        onChange={handleAmount}
      />
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}

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
