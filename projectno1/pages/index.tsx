import NavBar from "@/component/navbar"
import Block from "@/component/block"
import styles from "@/styles/Home.module.css"
import { Grid } from "@mui/material"

export default function Home() {
  return (
    <>
      <NavBar/>
      
      <Grid className={styles.Form}>
        <Block/>
      </Grid>


    </>
  )
}
