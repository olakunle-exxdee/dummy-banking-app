import React from "react";
import Balance from "./Balance";
import Banking from "./Banking";
import AccountSTatus from "./AccountSTatus";
import { useSelector } from "react-redux";

const Main = () => {
  const auth = useSelector((state) => state.bankingReducer.isLoggedIn);

  return (
    <div>
      {auth ? (
        <section>
          <Balance />
          <Banking />
          <AccountSTatus />
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
