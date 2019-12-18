import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import FormAngulos from './FormAngulos.jsx';
import CanvasDirecta from './CanvasDirecta.jsx';
import {IconButton,Container,Menu,MenuItem,TextField,Button,Modal} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from '@material-ui/core/styles';
import cssCinematicaDirecta from './cssCinematicaDirecta';
import openSocket from 'socket.io-client';
const  socket = openSocket('/');
const styles = makeStyles(cssCinematicaDirecta);
const nombreUsuarioRef = React.createRef();
const CinematicaDirecta = props =>{
    const classes = styles();
    const [theta11,setTheta11] = useState(0);
    const [theta21,setTheta21] = useState(0);
    const [theta12,setTheta12] = useState(48.18*Math.PI/180);
    const [theta22,setTheta22] = useState(131.82*Math.PI/180);
    const [openModal,setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [nombreUsuarioLocal,setNombreUsuarioLocal] = useState(localStorage.getItem('nombreUsuarioLocal'));
    const [nombreControlador,setNombreControlador] = useState(localStorage.getItem('nombreControlador'));
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
        setOpenModal(false);
    };
    const registrarUsuario = e =>{
        e.preventDefault();
        setOpenModal(false);
        localStorage.setItem('nombreUsuarioLocal',nombreUsuarioRef.current.value);
        setNombreUsuarioLocal(nombreUsuarioRef.current.value);
    }
    const tomarControl = () =>{
        let local = localStorage.getItem('nombreUsuarioLocal');
        if(!local)Swal.fire(
            'Registrate',
            'error'
            );
        else{
            socket.emit('setNombreControlador',local);
            localStorage.setItem('nombreControlador',local);
            setNombreControlador(local);
            console.log('socket ejecutado emit')
        }
        
    }
    socket.on('setNombreControlador',nombre=>{
        console.log('nombre: ',nombre);
        setNombreControlador(nombre);
        if(!nombre)localStorage.removeItem('nombreControlador');
        else localStorage.setItem('nombreControlador',nombre);

    });
    let itemMenu;
    if(!nombreUsuarioLocal)itemMenu=<MenuItem onClick={()=>setOpenModal(true)}>Registrarse</MenuItem>
    else{
        let nombreUsuario = localStorage.getItem('nombreUsuarioLocal');
        itemMenu = <MenuItem onClick={handleClose}>Hola {nombreUsuario}</MenuItem>
    }
    let itemMenuControl;
    if(!nombreControlador)itemMenuControl=<MenuItem onClick={tomarControl}>Tomar el Control</MenuItem>;
    else if(nombreControlador===nombreUsuarioLocal)itemMenuControl=<MenuItem onClick={()=>{
                                                                                        socket.emit('setNombreControlador',null);
                                                                                        localStorage.removeItem('nombreControlador');
                                                                                        setNombreControlador(null);
    }}>Dejar Control</MenuItem>;
    else itemMenuControl=<MenuItem>{nombreControlador} tiene el control</MenuItem>;

    return(
        <div className={classes.content}>
            <Link to="/">
                <IconButton className={classes.iconButton} >
                    <HomeIcon/>
                </IconButton>
            </Link>
            <IconButton onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true" className={classes.iconButtonAccount} >
                <AccountCircleIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {itemMenu}
                {itemMenuControl}
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={openModal}
                onClose={handleClose}
            >
                <form className={classes.modal} onSubmit={registrarUsuario}>
                    <TextField variant="outlined" type="text" fullWidth label="Ingresa tu nombre" inputRef={nombreUsuarioRef}/>
                    <Button type="submit" variant="outlined" color="secondary" fullWidth>Registrarse</Button>
                </form>
            </Modal>
            <Container >
                <FormAngulos
                    setTheta11={setTheta11}
                    setTheta21={setTheta21}
                    setTheta12={setTheta12}
                    setTheta22={setTheta22}



                    host={props.host}/>
            </Container>
            <CanvasDirecta
                theta11={theta11}
                theta21={theta21}
                theta12={theta12}
                theta22={theta22}
            />
        </div>
    );
}
export default CinematicaDirecta;