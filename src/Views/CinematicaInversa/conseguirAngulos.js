const conseguirAngulos = (X,Y)=>{
    let barraPequeña = 8;//120
    let barraGrande = 15;//225
    let L = 20;
//104.78
    //Barras Izquierdas
    let cosTheta12  = (-(barraPequeña**2)-(barraGrande**2)+(X**2)+(Y**2))/(2*barraGrande*barraPequeña);
    let sinTheta12 = Math.sqrt(1-(cosTheta12**2));
    let theta12 = Math.acos(cosTheta12);

    let cosTheta11 = -(-(barraPequeña**2)*X+(barraGrande**2)*X-(X**3)-X*Y**2-2*barraPequeña*barraGrande*Y*sinTheta12)/(2*barraPequeña*(X**2+(Y**2)));
    let sinTheta11 = -(-(barraPequeña**2)*Y+(barraGrande**2)*Y-(Y**3)-Y*X**2+2*barraPequeña*barraGrande*X*sinTheta12)/(2*barraPequeña*(X**2+(Y**2)));
    let theta11 = Math.atan2(sinTheta11,cosTheta11);

    //Barras Derechas 
    let cosTheta22 = (-(barraPequeña**2)-(barraGrande**2)+(X-L)**2+(Y**2))/(2*barraGrande*barraPequeña);
    let sinTheta22 =  Math.sqrt(1-(cosTheta22**2));
    let theta22 = Math.acos(cosTheta22);

    let cosTheta21 = -((L-X)*(barraPequeña+barraGrande*cosTheta22)-barraGrande*Y*sinTheta22 )/( (X-L)**2+(Y**2) );
    
    let termino1SinTheta21 = ( -1/(2*barraPequeña*((X-L)**2 +(Y**2))) );
    let termino2SinTheta21 = (-(barraPequeña**2)*Y+(barraGrande**2)*Y-(L**2)*Y+2*L*X*Y-(X**2)*Y-(Y**3) );
    let termino3SinTheta21 = (2*barraGrande*barraPequeña*sinTheta22*(X-L));

    let sinTheta21 = termino1SinTheta21*(termino2SinTheta21+termino3SinTheta21);


    let theta21 = Math.atan2(sinTheta21,cosTheta21);




    // console.log('x1',barraPequeña*Math.cos(theta11)+barraGrande*Math.cos(theta11+theta12));
    // console.log('y1',barraPequeña*Math.sin(theta11)+barraGrande*Math.sin(theta11+theta12));

    // console.log('x2',barraPequeña*Math.cos(theta21)+barraGrande*Math.cos(theta21+theta22));
    // console.log('y2',barraPequeña*Math.sin(theta21)+barraGrande*Math.sin(theta21+theta22));

    // console.log('theta11',theta11*180/Math.PI)
    // console.log('theta12',theta12*180/Math.PI)
    // console.log('theta21',theta21*180/Math.PI)
    // console.log('theta22',theta22*180/Math.PI)


    return {theta11,theta12,theta21,theta22}
}
export default conseguirAngulos;