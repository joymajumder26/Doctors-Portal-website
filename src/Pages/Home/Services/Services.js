import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/fluoride.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name:'Fluoride TreatMent',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur porro necessitatibus impedit sunt eaque possimus delectus similique incidunt voluptatem nihil, error eius enim sapiente facilis odit dignissimos adipisci ratione.',
        img: fluoride
    },
    {
        name:'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur porro necessitatibus impedit sunt eaque possimus delectus similique incidunt voluptatem nihil, error eius enim sapiente facilis odit dignissimos adipisci ratione.',
        img: cavity
    },
    {
        name:'Teeth whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur porro necessitatibus impedit sunt eaque possimus delectus similique incidunt voluptatem nihil, error eius enim sapiente facilis odit dignissimos adipisci ratione.',
        img:whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography  sx={{ fontWeight: 400 ,color: 'success.main',m:2}} variant="h6" component="div">
                        OUR SERVICES
                    </Typography>
      <Typography sx={{ fontWeight: 600 ,m:2}} variant="h4" component="div">
                        Services We Provide
                    </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
           services.map(service =><Service
            key={service.name}
            service = {service}
           ></Service>)
       }
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;