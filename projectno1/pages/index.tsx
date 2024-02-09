import NavBar from "@/component/navbar";
import Block from "@/component/block";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <NavBar />

      <Grid
        sx={{
          marginTop: "30px",
          p: "24px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Block />
      </Grid>
    </>
  );
}
