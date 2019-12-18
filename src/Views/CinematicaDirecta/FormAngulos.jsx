import  React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import {Button,Grid,Typography,Paper,TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import cssFormAngulos from './cssFormAngulos';
const styles = makeStyles(cssFormAngulos);
const theta11Ref = React.createRef();
const theta21Ref = React.createRef();
const FormAngulos = props =>{
    const {setTheta11,setTheta21}=props;
    const classes = styles();
    const mandarAngulos=e=>{
        console.log('submit')
        let nombreUsuario = localStorage.getItem('nombreUsuarioLocal');
        let nombreControlador = localStorage.getItem('nombreControlador');
        let theta11get = theta11Ref.current.value;
        let theta21get = theta21Ref.current.value;
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
        
        if(!theta11get||!theta21get){
            Swal.fire(
            'Falta datos',
            'Por favor ingrese valores dentre del campo "theta11" y "theta21" para continuar',
            'error'
            );
            return null; 
        }
        console.log(theta11get*Math.PI/180);
        console.log(theta21get*Math.PI/180)
        setTheta11(theta11get*Math.PI/180);
        setTheta21(theta21get*Math.PI/180);
        setTheta11(0);
        setTheta21(0);
        const data={
            theta11:theta11get,//ya esta en grados a grados
            theta21:theta11get,
            theta12:0,
            theta22:0,
            velocidad:3
        }
        axios.post(`/posicion`,data).then(res=>console.log(res)).catch(err=>console.log(err));

    }
    return(
        <div >
            <Paper>
                <form >
                    <Typography  variant="h5">Ingrese los dos angulos para calcular un punto</Typography>
                    <Grid container>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.textField} 
                                label="Θ11"
                                type="number"
                                variant="outlined"
                                inputRef={theta11Ref}
                                fullWidth/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField 
                                className={classes.textField} 
                                label="Θ12"
                                type="number"
                                variant="outlined"
                                inputRef={theta21Ref}
                                fullWidth/>
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                className={classes.boton}
                                onClick={mandarAngulos}
                            >Buscar Punto</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
}
export default FormAngulos;