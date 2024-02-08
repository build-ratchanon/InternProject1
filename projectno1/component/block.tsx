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
  const [userInput, setUserInput] = useState({
    index: 0,
    name: "",
    lastName: "",
    email: "",
    pdpa: false,
    gender: "Male",
    hobbys: [],
    status: "",
    note: "",
  });

  const handleReset = (): void => {
    setUserInput({
      index: 0,
      name: "",
      lastName: "",
      email: "",
      pdpa: false,
      gender: "Male",
      hobbys: [],
      status: "",
      note: "",
    })
  }

  const [allValue, setAllValue] = useState<UserDetails[]>([]);

  const handleAddValue = (): void => {
    const newUserInput = {
      id: userInput.index,
      name: userInput.name,
      lastName: userInput.lastName,
      email: userInput.email,
      pdpa: userInput.pdpa,
      gender: userInput.gender,
      hobby: userInput.hobbys,
      status: userInput.status,
      note: userInput.note,
    };
    userInput.index += 1
    setAllValue([...allValue, newUserInput]);
    console.log(userInput)
  };

  const handleDelectValue = (delectValue: number): void => {
    setAllValue(
      allValue.filter((detail) => {
        return detail.id != delectValue;
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
                  value={userInput.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setUserInput({
                      ...userInput, name: event.target.value
                    })
                  }}
                  fullWidth
                  name="name"
                  id="Name"
                  label="Name"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  value={userInput.lastName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setUserInput({
                      ...userInput, lastName: event.target.value
                    })
                  }}
                  fullWidth
                  name="lastName"
                  id="LastName"
                  label="Lastname"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  value={userInput.email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setUserInput({
                      ...userInput, email: event.target.value
                    })
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
                    <Checkbox
                      checked={userInput.pdpa}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUserInput({
                          ...userInput, pdpa: event.target.checked
                        })
                      }}
                    />
                  }
                  label="Confirm PDPA"
                  value={userInput.pdpa}
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
                    value={userInput.gender}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setUserInput({
                        ...userInput, gender: event.target.value
                      })
                    }}
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
                      control={
                        <Checkbox
                          value={"Game"}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUserInput({
                              ...userInput,
                              hobbys: [
                                ...userInput.hobbys,
                                event.target.value as never
                              ]
                            })
                          }}
                        />
                      }
                    />
                    <FormControlLabel
                      name="music"
                      label="Music"
                      value={"Music"}
                      control={
                        <Checkbox
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUserInput({
                              ...userInput,
                              hobbys: [
                                ...userInput.hobbys,
                                event.target.value as never
                              ]
                            })
                          }}
                        />
                      }
                    />
                    <FormControlLabel
                      name="craft"
                      label="Craft"
                      value={"Craft"}
                      control={
                        <Checkbox
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUserInput({
                              ...userInput,
                              hobbys: [
                                ...userInput.hobbys,
                                event.target.value as never
                              ]
                            })
                          }}
                        />
                      }
                    />
                    <FormControlLabel
                      name="reading"
                      label="Reading"
                      value={"Reading"}
                      control={
                        <Checkbox
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUserInput({
                              ...userInput,
                              hobbys: [
                                ...userInput.hobbys,
                                event.target.value as never
                              ]
                            })
                          }}
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
                    value={userInput.status}
                    label="Status"
                    onChange={(event: SelectChangeEvent) => {
                      setUserInput({
                        ...userInput, status: event.target.value
                      })
                    }}
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
                  value={userInput.note}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setUserInput({
                      ...userInput, note: event.target.value
                    })
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
                      handleReset()
                    }}
                  >
                    Reset
                  </Button>

                  <Button
                    type="button"
                    variant="contained"
                    value={userInput.index}
                    onClick={() => {
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
