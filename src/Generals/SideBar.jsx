import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import Swal from 'sweetalert2';
//Material UI
import {Drawer,Divider,List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core';

//Material UI Icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SettingsIcon from '@material-ui/icons/Settings';
import aragonImg from './img/aragon.jpg';
//Material UI Styles
import {makeStyles} from '@material-ui/core/styles';
import cssSideBar from './cssSideBar';
const styles = makeStyles(cssSideBar);

const SideBar = props =>{
    const classes = styles();
    const [toHome,setToHome] = useState(false);
    const pedirContra = ()=>{
        Swal.fire({
            title: 'Contraseña',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Ingresar',
            showLoaderOnConfirm: true,
            preConfirm: (contraseña) => {
                if(contraseña==='proyecto'){
                    return 'ingresar'
                }else{ return 'denegar'}
                
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if(result.value==='ingresar'){
                setToHome(true);
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Contraseña Incorrecta'
                }) ;
            }
          })
    }
    return(
        <>
        {toHome?<Redirect to="/configuracion"/>:null}
        <Drawer className={classes.drawer} open={true} variant="permanent" anchor="left" 
        classes={{
            paper: classes.drawerPaper,
          }}>
            <div className={classes.drawerContent}>
                <List >
                    <Link className={classes.link} to="/">
                        <ListItem className={classes.list}>
                            <ListItemText>Fes Aragon</ListItemText>
                        <img className={classes.img} src={aragonImg} alt="imagen fes aragon"/>
                        </ListItem>
                    </Link>
                    <Divider className={classes.divider}/>
                    <Link className={classes.link} to="/">
                        <ListItem className={classes.list}>
                            <ListItemIcon className={classes.list}><PlayArrowIcon/></ListItemIcon>
                            <ListItemText>Control</ListItemText>
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/cinematica-directa">
                        <ListItem className={classes.list}>
                            <ListItemIcon className={classes.list}><PlayArrowIcon/></ListItemIcon>
                            <ListItemText>Cinemática Directa </ListItemText>
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/cinematica-inversa">
                        <ListItem className={classes.list}>
                            <ListItemIcon className={classes.list}><PlayArrowIcon/></ListItemIcon>
                            <ListItemText>Cinemática Inversa </ListItemText>
                        </ListItem>
                    </Link>
                    <Link className={classes.link} to="/marco">
                        <ListItem className={classes.list}>
                            <ListItemIcon className={classes.list}><PlayArrowIcon/></ListItemIcon>
                            <ListItemText>Marco Teorico</ListItemText>
                        </ListItem>
                    </Link>
                    <p className={classes.config} onClick={pedirContra}>
                        <ListItem className={classes.list}>
                            <ListItemIcon className={classes.list}><SettingsIcon/></ListItemIcon>
                            <ListItemText>Configuracion</ListItemText>
                        </ListItem>
                    </p>
                </List>
            </div>
        </Drawer>
        </>
    );
}
export default SideBar;