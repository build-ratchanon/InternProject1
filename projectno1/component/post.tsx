import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { UserDetails } from "./block";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props { 
  user: UserDetails;
  delectValue(index: number): void;
}

const Post = ({ user, delectValue }: Props) => {
  return (
    <Box paddingTop={3}>
      <Paper sx={{ padding: "16px" }}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h6"> USER {} </Typography>

          <IconButton
            aria-label="delete"
            onClick={() => {
              delectValue(user.count);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            {" "}
            <Typography>
              {" "}
              Name: {user?.name || "-"} {user?.lastName}
            </Typography>{" "}
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography> Email: {user?.email || "-"} </Typography>{" "}
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography> Gender: {user?.gender || "-"} </Typography>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography> Hobby: {user?.hobby.join(", ") || "-"} </Typography>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography> Status: {user?.status || "-"} </Typography>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography> Note: {user?.note || "-"} </Typography>
          </Grid>

          <Grid item xs={6}>
            <FormControlLabel
              disabled
              control={<Checkbox checked={user.pdpa} />}
              label="Confirm PDPA"
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Post;
