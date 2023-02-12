import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem
} from "@material-ui/core";
import "./jobportal.css";
// import "./home.css"
// import axios from "axios";

// import { useState, useEffect } from "react";

const skills = ["Javascript", "React.js", "Node.js"];



function Jobportal() {

// const useStyles = makeStyles({

//     wrapper: {
//         backgroundColor: "#fff !important",
//         display: "flex !important",
//         boxShadow: "0px 1px 5px rgba(0. 0. 0. 0.1) !important",
//         borderRadius: "5px!important",
//         "& > *":{
//             flex: 1,
//             height: "45px !important",
//             margin: "8px !important",
//         },
//     }
// });

  return (
    // <header>
    <Box  py={10} bgcolor="secondary.main" color="white">
      <Grid
        container
        bgcolor="secondary.main"
        className="cont1"
      >
        <Box
          className="headerbox"
          display="flex"
          justify = "space-between"
        >
          <Typography variant="h4" className="typo" >
            Open Job listing
          </Typography>
          </Box>
<Box  className="headerbox"
          display="flex"
          justify = "space-between">
          <Button
            className="post"
            variant="contained"
            color="primary"
            disableElevation
            style={{ marginLeft: "1050px" }}
          >
            Post a Job
          </Button>
        </Box>
      </Grid>
      <Box justifyContent="center" display="flex">
        <Select
          className="wrapper"
          disableUnderline
          variant="filled"
          defaultValue="Full time"
          bgcolor="white"
          color="black"
        >
          <MenuItem value="Full time">Full time</MenuItem>
          <MenuItem value="Part time">Part time</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
        </Select>
        <Select
          className="wrapper"
          disableUnderline
          variant="filled"
          defaultValue="Remote"
        >
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="In Office">In Office</MenuItem>
        </Select>
        <Button color="primary" variant="contained" disableElevation>
          Search
        </Button>
      </Box>
      <Box className="wrapper2" bgcolor="white" color="black">
        <Grid container className="wrapper1" alignItems="center">
          <Grid item xs>
            <Typography variant="subtitel">Frontend Dev</Typography>
            <br></br>
            <Typography variant="subtitle2" className="companyName">
              Google
            </Typography>
          </Grid>
          <Grid item container xs justifyContent="center" display="flex" >
            {skills.map((skill) => (
              <Grid key={skill} className="skillchip" item>
                {skill}
              </Grid>
            ))}
          </Grid>
          <Grid item container direction="column" alignItems="flex-end" xs>
            <Grid item>
              <Typography variant="caption">
                2557 min ago | Full time | Remote
              </Typography>
            </Grid>
            <Grid item>
              <Box mp={2}>
                <Button color="primary" variant="contained" disableElevation>
                  Check
                </Button>
                {/* <Button variant = "outlined" m = {5} p={5}>Check</Button> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="wrapper2" bgcolor="white" color="black">
        <Grid container className="wrapper1" alignItems="center" >
          <Grid item xs>
            <Typography variant="subtitel">Frontend Dev</Typography>
            <br></br>
            <Typography variant="subtitle2" className="companyName">
              Google
            </Typography>
          </Grid>
          <Grid item container xs justifyContent="center" display="flex">
            {skills.map((skill) => (
              <Grid key={skill} className="skillchip" item>
                {skill}
              </Grid>
            ))}
          </Grid>
          <Grid item container direction="column" alignItems="flex-end" xs>
            <Grid item>
              <Typography variant="caption">
                2557 min ago | Full time | Remote
              </Typography>
            </Grid>
            <Grid item>
              <Box mp={2}>
                <Button color="primary" variant="contained" disableElevation>
                  Check
                </Button>
                {/* <Button variant = "outlined" m = {5} p={5}>Check</Button> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="wrapper2" bgcolor="white" color="black">
        <Grid container className="wrapper1" alignItems="center">
          <Grid item xs>
            <Typography variant="subtitel">Frontend Dev</Typography>
            <br></br>
            <Typography variant="subtitle2" className="companyName">
              Google
            </Typography>
          </Grid>
          <Grid item container xs justifyContent="center" display="flex">
            {skills.map((skill) => (
              <Grid key={skill} className="skillchip" item>
                {skill}
              </Grid>
            ))}
          </Grid>
          <Grid item container direction="column" alignItems="flex-end" xs>
            <Grid item>
              <Typography variant="caption">
                2557 min ago | Full time | Remote
              </Typography>
            </Grid>
            <Grid item>
              <Box mp={2}>
                <Button color="primary" variant="contained" disableElevation>
                  Check
                </Button>
                {/* <Button variant = "outlined" m = {5} p={5}>Check</Button> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="wrapper2" bgcolor="white" color="black">
        <Grid container className="wrapper1" alignItems="center">
          <Grid item xs>
            <Typography variant="subtitel">Frontend Dev</Typography>
            <br></br>
            <Typography variant="subtitle2" className="companyName">
              Google
            </Typography>
          </Grid>
          <Grid item container xs justifyContent="center" display="flex">
            {skills.map((skill) => (
              <Grid key={skill} className="skillchip" item>
                {skill}
              </Grid>
            ))}
          </Grid>
          <Grid item container direction="column" alignItems="flex-end" xs>
            <Grid item>
              <Typography variant="caption">
                2557 min ago | Full time | Remote
              </Typography>
            </Grid>
            <Grid item>
              <Box mp={2}>
                <Button color="primary" variant="contained" disableElevation>
                  Check
                </Button>
                {/* <Button variant = "outlined" m = {5} p={5}>Check</Button> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
    // </header>
  );
}

export default Jobportal;

