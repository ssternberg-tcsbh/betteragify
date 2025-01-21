import {NavBar} from './components/nav.jsx'
import {Search} from './components/search'
import {Title} from './components/HeroComponents/title.jsx'
import { Stack } from '@mui/material';
import { Orgs } from './components/HeroComponents/orgs.jsx'
//import {HomeButton} from './components/NavComponents/homeButton.jsx'

// Components need to be capitalized

function App() {
  return(
    <>
    <main>
    <Stack direction={'column'}
      sx={{display:'flex', gap:15, justifyContent:"center"}}>
    <NavBar/>
    <Title/>
    <Search />
    
    <Orgs/>
    
    </Stack>
   
    </main>
    </>
  )
}

export default App;
