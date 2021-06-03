import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_AUTH } from "../redux/bankingSlice";

const Auth = () => {
  const toggle = useSelector((state) => state.bankingReducer.isLoggedIn);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(TOGGLE_AUTH());
  };
  return (
    <div>
      <button onClick={handleAuth} className="btn btn-info">
        {toggle ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Auth;
