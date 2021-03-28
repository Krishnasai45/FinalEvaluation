import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { postUsersData } from "../redux/login/actrionCreator";
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

function Register() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isRegister = useSelector((state) => state.AuthReducer.isRegister);

  console.log(isRegister);

  const handleAuth = (e) => {
    e.preventDefault();
    var data = { mail: email, pass: password, nam: name };
    dispatch(postUsersData(data));
  };

  return (
    <>
    <NavBar/>
      {!isRegister ? (
        <Container className={classes.root}>
          <form
            className={classes.middle}
            noValidate
            autoComplete="on"
            onSubmit={handleAuth}
          >
            <TextField
              className={classes.gap}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
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
        <Redirect to="/login" />
      )}
    </>
  );
}

export default Register;
