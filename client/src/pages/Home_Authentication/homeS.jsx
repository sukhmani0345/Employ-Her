import React from "react";
import { Box, Grid, Button} from '@material-ui/core';
import { signInWithGoogle } from "./Firebase.js";
import "./homeS.css"



export default (props) =>( 
<header>
<Box py={10} color = "White">
<Grid container justifyContent="center" >
    <Grid item x = {10}>
        <Box display = "flex" justifyContent="center" marginBottom={10}>
        <Button variant = "contained" color = "primary" disableElevation onClick={signInWithGoogle} >login-with-Google</Button>
        </Box>
        {/* <video className = 'intro'
          style={{ maxWidth: "100%", width: "800px", margin: "10 auto",borderRadius:"5px"}}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="video"
          type="video/mp4"
        /> */}
        {/* <img src='client/src/pages/EmployHer.jpeg' ></img> */}
    </Grid>
</Grid>
</Box>
</header>
  );