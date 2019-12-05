import React from 'react';
//import axios from 'axios';
import SideBar from '../../Generals/SideBar.jsx';


import {Button, Container,Card,CardContent,Grid, Typography } from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';
import cssHomeContainer from './cssHomeContainer';
const styles = makeStyles(cssHomeContainer);


const HomeContainer = props=>{
    const classes = styles();
    // const getCentimetros=()=>{
    //     axios.get('/distancia').then(res=>setCentimetros(res.data.centimeters)).catch(err=>console.log(err));
    // }
    // const getCentimetrosInterval=()=>{
    //     //socket.emit('prueba', 500);
    // }
    //socket.on('periodico',(data)=>setCentimetrosIn(data));
    
    return(
        <div className={classes.content}>
            <SideBar/>
            <Container >
                <Grid container spacing={2}  >
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography display="block" variant="h6">Distancia Instantanea</Typography>
                                <Typography display="block" variant="subtitle1">El objeto se encuentra centimetros</Typography>
                                <Button  color ="secondary">Obtener Distancia</Button>
                            </CardContent>
                        </Card>
                        <Grid item xs={12}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography display="block" variant="h6">Distancia en tiempo real</Typography>
                                <Typography display="block" variant="subtitle1">El objeto se encuentra a centimetros</Typography>
                                <Button color ="secondary">Obtener Distancia</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default HomeContainer;