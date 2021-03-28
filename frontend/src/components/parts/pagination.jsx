import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getStudentsData,
  getSingleStudentData,
  getdata,
} from "../redux/data/actionCreator";
import StudentsID from "../pages/student";
import Pagination from "@material-ui/lab/Pagination";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import Styled from "styled-components";

const Paginations = Styled.div`
padding:10px;
margin:10px;
justify-content:center;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    Width:100,
    display: "flex",
    flexDirection: "row",
  },
  pagining: {
    "& > *": {
      marginTop: theme.spacing(2),
      marginLeft: "35%",
    },
  },
  filters :{
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

function PageBody() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [gender,setGender] = useState("")
  const [filter,setFilter] = useState(false)
  
  const history = useHistory()
  const studentsData = useSelector((state) => state.StudentsData.studentsRecords);
  //  console.log(studentsData)
  const details = useSelector((state) => state.StudentsData.details);
  const search = useSelector((state)=>state.StudentsData.search)
  // console.log(search)
  const studentLength = useSelector((state) => state.StudentsData.studentsLength);
  const studentData = useSelector((state) => state.StudentsData.singlestudentRecords);
  const single = useSelector((state) => state.StudentsData.single);
  const allData = useSelector((state)=>state.StudentsData.allData)
  const [filterData,setFilterData] = useState(allData,...allData)
  //console.log(studentLength)
  useEffect(() => {
    dispatch(getdata())
    
    dispatch(getStudentsData(page));
  }, [page]);
  console.log(allData)
  const handleChange =(e)=>{
    setGender(e.target.value)
    

  }
  const handleFilters = ()=>{
    const items = allData.filter((item)=>item.gender == gender)
    setFilterData(items,...allData)
    if(gender == ""){
      setFilter(false)
    }else{
      setFilter(true)
    }
  }
  console.log(filterData)
  console.log(filter)
  const classes = useStyles()
  const handleMore = (id) => {
    console.log(id);
    history.push(`/student/${id}`)
  };
  return (
    <div>
      <FormControl className = {classes.filters}>
        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gender}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
        </Select>
      </FormControl><Button onClick = {handleFilters}>select</Button>
      {!filter ? (
        <div>
          

          <br />
          <Grid container spacing={2}>
            {studentsData.map((item) => (
              <Grid item sm={12} lg={4}>
                <div key={item.id}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <Typography component="h4">
                       <strong>Student : </strong> {item.name}
                      </Typography>
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="h5"
                        >
                          Gender : {item.gender}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="h5"
                        >
                          Age : {item.age}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="h5"
                        >
                          Grade: {item.grade}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="h5"
                        >
                          Total Tests:{item.test.length}
                        </Typography>
                        <button onClick={() => handleMore(item._id)}>
                          View More
                        </button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div>
          

        <br />
        <Grid container spacing={2}>
          {filterData.map((item) => (
            <Grid item sm={12} lg={4}>
              <div key={item.id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <Typography component="h4">
                     <strong>Student : </strong> {item.name}
                    </Typography>
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h5"
                      >
                        Gender : {item.gender}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h5"
                      >
                        Age : {item.age}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h5"
                      >
                        Grade: {item.grade}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h5"
                      >
                        Total Tests:{item.test.length}
                      </Typography>
                      <button onClick={() => handleMore(item._id)}>
                        View More
                      </button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      )}
      {single ? (
            <div className={classes.pagining}>
              <Pagination
                count={Math.floor(studentLength / 6)}
                onChange={(e, val) => setPage(val)}
              />
            </div>
          ) : null}
    </div>
  );
}
export default PageBody;
