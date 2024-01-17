import styled from "@/styles/NavBar.module.css"
import { Grid } from "@mui/material"

export default function NavBar(){
    return (
        <header>
            <Grid className={styled.Nav}>User profile management System</Grid>
        </header>
    )
}