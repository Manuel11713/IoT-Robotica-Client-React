import React,{useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import conseguirAngulos from './conseguirAngulos';
import {Button,Grid,Paper,Typography,TextField,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';

import {makeStyles} from '@material-ui/styles';
import cssFormCoordenada from './cssFormCoordenada';
const style = makeStyles(cssFormCoordenada);


const xRef = React.createRef();
const yRef = React.createRef();
const FormCoordenada = props =>{
    const classes = style();
    const [velocidad,setVelocidad] = useState(2);
    const {setTheta11,setTheta12,setTheta21,setTheta22} = props;
    const {theta11,theta21,theta12,theta22} = props;
    const mandarCoordenadas = ()=>{
        let nombreUsuario = localStorage.getItem('nombreUsuarioLocal');
        let nombreControlador = localStorage.getItem('nombreControlador');
        if(!nombreUsuario){
            Swal.fire(
                'Registrate Primero',
                '',
                'error'
                );
            return null; 
        }
        if(nombreUsuario!==nombreControlador){
            Swal.fire(
                'Espera a que dejen el control',
                '',
                'error'
                );
            return null; 
        }
        
        if(!xRef.current.value||!yRef.current.value){
            Swal.fire(
            'Falta datos',
            'Por favor ingrese valores dentre del campo "X" y "Y" para continuar',
            'error'
            );
            return null; 
        }
        const {theta11,theta12,theta21,theta22} = conseguirAngulos(xRef.current.value,yRef.current.value)
        if(!theta11||!theta21){
            Swal.fire(
                'Error en coordenada',
                'Por favor verifique que la coordenada se encuentre dentro del area de trabajo',
                'error'
            );
            return null};

        setTheta11(theta11);
        setTheta12(theta12);
        setTheta21(theta21);
        setTheta22(theta22);


        const data={
            theta11:theta11*180/Math.PI,//lo convertimos a grados
            theta21:theta21*180/Math.PI,
            theta12:theta12*180/Math.PI,
            theta22:theta22*180/Math.PI,
            velocidad
        }
        
        axios.post(`/posicion`,data).then(res=>console.log(res)).catch(err=>console.log(err));
    }
    return(
        <div>
            <Paper>
                <form>
                    <Typography variant="h6">Ingrese la coordenada X y Y</Typography>
                    <Grid container>
                        <Grid item xs={3}>
                            <TextField
                                label="Coordenada X en Centimetros"
                                variant="outlined"
                                fullWidth
                                type="number"
                                inputRef={xRef}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                label="Coordenada Y en Centimetros"
                                variant="outlined"
                                fullWidth
                                type="number"
                                inputRef={yRef}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl fullWidth >
                                <InputLabel htmlFor="grouped-select">Velocidad (Opcional)</InputLabel>
                                <Select defaultValue='' variant="outlined" labelId="grouped-select" onChange={e=>setVelocidad(e.target.value)} >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <Button onClick={mandarCoordenadas} className={classes.boton} variant="outlined" color="primary" fullWidth>
                                Buscar Angulos
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className={classes.anguloPrimario} variant="h6">Angulo θ<small>11</small>:{(theta11*180/Math.PI).toFixed(2)}°</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className={classes.anguloSecundario} variant="h6">Angulo θ<small>12</small>:{(theta12*180/Math.PI).toFixed(2)}°</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className={classes.anguloPrimario} variant="h6">Angulo θ<small>21</small>:{(theta21*180/Math.PI).toFixed(2)}°</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className={classes.anguloSecundario} variant="h6">Angulo θ<small>22</small>:{(theta22*180/Math.PI).toFixed(2)}°</Typography>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
export default FormCoordenada;