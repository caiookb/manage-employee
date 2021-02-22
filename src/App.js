import React, { useEffect, useState } from "react";
import Main from "./views/Main/Main";
import { connect } from "react-redux";
import * as EmployeesController from "./controller/EmployeesController";
import { Spinner, Welcome, Text } from "./components";
import "./App.css";

const App = ({ token, saveTokenOnRedux }) => {
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    saveTokenOnRedux(token)
      .then(() => {
        setTimeout(() => {
          setCheckingToken(false);
        }, 3000);
      })
      .catch((err) => {
        localStorage.removeItem("list");
        setCheckingToken(false);
      });
  }, [token]);

  return checkingToken ? (
    <div className={"loading"}>
      <Text text={"Cheking if you have a valid token..."} />
      <Spinner />
    </div>
  ) : token ? (
    <Main />
  ) : (
    <Welcome />
  );
};

const mapStateToProps = (state) => {
  const {
    user: { token },
  } = state;
  return { token };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveTokenOnRedux: (token) =>
      dispatch(EmployeesController.saveTokenOnRedux(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
