import {Stack, Box} from "@mui/material";

const images = [{name:"Guardian",path:"https://agify.io/images/customer_logos/guardian-d9feb3df3d78df9b3b5d034656cfe04f.svg?vsn=d"},
    {name:"Columbia",path:"https://agify.io/images/customer_logos/columbia_university-059fd24d704c612818d23976524b311f.svg?vsn=d"},
{name:"Uber",path:"https://agify.io/images/customer_logos/uber-d76222edf6afe3a3c1e7f9e9fc35a274.svg?vsn=d"},
{name:"Nature",path:"https://agify.io/images/customer_logos/nature-8120a4123c0b82b4149622eb60a45e51.svg?vsn=d"},
{name:"MIT",path:"https://agify.io/images/customer_logos/mit_university-f46023b7be13617aa4bc87ae7d741036.svg?vsn=d"},
{name:"Shopify",path:"https://agify.io/images/customer_logos/shopify-ee89fd60437ceae72d923bf9fe4bdd3f.svg?vsn=d"},
{name:"The Washington Post",path:"https://agify.io/images/customer_logos/washington_post-e906e121eddf2d48699689ff66360ae9.svg?vsn=d"},
{name:"Yale",path:"https://agify.io/images/customer_logos/yale_university-045240ec50a023a330c27e386afba8f8.svg?vsn=d"},
]

export function Orgs(){
    return(
        <>
        
        <Stack direction="row" sx={{display:"flex", width:"100%", gap:3.25}}>
            {images.map (item=> (
                <img key = {item.name} style={{width:"10%", height:"10%"}} src={item.path}></img>

            ))} 
        </Stack>


        </>
    )
}