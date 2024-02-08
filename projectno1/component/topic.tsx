import { Box, Grid } from "@mui/material"

export function Topic(){
    return (
        <Box sx={{marginTop: '50px', marginBottom: '24px', justifyItems: 'center'}}>
            <Grid sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, fontFamily: 'Roboto, Helvetica, Arial, sans-serif', fontWeight: 400, fontSize: '1.725rem', lineHeight: '1.235', letterSpacing: '0.00735em', color: 'inherit'}}>
                Profile management
            </Grid>
        </Box>
    )
}