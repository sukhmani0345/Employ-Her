import React from 'react';
<<<<<<< HEAD
=======
<<<<<<<< HEAD:client/src/pages/newJobModal.jsx
>>>>>>> e20df73ed7336fbdbb5d66c580eb334e8580c6ce
import { Box, Grid, FilledInput, Select, MenuItem, Dialog, makeStyles, DialogContent, DialogTitle, DialogActions, Typography} from "@material-ui/core";

export default (props) => {

    const skills = [
        "Javascript", "React", "Node", "Vue", "Firebase", "SQL",
    ];
<<<<<<< HEAD
=======
========

import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogContent, DialogTitle, DialogActions} from "@material-ui/core";

export default (props) => {

    
>>>>>>>> e20df73ed7336fbdbb5d66c580eb334e8580c6ce:client/src/pages/newJobModal.js
>>>>>>> e20df73ed7336fbdbb5d66c580eb334e8580c6ce

    return (
        <Dialog open = {true} fullWidth>
            <DialogTitle>Post Job</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs ={6}>
                    <FilledInput placeholder='Job Ttitle *' disableUnderline fullWidth/>
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
        </Dialog>
    )
};