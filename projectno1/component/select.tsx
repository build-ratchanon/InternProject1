import * as React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export function StatusSelect() {
  const [status, setStatus] = React.useState("");

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleStatusChange}
        >
          <MenuItem value="Single">Single</MenuItem>
          <MenuItem value="Marrired">Married</MenuItem>
          <MenuItem value="Divorce">Divorce</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}
