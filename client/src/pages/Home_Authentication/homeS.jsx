import React from "react";
import { Box, Grid, Typography, Button, ThemeProvider} from '@material-ui/core';
import { signInWithGoogle } from "./Firebase.js";


export default (props) =>( 

<Box py={10} bgcolor="secondary.main" color = "White">
<Grid container justifyContent="center" >
    <Grid item x = {10}>
        <Box display = "flex" justifyContent="center" marginBottom={10}>
        <Button variant = "contained" color = "primary" disableElevation onClick={signInWithGoogle} >login-with-google-btn</Button>
        </Box>
        <video className = 'intro'
          style={{ maxWidth: "100%", width: "800px", margin: "10 auto",borderRadius:"5px"}}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
        />
    </Grid>
</Grid>
</Box>
  );
