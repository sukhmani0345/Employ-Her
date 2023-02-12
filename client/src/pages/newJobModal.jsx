import React from 'react';
import { Box, Grid, FilledInput, Select, MenuItem, Dialog, DialogContent, DialogTitle, DialogActions} from "@material-ui/core";

export default (props) => {

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
            </DialogContent>
        </Dialog>
    )
};