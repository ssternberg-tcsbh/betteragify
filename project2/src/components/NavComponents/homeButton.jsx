import { useState  } from "react";
import {  Button } from "@mui/material";



export function HomeButton (){
    const [isDropDownVisible, setDropdownVisible] = useState(false);
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    }
    const handleMouseLeave= () => {
        setDropdownVisible(false);
    }
    return(
        <>
        
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button variant="contained">agify.io</Button>
            {isDropDownVisible && <ul>
            <li>genderize.io</li>
            <li>agify.io</li>
            <li>nationalize.io</li>
        </ul>}
        </div>
        </>
    )
}