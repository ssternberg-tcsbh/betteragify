import { TextField, Button, Stack } from "@mui/material";
import { useState, useRef, useEffect } from "react";

const countries = [
  { Name: "United States of America", id: "US" },
  { Name: "Canada", id: "CA" },
  { Name: "China", id: "CN" },
  { Name: "Colombia", id: "CO" },
  { Name: "Fiji", id: "FJ" },
];
export function Search() {
  const [countryState, setCountryState] = useState("");
  const buttonReference = useRef(null);
  
  const firstRender = useRef(null);
  
  useEffect(() => {
    console.log("test 2")
    if (firstRender.current === null) {
        const api = fetch("https://api.agify.io/?name=michael")
        const json = api.then(result => result.json())
        json.then(result => {
          firstRender.current = result;
          console.log(result)
        })
        
        return;
    }

    });


  return (
    <>
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        {/* <Button variant="contained" ref={buttonReference}>
          Countries
        </Button> */}
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
        <Button variant="contained">Search</Button>
      </Stack>
    </>
  );
}
