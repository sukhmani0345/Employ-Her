import React from 'react';
// import { Box, ThemeProvider } from "@material-ui/core";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../theme/theme";

const JobPortal =  () =>{

    return <ThemeProvider theme={theme}></ThemeProvider>
}

export default JobPortal;