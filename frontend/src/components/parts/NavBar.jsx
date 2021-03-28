import React from "react"
import styled from "styled-components";
import {  NavLink } from "react-router-dom";

const Nav = styled.div`
  background: #2a3eb1;
  height: 50x;
  
`;
export const NavBar = ()=>{
    return(
        <div>
            <Nav>
          <div
            style={{ textAlign: "left", fontSize: "23px", fontWeight: "bold" }}
          >
            Tution Students Records
          </div>
          <div style = {{margin:"auto",width:200,display:"flex",justifyContent:"space-between"}}>

          
          <NavLink
            style={{
              fontSize: "20px",
              color: "black",
              textDecoration: "none",
              padding: "10px",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "white",
            }}
            to="/"
          >
            Register
          </NavLink>
          <NavLink
            style={{
              fontSize: "20px",
              color: "black",
              textDecoration: "none",
              padding: "10px",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: "white",
            }}
            to="/login"
          >
            Login
          </NavLink>
          </div>
        </Nav>
        </div>
    )
}