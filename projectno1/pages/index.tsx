import NavBar from "@/component/navbar"
import Block from "@/component/block"
import styles from "@/styles/Home.module.css"
import { Grid } from "@mui/material"
import Post from "@/component/post"

export default function Home() {
  return (
    <>
      <NavBar/>
      
      <Grid className={styles.Form}>
        <Block/>
        <Post/>
      </Grid>


    </>
  )
}
