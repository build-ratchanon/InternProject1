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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Block(){
    return (
        <div className={styled.Main}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                className={styled.FormBlock}
            >
                <div className={styled.Content}>
                    <TextField className={styled.Name} id="Name" label="Name"/>
                    <TextField className={styled.Lastname} id="Lastname" label="Lastname"/> 
                    <TextField className={styled.Email} id="Email" label="Email"/> 

                    <div>
                        <Checkbox {...label} />
                        <span>Confirm PDPA</span>
                    </div>

                    <div className="Gender">
                        <FormControl component="fieldset">
                            <FormLabel component="legend" id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Etc" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className="Hobby">
                        <FormControl component="fieldset">
                            <FormLabel component="legend" id="demo-row-radio-buttons-group-label">Hobby</FormLabel>
                            <FormGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                            >
                                <FormControlLabel control={<Checkbox />} label="Game" />
                                <FormControlLabel control={<Checkbox />} label="Music" />
                                <FormControlLabel control={<Checkbox />} label="Craft" />
                                <FormControlLabel control={<Checkbox />} label="Reading" />
                            </FormGroup>
                        </FormControl>
                    </div>
                
                    <StatusSelect/>

                    <TextField id="Note" label="Note"/>
                    
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">Reset</Button>
                        <Button variant="contained">Summit</Button>
                    </Stack>
                </div>
            </Box>

            <div className='Post'>
                
            </div>

        </div>

        
        


    )
}
