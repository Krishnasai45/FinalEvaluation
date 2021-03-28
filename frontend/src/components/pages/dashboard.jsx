import React from "react";

import { Avatar, Button, Drawer } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Pagination from "../parts/pagination";
import { deepOrange, deepPurple, orange } from "@material-ui/core/colors";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../parts/Searchbar";
import { fade, makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: "100%",
    marginLeft: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepOrange[800],
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  AvatarCenter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(5, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));
function Dashboard(props) {
  const classes = useStyles();
  const userData = useSelector((state) => state.StudentsData.searchData);
  console.log(userData);
  const history = useHistory();
  const handleRouteChange = (to) => {
    history.push(to);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Avatar className={classes.purple}>AD</Avatar>
          <Typography variant="h6" noWrap className={classes.title}>
            Tution Students Records
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/*data to displayed*/}
        {/* {props.children} */}
        <Pagination />
        <Typography paragraph></Typography>
      </main>
    </div>
  );
}
export default Dashboard;
