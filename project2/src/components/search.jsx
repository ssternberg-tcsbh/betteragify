import { Global } from "@emotion/react";
import { TextField, Button, Stack, Menu, MenuItem, Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";

const countries = [
  {Name: "Global", id:""},
  { Name: "United States of America", id: "US" },
  { Name: "Canada", id: "CA" },
  { Name: "China", id: "CN" },
  { Name: "Colombia", id: "CO" },
  { Name: "Fiji", id: "FJ" },
];


let stringOutput = "uyhbubs"

export function Search(){
  function handleSelect(country){
    setSelectedCountry(country)
    setDropDownOpen(false)
    return
  }







  const buttonRef = useRef(null)
  const [dropDownOpen,setDropDownOpen] = useState(false)
  const [selectedCountry,setSelectedCountry] = useState(countries[0])
  const [anchorEl, setAnchorEl]=useState(null)
  const [name, setName]=useState("")
  const [updateString, setUpdateString] = useState("")

  async function onClick() {
    let request=""
    if (name.trim().length > 0) {
        request = `https://api.agify.io?name=${name}`;
        if (selectedCountry.id !== "") {
            request += `&country_id=${selectedCountry.id}`;
        }
        console.log(request);
    }
    else{
      setUpdateString("Fail.")
    }

    await fetch(request)
        .then((res) => res.json())
        .then((json) => {
            let stringOutput; // Declare stringOutput variable

            // Check if there is no selected country
            if (selectedCountry.id === "") {
                // No country id
                if (json.age === null) {
                    stringOutput = `Uh oh. ${name} is unknown to us.`;
                } else {
                    stringOutput = `${name} is ${json.age} years old.`;
                }
            } else {
                // With country id
                stringOutput = `${name} in ${selectedCountry.Name} is ${json.age} years old.`;
            }

            console.log(stringOutput); // Output the string
            setUpdateString(stringOutput)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

   


  return(
    <>
    <Stack direction="row"
    spacing={2}       // Space between the components
    alignItems="center" // Align items vertically in the center
    justifyContent="center">

        <Button variant="contained" ref={buttonRef} onClick = {()=> setDropDownOpen(!dropDownOpen)}>{selectedCountry.id}</Button>
        <Menu anchorEl={buttonRef.current} open={dropDownOpen} onClose={()=>setDropDownOpen(false)}> {countries.map((country)=>(
          <MenuItem onClick={()=>handleSelect(country)} key={country.id}>{`${country.id}:${country.Name}`}</MenuItem>
        ))}
        </Menu>
        <TextField label="Enter name" value={name} onChange = {(event)=>{setName(event.target.value)}}></TextField>
      <Button variant="contained" onClick={()=>onClick(stringOutput)}>Search</Button>
    </Stack>
    <Box>{updateString}</Box>

    </>
  )
}













































/*
export function Search() {
  const [countryState, setCountryState] = useState("");
  const buttonReference = useRef(null);
  
  const firstRender = useRef(null);
  
  // useEffect(() => {
  //   console.log("test 2")
  //   if (firstRender.current === null) {
  //       const api = fetch("https://api.agify.io/?name=michael")
  //       const json = api.then(result => result.json())
  //       json.then(result => {
  //         firstRender.current = result;
  //         console.log(result)
  //       })
        
  //       return;
  //   }

  //   });


  return (
    <>
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        {/* <Button variant="contained" ref={buttonReference}>
          Countries
        </Button> }
        <select name="pets" id="pet-select">
          {countries.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.Name}
              </option>
            );
          })}
        </select>

        <TextField label="First or Full Name" variant="outlined"></TextField>
        <Button variant="contained" onClick={setCountryState()}>Search</Button>
      </Stack>
    </>
  );
}
*/