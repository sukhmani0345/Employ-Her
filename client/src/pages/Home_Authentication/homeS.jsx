import React from "react";
import { Box, Grid, Typography, Button, ThemeProvider} from '@material-ui/core';
import { signInWithGoogle } from "./Firebase.js";


export default (props) =>( 

<Box py={10} bgcolor="secondary.main" color = "White">
<Grid container justifyContent="center" >
    <Grid item x = {10}>
        <Box display = "flex" justifyContent="space-between">
        <Button variant = "contained" color = "primary" disableElevation onClick={signInWithGoogle}>login-with-google-btn</Button>
        </Box>
    </Grid>
</Grid>
</Box>
  );
