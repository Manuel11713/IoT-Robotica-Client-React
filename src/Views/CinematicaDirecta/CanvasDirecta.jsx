import React,{useEffect} from 'react';
import dibujarMecanismo from '../../Generals/canvasHelper';

import  {makeStyles} from '@material-ui/styles';
import cssCanvasDirecta from './cssCanvasDirecta';

const styles = makeStyles(cssCanvasDirecta);

const CanvasReact =props=>{
    const canvasRef = React.useRef(null)
    const classes = styles();
    const {theta11,theta21,theta12,theta22 } = props;
    useEffect(()=>{
        dibujarMecanismo(canvasRef,theta11,theta12,theta21,theta22 );
    });
    
    return(
        <canvas
            className={ classes.canvas}
            ref={canvasRef}
        />
    );
}
export default CanvasReact;