import { Button, Checkbox, FormControlLabel, Grid, IconButton, Paper, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { detailType } from "./block"
import DeleteIcon from '@mui/icons-material/Delete';
import { Label } from "@mui/icons-material";

interface Prop {
    Detail: detailType
    delectValue(detailToDelect: number): void
}

const Post = ({ Detail, delectValue }: Prop) => {
    return(
        <Box paddingTop={3}>
            <Paper sx={{padding: "16px"}}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="h6"> USER {} </Typography>
                    
                    <IconButton aria-label="delete" onClick={() => {delectValue(Detail.count)}} >
                        <DeleteIcon/>
                    </IconButton>
                </Box>
                

                <Grid container spacing={1} >
                    <Grid item xs={6}> <Typography> Name: {Detail?.name || "-"} {Detail?.lastName}</Typography> </Grid>
                    <Grid item xs={6}> <Typography> Email: {Detail?.email || "-"} </Typography>  </Grid>
                    <Grid item xs={6}> <Typography>  Gender: {Detail?.gender || "-"} </Typography></Grid>
                    <Grid item xs={6}> <Typography> Hobby: {Detail?.hobby.join(', ') || "-"} </Typography></Grid>
                    <Grid item xs={6}> <Typography> Status: {Detail?.status || "-"} </Typography></Grid>
                    <Grid item xs={6}> <Typography> Note: {Detail?.note || "-"} </Typography></Grid>

                    <Grid item xs={6}>
                        <FormControlLabel disabled control={<Checkbox checked={Detail.pdpa}/>} label="Confirm PDPA" />
                    </Grid>

                </Grid>
                

                
            </Paper>
        </Box>
    )
}

export default Post;