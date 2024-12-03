import { Button } from "@mui/material";

export function LoginButton(){
    return(
        <Button variant="contained" sx={{
            color: "red",
            bgcolor: "gray",
            border: 3,
        }}>Log in</Button>
    )
}