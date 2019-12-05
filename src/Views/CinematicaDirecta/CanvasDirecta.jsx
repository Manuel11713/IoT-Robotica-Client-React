import React,{useEffect} from 'react';
import dibujarMecanismo from '../../Generals/canvasHelper';

import  {makeStyles} from '@material-ui/styles';
import cssCanvasDirecta from './cssCanvasDirecta';

const styles = makeStyles(cssCanvasDirecta);


const theta11 = 0;
const theta21 = 0;
const theta12 = 48.18*Math.PI/180;
const theta22 = 131.82*Math.PI/180;

const CanvasReact = ()=>{
    const canvasRef = React.useRef(null)
    const classes = styles();
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