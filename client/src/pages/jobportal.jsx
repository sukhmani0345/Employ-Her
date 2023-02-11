// import React from 'react';
// // import { Box, ThemeProvider } from "@material-ui/core";
// import { Box, ThemeProvider } from "@mui/material";
// import theme from "../theme/theme";

// const JobPortal =  () =>{

//     return <ThemeProvider theme={theme}></ThemeProvider>
// }

// export default JobPortal;

import React from 'react';
import { Box, Grid, Typography, Button, ThemeProvider} from '@material-ui/core';

export default (props) =>( 
<Box py={10} bgcolor="secondary.main" color = "White">
    <Grid container justifyContent="center" >
        <Grid item x = {10}>
            <Box display = "flex" justifyContent="space-between">
            <Typography variant ="h4">
                Open Job listing
            </Typography>
            <Button variant = "contained" color = "primary" disableElevation>Post a Job</Button>
            </Box>
        </Grid>
    </Grid>
</Box>
);