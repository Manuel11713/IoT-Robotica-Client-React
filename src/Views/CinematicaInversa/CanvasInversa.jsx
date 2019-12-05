import React,{useEffect} from 'react';
import dibujarMecanismo from '../../Generals/canvasHelper';
import  {makeStyles} from '@material-ui/styles';
import cssCanvasInversa from './cssCanvasInversa';

const styles = makeStyles(cssCanvasInversa);

const CanvasReact = props=>{
    const canvasRef = React.useRef(null);
    const {theta11,theta21,theta12,theta22 } = props;
    const classes = styles();
    useEffect(()=>{
        //const {theta11,theta21} = conseguirAngulos(3,7);
        
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