import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import {Container,Grid,IconButton,Paper,TextField, Button} from '@material-ui/core';

import cssConfiguracion from './cssConfiguracion';
const style = makeStyles(cssConfiguracion);

const urlRef=React.createRef();
const ConfiguracionContainer = props =>{
    const classes = style();
    return(
        <div>
            <Link to="/">
                <IconButton className={classes.iconButton} >
                    <HomeIcon/>
                </IconButton>
            </Link>
            <Container>
                <Paper>
                    <Grid container>
                        <Grid xs={10}>
                            <TextField
                                label="url"
                                variant="outlined"
                                fullWidth
                                type="text"
                                inputRef={urlRef}
                            />
                        </Grid>
                        <Grid xs={2}>
                            <Button onClick={()=>props.setHost(urlRef.current.value)} fullWidth variant="outlined" color="secondary">Set URL</Button>
                        </Grid>
                    </Grid>
                    
                </Paper>
            </Container>
        </div>
    );
}
export default ConfiguracionContainer;