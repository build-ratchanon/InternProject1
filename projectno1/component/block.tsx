import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Topic } from "./topic";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export interface UserDetails {
  id: number;
  name: string;
  lastName: string;
  email: string;
  pdpa: boolean;
  gender: string;
  hobby: string[];
  status: string;
  note: string;
}

export default function Block() {
  const [index, setIndex] = useState(1);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [pdpa, setPDPA] = useState(false);
  // console.log({acceptPDPA})
  const handlePDPAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPDPA(event.target.checked);
  };

  const [gender, setGender] = useState<string>("Male");
  // console.log({gender})

  const [hobbys, setHobbys] = useState<string[]>([]);
  const handleHobbysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = hobbys.indexOf(event.target.value);

    if (index === -1) {
      setHobbys([...hobbys, event.target.value]);
    } else {
      setHobbys(hobbys.filter((hobbys) => hobbys !== event.target.value));
    }
  };
  // console.log({hobbys})

  const [status, setStatus] = React.useState("");
  // console.log(status)
  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const [note, setNote] = useState("");

  const [allValue, setAllValue] = useState<UserDetails[]>([]);

  const handleAddValue = (): void => {
    const newAllValue = {
      id: index,
      name: name,
      lastName: lastName,
      email: email,
      pdpa: pdpa,
      gender: gender,
      hobby: hobbys,
      status: status,
      note: note,
    };
    setAllValue([...allValue, newAllValue]);

    console.log(newAllValue);
  };

  const handleDelectValue = (detailToDelect: number): void => {
    setAllValue(
      allValue.filter((detail) => {
        return detail.id != detailToDelect;
      })
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Topic />
        <Box component="form" noValidate>
          <Paper sx={{ padding: "16px", overflow: "hidden" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  value={name}
                  onChange={(newNameValue) => {
                    setName(newNameValue.target.value);
                  }}
                  fullWidth
                  name="name"
                  id="Name"
                  label="Name"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  onChange={(newLNameValue) => {
                    setLastName(newLNameValue.target.value);
                  }}
                  value={lastName}
                  fullWidth
                  name="lastName"
                  id="LastName"
                  label="Lastname"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(newEmailValue) => {
                    setEmail(newEmailValue.target.value);
                  }}
                  fullWidth
                  name="email"
                  id="Email"
                  label="Email"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox checked={pdpa} onChange={handlePDPAChange} />
                  }
                  label="Confirm PDPA"
                  value={"ConfirmPDPA"}
                  name="pdpa"
                />
              </Grid>

              <Grid item xs={12} className="Gender">
                <FormControl component="fieldset">
                  <FormLabel
                    component="legend"
                    id="demo-row-radio-buttons-group-label"
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="Male"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                  >
                    <FormControlLabel
                      value="Male"
                      control={<Radio name="gender" />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio name="gender" />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Etc"
                      control={<Radio name="gender" />}
                      label="Etc"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} className="Hobby">
                <FormControl component="fieldset">
                  <FormLabel
                    component="legend"
                    id="demo-row-radio-buttons-group-label"
                  >
                    Hobby
                  </FormLabel>
                  <FormGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                  >
                    <FormControlLabel
                      name="game"
                      label="Game"
                      value={"Game"}
                      control={
                        <Checkbox
                          checked={hobbys.includes("Game")}
                          onChange={handleHobbysChange}
                        />
                      }
                    />
                    <FormControlLabel
                      name="music"
                      label="Music"
                      value={"Music"}
                      control={
                        <Checkbox
                          checked={hobbys.includes("Music")}
                          onChange={handleHobbysChange}
                        />
                      }
                    />
                    <FormControlLabel
                      name="craft"
                      label="Craft"
                      value={"Craft"}
                      control={
                        <Checkbox
                          checked={hobbys.includes("Craft")}
                          onChange={handleHobbysChange}
                        />
                      }
                    />
                    <FormControlLabel
                      name="reading"
                      label="Reading"
                      value={"Reading"}
                      control={
                        <Checkbox
                          checked={hobbys.includes("Reading")}
                          onChange={handleHobbysChange}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Status"
                    onChange={handleStatusChange}
                    name="status"
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Marrired">Married</MenuItem>
                    <MenuItem value="Divorce">Divorce</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={note}
                  onChange={(newNoteValue) => {
                    setNote(newNoteValue.target.value);
                  }}
                  name="note"
                  id="Note"
                  label="Note"
                />
              </Grid>

              <Grid
                item
                xs={12}
                spacing={2}
                direction="row"
                style={{ marginTop: 16 }}
              >
                <Box gap={2} display={"flex"} justifyContent={"end"}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={() => {
                      setName("");
                      setLastName("");
                      setEmail("");
                      setPDPA(false);
                      setGender("Male");
                      setHobbys([]);
                      setStatus("");
                      setNote("");
                    }}
                  >
                    Reset
                  </Button>

                  <Button
                    type="button"
                    variant="contained"
                    value={index}
                    onClick={() => {
                      setIndex(index + 1);
                      handleAddValue();
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>

      <Grid className="UserPost" item xs={12} md={7}>
        {allValue.map((detail: UserDetails, keys: number) => (
          <Grid item paddingTop={3}>
            <Paper sx={{ padding: "16px" }}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="h6"> USER {keys + 1} </Typography>

                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    handleDelectValue(detail.id);
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
                    Name: {detail?.name || "-"} {detail?.lastName}
                  </Typography>{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <Typography> Email: {detail?.email || "-"} </Typography>{" "}
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <Typography> Gender: {detail?.gender || "-"} </Typography>
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <Typography>
                    {" "}
                    Hobby: {detail?.hobby.join(", ") || "-"}{" "}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <Typography> Status: {detail?.status || "-"} </Typography>
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <Typography> Note: {detail?.note || "-"} </Typography>
                </Grid>

                <Grid item xs={6}>
                  <FormControlLabel
                    disabled
                    control={<Checkbox checked={detail.pdpa} />}
                    label="Confirm PDPA"
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
