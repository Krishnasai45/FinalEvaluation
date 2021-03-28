import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { postLoginData } from "../redux/login/actrionCreator";
import { Redirect } from "react-router-dom";
import { NavBar } from "../parts/NavBar";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  middle: {
    marginTop: "100px",
    marginRight: "40%",
    marginLeft: "40%",
  },
  gap: {
    padding: "10px",
  },
}));

function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.AuthReducer.isLogin);
  const handleLogin = (e) => {
    e.preventDefault();
    var data = { mail: email, pass: password };
    dispatch(postLoginData(data));
  };

  return (
    <>
    <NavBar/>
      {!isLogin ? (
        <Container className={classes.root}>
          <form
            className={classes.middle}
            noValidate
            autoComplete="on"
            onSubmit={handleLogin}
          >
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className={classes.gap} type="submit" value="SUBMIT" />
          </form>
        </Container>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </>
  );
}

export default Login;
