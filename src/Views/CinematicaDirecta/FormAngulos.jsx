import  React from 'react';

import {Button,Grid,Typography,Paper,TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import cssFormAngulos from './cssFormAngulos';
const styles = makeStyles(cssFormAngulos);

const FormAngulos = props =>{
    const classes = styles();
    return(
        <div >
            <Paper>
                <form>
                    <Typography  variant="h5">Ingrese los dos angulos para calcular un punto</Typography>
                    <Grid container>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.textField} 
                                label="Θ1"
                                type="number"
                                variant="outlined"
                                fullWidth/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField 
                                className={classes.textField} 
                                label="Θ2"
                                type="number"
                                variant="outlined"
                                fullWidth/>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                className={classes.boton}
                            >Buscar Punto</Button>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography variant="h6">Coodenada en X: {0.0}</Typography>
                        </Grid>
                        <Grid item xs={6} >
                        <Typography variant="h6">Coodenada en Y: {0.0}</Typography>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
export default FormAngulos;