import {Stack, Box} from "@mui/material"
//import {aip} from "./NavComponents/apiFile"
import {HomeButton} from './NavComponents/homeButton.jsx'
import {ExtraButtons} from './NavComponents/extraButtons.jsx'
import {LoginButton} from './NavComponents/loginButton.jsx'




export function NavBar(){
    return (
    <Stack 
            direction={"row"}
            spacing={2}
            sx={{
                //justifyContent: "center",
                //padding: "10%",
                bgcolor: 'grey',
                height: 80,
                borderBottom: 10
                
                        }}>
            <HomeButton/>
            <Box sx = {{justifyContent: 'flex-end'}}>
            <ExtraButtons/>
            <LoginButton/>

            </Box>
    

        </Stack>
    )
    
}
