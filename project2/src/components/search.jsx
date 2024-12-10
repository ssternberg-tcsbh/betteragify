import {TextField, Button, Stack} from "@mui/material"
import  {useState, useRef} from 'react';

const countries = [
    {Name: "United States of America", id:"US"},
    {Name: "Canada", id:"CA"},
    {Name: "China", id:"CN"},
    {Name: "Colombia", id:"CO"},
    {Name: "Fiji", id:"FJ"} ]
export function Search(){
    const [countryState, setCountryState] = useState("")
    const buttonReference=useRef(null)
    return (
        <>
        <Stack direction="row" sx={{justifyContent:"center"}}>
        <Button variant="contained" ref={buttonReference}>Countries</Button>
        
        <TextField label="First or Full Name" variant ="outlined"></TextField>
        <Button variant="contained">Search</Button>
        </Stack>
        </>
    )
}