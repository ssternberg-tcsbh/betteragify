import {Stack, Box} from "@mui/material"
//import {aip} from "./NavComponents/apiFile"
import {HomeButton} from './NavComponents/homeButton.jsx'
import {ExtraButtons} from './NavComponents/extraButtons.jsx'
import {LoginButton} from './NavComponents/loginButton.jsx'




export function NavBar(){
    return (
        <>
    <Stack 
            direction={"row"}
            spacing={2}
            sx={{
                justifyContent: "space-between", // For horizontal spacing
                alignItems: "center", // For vertical
                bgcolor: 'grey',
                height: 80,
                borderBottom: 10,
                display: "flex",
                width: "100%" // This is to ensure the stack takes the whole width
                
                        }}>

    
            <HomeButton />
       <Box sx = {{ display: "flex",
        gap: 5,
        paddingRight: 5
       }} >
            <ExtraButtons/>
            <LoginButton  />

            </Box>
    
        </Stack>
        </>
    )
    
}
