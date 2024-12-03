import {Box, Typography} from "@mui/material";

export function Title (){
    return(
        <>
        <Box sx={{color:"blue",
            textAlign: "center"
        }}>
          <Typography variant="h2" component="h2">Estimate the age of a Name</Typography>
        </Box>
        </>
    )
    
}