import { Grid } from "@mui/material";

export default function NavBar() {
  return (
    <header>
      <Grid
        sx={{
          margin: 0,
          padding: "10px",
          fontFamily: "Roboto, Helvetica, Arial, serif",
          fontSize: "2.225rem",
          letterSpacing: "0em",
          color: "aliceblue",
          textAlign: "center",
          background: "rgb(25, 118, 210)",
          position: "fixed",
          top: "0%",
          left: "0%",
          width: "100%",
        }}
      >
        User profile management System
      </Grid>
    </header>
  );
}
