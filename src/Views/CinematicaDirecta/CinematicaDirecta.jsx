import React from 'react';
import {Link} from 'react-router-dom';
import FormAngulos from './FormAngulos.jsx';
import CanvasDirecta from './CanvasDirecta.jsx';

import {IconButton,Container} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';

import {makeStyles} from '@material-ui/core/styles';
import cssCinematicaDirecta from './cssCinematicaDirecta';

const styles = makeStyles(cssCinematicaDirecta);

const CinematicaDirecta = props =>{
    const classes = styles();

    return(
        <div className={classes.content}>
            <Link to="/">
                <IconButton className={classes.iconButton} >
                    <HomeIcon/>
                </IconButton>
            </Link>
            <Container >
                <FormAngulos host={props.host}/>
            </Container>
            <CanvasDirecta/>
        </div>
    );
}
export default CinematicaDirecta;