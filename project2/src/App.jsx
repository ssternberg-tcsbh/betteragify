import {NavBar} from './components/nav.jsx'
//import {orgs} from './components/HeroComponents/orgs'
//import {search} from './components/HeroComponents/search'
import {Title} from './components/HeroComponents/title.jsx'
import { Stack } from '@mui/material';
//import {HomeButton} from './components/NavComponents/homeButton.jsx'

// Components need to be capitalized

function App() {
  return(
    <>
    <main>
    <Stack direction={'column'}
    sx={{display:'flex', gap:15}}>
    <NavBar/>
    
    <Title/>
    <img src ="https://agify.io/images/customer_logos/guardian-d9feb3df3d78df9b3b5d034656cfe04f.svg?vsn=d"></img>

    </Stack>
    </main>
    </>
  )
}

export default App;
