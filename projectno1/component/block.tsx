import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import { StatusSelect } from './select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from "@/styles/Block.module.css";
import { Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, alertClasses } from '@mui/material';
import { Topic } from './topic';
import Post from './post';
import { useState } from 'react';
import { eventNames } from 'process';
import { Init } from 'v8';

interface detailType {
    // count: number,
    name: string,
    lastName: string,
    email: string,
    pdpa: boolean,
    gender: string,
    hobby: string[],
    status: string,
    note: string,
}

const INITValue = {
    // count: 0,
    name: '',
    lastName: '',
    email: '',
    pdpa: false,
    gender: 'Male',
    hobby: [],
    status: '',
    note: '',
  }

export default function Block(){

    const [Namevalue, setValueName] = useState("")
    const [Lnamevalue, setValueLname] = useState("")
    const [Emailvalue, setValueEmail] = useState("")

    const [acceptPDPA, setAcceptPDPA] = useState(false)
    // console.log({acceptPDPA})
    const handlePDPAChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAcceptPDPA(event.target.checked)
    }

    const [genderValue, setGender] = useState<string>("Male")
    // console.log({gender})

    const [hobbysValue, setHobbys] = useState<string[]>([])
    const handleHobbysChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const index = hobbysValue.indexOf(event.target.value)

        if(index === -1){
            setHobbys([...hobbysValue, event.target.value])
        }
        else{
            setHobbys(hobbysValue.filter((hobbysValue) => hobbysValue !== event.target.value))
        }
    }
    // console.log({hobbysValue})

    const [statusValue, setStatus] = React.useState("");
    // console.log(status)
    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };

    const [Notevalue, setValueNote] = useState("")

    const [allValue, setAllValue] = useState<detailType[]>([])
    
    const addValue = () => {
        const newAllValue = {name: Namevalue, lastName: Lnamevalue, email: Emailvalue, pdpa: acceptPDPA, gender: genderValue, hobby: hobbysValue, status: statusValue, note: Notevalue}
        setAllValue([...allValue, newAllValue])
        console.log(newAllValue)
    }

    const [InputField, setInputField] = useState([{ value: ""}])

    return (
        <Grid container spacing={3}>

            <Grid item xs={12} md={5}>
                <Topic/>
                {/* <pre>{JSON.stringify(allValue, undefined, 2)}</pre> */}
                <Box
                    component="form"
                    noValidate
                    sx={{ width: 400, maxWidth: '100%',}}
                >
                    <Paper className={styled.Paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    value={Namevalue}
                                    onChange={(newNameValue) => {setValueName(newNameValue.target.value);}}
                                    
                                    // value={allValue.name}
                                    // onChange={handleChange}
                                    // onChange={(e) => {setAllValue(e.target.value)}}
                                    // defaultValue={Namevalue}
                                    name='name' id="Name" label="Name"
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField 
                                    onChange={(newLNameValue) => {setValueLname(newLNameValue.target.value);}}
                                    value={Lnamevalue}

                                    // value={allValue.lastName}
                                    // onChange={handleChange}
                                    // defaultValue={Lnamevalue}
                                    name='lastName' id="LastName" label="Lastname"
                                /> 
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                    value={Emailvalue}
                                    onChange={(newEmailValue) => {setValueEmail(newEmailValue.target.value);}}
                                    
                                    // value={allValue.email}
                                    // onChange={handleChange}
                                    // defaultValue={Emailvalue}
                                    fullWidth 
                                    name='email' id="Email" label="Email"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel 
                                    control={<Checkbox checked={acceptPDPA} onChange={handlePDPAChange} />} 
                                    label="Confirm PDPA" 
                                    value={'ConfirmPDPA'}
                                    name='pdpa'
                                />
                            </Grid>

                            <Grid item xs={12} className="Gender">
                                <FormControl component="fieldset">
                                    <FormLabel component="legend" id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        defaultValue="Male"
                                        value={genderValue}               
                                        onChange={(event) => setGender(event.target.value)}

                                        // value={allValue.gender}
                                        // onChange={handleChange}
                                    >
                                        <FormControlLabel value="Male" control={<Radio name='gender'/>} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio name='gender'/>} label="Female" />
                                        <FormControlLabel value="Etc" control={<Radio name='gender'/>} label="Etc" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} className="Hobby">
                                <FormControl component="fieldset">
                                    <FormLabel component="legend" id="demo-row-radio-buttons-group-label">Hobby</FormLabel>
                                    <FormGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                    >
                                        <FormControlLabel 
                                            name='game'
                                            label="Game" 
                                            value={'Game'}
                                            control={<Checkbox checked={hobbysValue.includes('Game')}  onChange={handleHobbysChange}/>}   
                                        />
                                        <FormControlLabel 
                                            name='music'
                                            label="Music"   
                                            value={'Music'}
                                            control={<Checkbox checked={hobbysValue.includes('Music')}  onChange={handleHobbysChange}/>} 
                                        />
                                        <FormControlLabel
                                            name='craft'
                                            label="Craft" 
                                            value={'Craft'} 
                                            control={<Checkbox checked={hobbysValue.includes('Craft')}  onChange={handleHobbysChange}/>} 
                                        />
                                        <FormControlLabel 
                                            name='reading'
                                            label="Reading" 
                                            value={'Reading'}
                                            control={<Checkbox checked={hobbysValue.includes('Reading')}  onChange={handleHobbysChange}/>} 
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
                                        value={statusValue}
                                        label="Status"
                                        onChange={handleStatusChange}

                                        // value={allValue.status}
                                        //onChange={handleChange}
                                        name='status'
                                    >
                                    <MenuItem value='Single'>Single</MenuItem>
                                    <MenuItem value='Marrired'>Married</MenuItem>
                                    <MenuItem value='Divorce'>Divorce</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    value={Notevalue}
                                    onChange={(newNoteValue) => {setValueNote(newNoteValue.target.value);}}
                                   
                                    // value={allValue.note}
                                    // onChange={handleChange}
                                    // defaultValue={Notevalue}
                                    name='note' id="Note" label="Note"
                                />
                            </Grid>
                            
                            <Grid item xs={12} spacing={2} direction="row" style={{marginTop: 16}}>
                                <Box
                                    gap={2}
                                    display={'flex'}
                                    justifyContent={'end'}
                                >
                                    <Button 
                                        type='button'
                                        variant="contained"
                                        onClick={() => {
                                            setValueName('')
                                            setValueLname('')
                                            setValueEmail('')
                                            setAcceptPDPA(false)
                                            setGender('Male')
                                            setHobbys([])
                                            setStatus('')
                                            setValueNote('')
                                        }}
                                    >
                                        Reset
                                    </Button>

                                    <Button 
                                        type='button'
                                        variant="contained"                                        
                                        onClick={()=> {addValue()}}

                                    >
                                        Submit
                                    </Button>
                                </Box>

                            </Grid>

                        </Grid>
                    </Paper>
                    
                </Box>

                <Post/>

            </Grid>
        </Grid>

        
        


    )
}
