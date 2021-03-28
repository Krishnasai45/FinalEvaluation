import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar, Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../redux/data/actionCreator";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.black,
    fontSize: 20,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  profile_avatar_container:{
    width: 291,
    margin:"30px",
    display: "flex",
    justifyContent: "center",
    
},
profile_image:{
  height: 150,
  width: 150,
  
}
});
function StudentsID(props) {
  const classes = useStyles();
  const {id} = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const allData = useSelector((state)=>state.StudentsData.allData)
 
  const [data,setData] = useState({})
  // const [tests,setTests] = useState(data.test)
  // console.log(tests)
  const handleItem =(num)=>{
    const items  = allData?.find((item)=>item._id == num)
    setData(items)
    
  }

  React.useEffect(()=>{
    dispatch(getdata())
    handleItem(id)
    
    console.log(id)
  },[])
  console.log(data)
  console.log(allData)
  const handleClick = ()=>{
    history.push("/dashboard")
  }
  return (
    <>
    <div style = {{display:"flex",justifyContent:"center"}}>
        <div className={classes.profile_avatar_container}>
            <Avatar
              className={classes.profile_image} 
              href={`${data.name}`}
              src="" 
              alt = {data.name}
            />
        </div>
        <div>
            <h1>Student Name : {data.name}</h1>
            <h3>Gender : {data.gender}</h3>
            <h3>Grade : {data.grade}</h3>
        </div>
      </div> 
      <Button onClick = {handleClick}>Go Back</Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Dates</StyledTableCell>
              <StyledTableCell align="right">Subjects</StyledTableCell>
              <StyledTableCell align="right">Marks</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.test?.map((item) =>
              item.report.map((d) => (
                <StyledTableRow key={d._id}>
                  <StyledTableCell align="right">{d.date}</StyledTableCell>
                  <StyledTableCell align="right">{d.subject}</StyledTableCell>
                  <StyledTableCell align="right">{d.marks}</StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default StudentsID;
