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
import { Grid, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import { Topic } from './topic';
import Post from './post';
import { useState } from 'react';
import { eventNames } from 'process';

export default function Block(){

    const [Namevalue, setValueName] = useState("")
    const [Emailvalue, setValueEmail] = useState("")
    const [Lnamevalue, setValueLname] = useState("")

    const [acceptPDPA, setAcceptPDPA] = useState(false)
    console.log({acceptPDPA})
    const handlePDPAChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAcceptPDPA(event.target.checked)
    }

    const [gender, setGender] = useState<string>("Male")
    console.log({gender})

    const [hobbys, setHobbys] = useState<string[]>([])
    const handleHobbysChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const index = hobbys.indexOf(event.target.value)

        if(index === -1){
            setHobbys([...hobbys, event.target.value])
        }
        else{
            setHobbys(hobbys.filter((hobbys) => hobbys !== event.target.value))
        }
    }
    console.log({hobbys})

    const [status, setStatus] = useState('');
    console.log({status})
    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newStatus = event.target.value as string;
        setStatus(newStatus);
    }
    const [Notevalue, setValueNote] = useState("")

    return (
        <Grid container spacing={3}>

            <Grid item xs={12} md={5}>
                <Topic/>
                <Box
                    component="form"
                    noValidate
                    sx={{ width: 400, maxWidth: '100%',}}
                    // onSubmit={onSummit}
                >
                    <Paper className={styled.Paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={(newNameValue) => {setValueName(newNameValue.target.value);}}
                                    defaultValue={Namevalue}
                                    value={Namevalue}
                                    className={styled.Name} id="Name" label="Name"
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField 
                                    onChange={(newLNameValue) => {setValueLname(newLNameValue.target.value);}}
                                    defaultValue={Lnamevalue}
                                    value={Lnamevalue}
                                    className={styled.Name} id="Lastname" label="Lastname"
                                /> 
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                onChange={(newEmailValue) => {setValueEmail(newEmailValue.target.value);}}
                                defaultValue={Emailvalue}
                                value={Emailvalue}
                                fullWidth className={styled.Email} id="Email" label="Email"/>
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel 
                                    control={<Checkbox checked={acceptPDPA} onChange={handlePDPAChange} />} 
                                    label="Confirm PDPA" 
                                    value={'ConfirmPDPA'}
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
                                        value={gender}
                                        onChange={(event) => setGender(event.target.value)}
                                    >
                                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="Etc" control={<Radio />} label="Etc" />
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
                                            label="Game" 
                                            value={'Game'}
                                            control={<Checkbox checked={hobbys.includes('Game')}  onChange={handleHobbysChange}/>}   
                                        />
                                        <FormControlLabel 
                                            label="Music"   
                                            value={'Music'}
                                            control={<Checkbox checked={hobbys.includes('Music')}  onChange={handleHobbysChange}/>} 
                                        />
                                        <FormControlLabel
                                            label="Craft" 
                                            value={'Craft'} 
                                            control={<Checkbox checked={hobbys.includes('Craft')}  onChange={handleHobbysChange}/>} 
                                        />
                                        <FormControlLabel 
                                            label="Reading" 
                                            value={'Reading'}
                                            control={<Checkbox checked={hobbys.includes('Reading')}  onChange={handleHobbysChange}/>} 
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        
                            <Grid item xs={12}>
                                <FormControl fullWidth >
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        value={status}
                                        label="Status"
                                        // onChange={handleStatusChange}
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
                                    onChange={(newNoteValue) => {setValueNote(newNoteValue.target.value);}}
                                    defaultValue={Notevalue}
                                    value={Notevalue}
                                    id="Note" label="Note"
                                />
                            </Grid>
                            
                            <Grid item xs={12} spacing={2} direction="row" style={{marginTop: 16}}>
                                <Box
                                    gap={2}
                                    display={'flex'}
                                    justifyContent={'end'}
                                >
                                    <Button 
                                        variant="contained"
                                        onClick={() => {
                                            setValueName('')
                                            setValueLname('')
                                            setValueEmail('')
                                            setAcceptPDPA(false)
                                            setGender('Male')
                                            setHobbys([])
                                            setValueNote('')
                                            }}
                                    >
                                    Reset
                                    </Button>

                                    <Button variant="contained">Summit</Button>
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
