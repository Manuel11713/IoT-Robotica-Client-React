import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import FormCoordenada from './FormCoordenada.jsx';
import CanvasInversa from './CanvasInversa.jsx';
import {Container,IconButton} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from '@material-ui/styles';
import cssCinematicaInversa from './cssCinematicaInversa';
import openSocket from 'socket.io-client';
const  socket = openSocket('/');

const style = makeStyles(cssCinematicaInversa); 

const CinematicaInversa = props =>{
    const classes = style();
    const [theta11,setTheta11] = useState(0);
    const [theta21,setTheta21] = useState(0);
    const [theta12,setTheta12] = useState(48.18*Math.PI/180);
    const [theta22,setTheta22] = useState(131.82*Math.PI/180);


    socket.on('iniciarAngulos',data=>{
        console.log('sirve el socket aqui 23')
        const {theta11Server,theta12Server,theta21Server,theta22Server} = data;
        setTheta11(theta11Server);
        setTheta21(theta21Server);
        setTheta12(theta12Server);
        setTheta22(theta22Server)
    });

    return(
        <div className={classes.content} >
            <Link to="/">
                <IconButton className={classes.iconButton} >
                    <HomeIcon/>
                </IconButton>
            </Link>
            <Container>
                <FormCoordenada
                    setTheta11={setTheta11}
                    setTheta21={setTheta21}
                    setTheta12={setTheta12}
                    setTheta22={setTheta22}

                    theta11={theta11}
                    theta21={theta21}
                    theta12={theta12}
                    theta22={theta22}

                    host={props.host}
                />
            </Container>
            <CanvasInversa
                theta11={theta11}
                theta21={theta21}
                theta12={theta12}
                theta22={theta22}
            />
        </div>
    );
}

export default CinematicaInversa;