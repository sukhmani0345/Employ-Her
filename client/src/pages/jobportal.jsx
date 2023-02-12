// import React from 'react';
// // import { Box, ThemeProvider } from "@material-ui/core";
// import { Box, ThemeProvider } from "@mui/material";
// import theme from "../theme/theme";

// const JobPortal =  () =>{

//     return <ThemeProvider theme={theme}></ThemeProvider>
// }

// export default JobPortal;

import React from 'react';
import { Box, Grid, Typography, Button, ThemeProvider, makeStyles, Select, MenuItem} from '@material-ui/core';
import "./jobportal.css";

const skills = ["Javascript", "React.js", "Node.js"];

// const useStyles = makeStyles((theme)=> ({
//     wrapper: {
//         border:'1px solid #e8e8e8',

//     },
//     companyName: {
//         font-size: "13.5px",
//         background-
//     }
// }));
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

export default (props) =>( 

    <Box py = {10} bgcolor = "secondary.main" color = "white">
        <Grid container bgcolor="secondary.main" className='cont1' justify = "center" >
                <Box className = 'headerbox' display = "flex" justifyContent="space-between">
                <Typography variant ="h4" className = 'typo'>
                    Open Job listing
                </Typography>
                <Button className = 'button' variant = "contained" color = "primary" disableElevation>Post a Job</Button>
                </Box>
        </Grid>
        <Box justifyContent="center" display="flex">
                <Select className = "wrapper" disableUnderline variant = "filled" defaultValue="Full time">
                    <MenuItem value =  "Full time">Full time</MenuItem>
                    <MenuItem value =  "Part time">Part time</MenuItem>
                    <MenuItem value =  "Contract">Contract</MenuItem>
                </Select>
                <Select className = "wrapper" disableUnderline variant = "filled" defaultValue="Remote">
                    <MenuItem value =  "Remote">Remote</MenuItem>
                    <MenuItem value =  "In Office">In Office</MenuItem>
                </Select>
                <Button  color = "primary" variant = "contained" disableElevation>
                    Search 
                </Button>
            </Box>
            <Box className="wrapper2" bgcolor="white" color = "black">
                <Grid container className = "wrapper1" alignItems='center'>
                    <Grid item xs>
                        <Typography variant="subtitel">Frontend Dev</Typography><br></br>
                        <Typography variant="subtitle2" className='companyName'>Google</Typography>
                    </Grid>
                    <Grid item container xs justifyContent="center" display="flex">
                        {skills.map(skill => 
                        <Grid key={skill} className = "skillchip" item>
                            {skill}
                        </Grid>)}
                    </Grid>
                    <Grid item container direction="column" alignItems='flex-end' xs>
                    <Grid item>
                        <Typography variant="caption">2557 min ago | Full time | Remote</Typography>
                    </Grid>
                    <Grid item>
                        <Box mp = {2}>
                        <Button  color = "primary" variant = "contained" disableElevation>
                    Check
                </Button>
                        {/* <Button variant = "outlined" m = {5} p={5}>Check</Button> */}
                        </Box>
                    </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className="wrapper2" bgcolor="white" color = "black">
                <Grid container className = "wrapper1" alignItems='center'>
                    <Grid item xs>
                        <Typography variant="subtitel">Frontend Dev</Typography><br></br>
                        <Typography variant="subtitle2" className='companyName'>Google</Typography>
                    </Grid>
                    <Grid item container xs justifyContent="center" display="flex">
                        {skills.map(skill => 
                        <Grid key={skill} className = "skillchip" item>
                            {skill}
                        </Grid>)}
                    </Grid>
                    <Grid item container direction="column" alignItems='flex-end' xs>
                    <Grid item>
                        <Typography variant="caption">2557 min ago | Full time | Remote</Typography>
                    </Grid>
                    <Grid item>
                        <Box mp = {2}>
                        <Button  color = "primary" variant = "contained" disableElevation>
                    Check
                </Button>
                        {/* <Button variant = "outlined" m = {5} p={5}>Check</Button> */}
                        </Box>
                    </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className="wrapper2" bgcolor="white" color = "black">
                <Grid container className = "wrapper1" alignItems='center'>
                    <Grid item xs>
                        <Typography variant="subtitel">Frontend Dev</Typography><br></br>
                        <Typography variant="subtitle2" className='companyName'>Google</Typography>
                    </Grid>
                    <Grid item container xs justifyContent="center" display="flex">
                        {skills.map(skill => 
                        <Grid key={skill} className = "skillchip" item>
                            {skill}
                        </Grid>)}
                    </Grid>
                    <Grid item container direction="column" alignItems='flex-end' xs>
                    <Grid item>
                        <Typography variant="caption">2557 min ago | Full time | Remote</Typography>
                    </Grid>
                    <Grid item>
                        <Box mp = {2}>
                        <Button  color = "primary" variant = "contained" disableElevation>
                    Check
                </Button>
                        {/* <Button variant = "outlined" m = {5} p={5}>Check</Button> */}
                        </Box>
                    </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box className="wrapper2" bgcolor="white" color = "black">
                <Grid container className = "wrapper1" alignItems='center'>
                    <Grid item xs>
                        <Typography variant="subtitel">Frontend Dev</Typography><br></br>
                        <Typography variant="subtitle2" className='companyName'>Google</Typography>
                    </Grid>
                    <Grid item container xs justifyContent="center" display="flex">
                        {skills.map(skill => 
                        <Grid key={skill} className = "skillchip" item>
                            {skill}
                        </Grid>)}
                    </Grid>
                    <Grid item container direction="column" alignItems='flex-end' xs>
                    <Grid item>
                        <Typography variant="caption">2557 min ago | Full time | Remote</Typography>
                    </Grid>
                    <Grid item>
                        <Box mp = {2}>
                        <Button  color = "primary" variant = "contained" disableElevation>
                    Check
                </Button>
                        {/* <Button variant = "outlined" m = {5} p={5}>Check</Button> */}
                        </Box>
                    </Grid>
                    </Grid>
                </Grid>
            </Box>
    </Box>

)