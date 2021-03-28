import { React, useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { InputBase, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { searchStudentsData } from "../redux/data/actionCreator";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    marginLeft: "50%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },

  searchIcon: {
    padding: theme.spacing(1, 3),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function SearchBar() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  console.log(query);
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(searchStudentsData(query));
  };
  console.log(query)
  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>

        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>search</Button>
      </div>
    </>
  );
}

export default SearchBar;
