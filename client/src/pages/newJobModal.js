import React from 'react';
import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogContent, DialogTitle, DialogActions, Typography, Button} from "@material-ui/core";

// const useStyles = makeStyles(theme =>({

// }))

import { Close as CloseIcon } from "@material-ui/icons";


export default (props) => {

    const skills = [
        "Javascript", "React", "Node", "Vue", "Firebase", "SQL",
    ];

    return (
        <Dialog open = {false} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between">
                Post Job
                <CloseIcon></CloseIcon>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs ={6}>
                    <FilledInput placeholder='Job Title *' disableUnderline fullWidth/>
                    </Grid>
                    <Grid fillwidth item xs ={6}>
                        <Select className = "wrapper" disableUnderline variant = "filled" defaultValue="Full time">
                        <MenuItem value =  "Full time">Full time</MenuItem>
                        <MenuItem value =  "Part time">Part time</MenuItem>
                        <MenuItem value =  "Contract">Contract</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs ={6}>
                    <FilledInput placeholder='Company Name *' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs ={6}>
                    <FilledInput placeholder='Company URL *' disableUnderline fullWidth/>
                    </Grid>
                    <Grid fillwidth item xs ={6}>
                        <Select className = "wrapper" disableUnderline variant = "filled" defaultValue="Remote">
                        <MenuItem value =  "Remote">Remote</MenuItem>
                        <MenuItem value =  "In Office">In Office</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs ={6}>
                    <FilledInput placeholder='Job Link *' disableUnderline fullWidth/>
                    </Grid>
                    <Grid item xs ={12}>
                    <FilledInput placeholder='Job Description *' disableUnderline fullWidth multiline rows={4}/>
                    </Grid>
                </Grid>
                <Box mt ={2}>
                    <Typography>Skills</Typography>
                    <Box display="flex">
                        {skills.map(skill => <Box key={skills}>{skill}</Box>)}
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box color="red" width="100%" display="flex" justifyContent ="space-between" alignItems="center">
                    <Typography variant='caption'>
                    *Required Fields
                </Typography>
                <Button variant = "contained" color = "primary" disableElevation>
                    Post Job
                </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )

};