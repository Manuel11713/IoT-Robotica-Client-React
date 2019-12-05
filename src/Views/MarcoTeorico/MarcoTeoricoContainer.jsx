import React from 'react';
import SideBar from '../../Generals/SideBar.jsx';
import { Container,Card,CardContent,Grid,  } from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';
import cssMarcoTeorico from './cssMarcoTeorico';
const styles = makeStyles(cssMarcoTeorico);


const MarcoTeoricoContainer = ()=>{
    const classes = styles();

    return(
        <div className={classes.content}>
            <SideBar/>
            <Container >
                <Grid container spacing={2}  >
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <CardContent>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
export default MarcoTeoricoContainer;