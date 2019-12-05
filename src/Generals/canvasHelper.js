const dibujarMecanismo = (canvasRef,theta11,theta12,theta21,theta22 )=>{
    const canvas = canvasRef.current;    
    const barraPequeña = 8*15;    
    const barraGrande = 15*15;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        const ctx = canvas.getContext('2d');
    
        //Area de Trabajo
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,0,0,0.1)'
            //ctx.moveTo(900,400);//con esto hacemos forma de pizza
        ctx.arc(900, 400, 345,  2.02074221, 4.2624431);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
            //ctx.moveTo(900,400);//con esto hacemos forma de pizza
        ctx.arc(600, 400, 345, 1.1208504, 5.16233486,true);
        ctx.fill();
        ctx.closePath();
        ctx.fillRect(1000, 50, 50, 50)
        ctx.closePath();

            //Restamos los circulos de los motores
            ctx.beginPath();
            ctx.fillStyle = '#fff'
            ctx.arc(900, 400, 7*15,  0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
            //Restamos los circulos de los motores
            ctx.beginPath();
            ctx.fillStyle = '#fff'
            ctx.arc(600, 400,7*15,  0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();

        //Motor Izquierdo
        ctx.beginPath();
        ctx.fillStyle = '#2196f3'
        ctx.arc(600, 400, 10, 0, 2 * Math.PI);
        ctx.closePath();

        ctx.fill();
        //Motor Derecho
        ctx.beginPath();
        ctx.arc(900, 400, 10, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        
        //Descripcion de los motores
        ctx.beginPath();
        ctx.arc(1025, 120, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.font = "bold 22px sans-serif";
        ctx.fillStyle = 'rgba(0,0,0,1)'
        ctx.closePath();
        ctx.fillText("Motores",1050,130);

        //Eje y
        ctx.beginPath();
        ctx.strokeStyle = '#607d8b'
        ctx.moveTo(600, 0);
        ctx.lineTo(600, 900);
        ctx.closePath();
        ctx.stroke();
        //Eje x
        ctx.beginPath();
        ctx.moveTo(0, 400);
        ctx.lineTo(1500, 400);
        ctx.closePath();
        ctx.stroke();

        //Descripccion para el area de Trabajo
        ctx.fillStyle = 'rgba(0,0,0,1)'
        ctx.fillText("Area de trabajo",1050,75);
        ctx.closePath();

        //Pintar barras cortas
            //barra derecha
        ctx.beginPath(); 
        ctx.strokeStyle= "#ff5722";
        ctx.lineWidth = 5;
        ctx.moveTo(600, 400);
        let x11 = barraPequeña*Math.cos(theta11);
        let y11 = barraPequeña*Math.sin(theta11);
        ctx.lineTo(600+x11, 400-y11);
        ctx.closePath();
        ctx.stroke();
            //barra izquierda
        ctx.beginPath(); 
        ctx.strokeStyle= "#ff5722";
        ctx.lineWidth = 5;
        ctx.moveTo(900, 400);
        let x21 = barraPequeña*Math.cos(theta21);
        let y21 = barraPequeña*Math.sin(theta21);
        ctx.lineTo(900+x21, 400-y21);
        ctx.closePath();
        ctx.stroke();

        //Pintar barras largas
            //barra derecha
        ctx.beginPath(); 
        ctx.strokeStyle= "#6200ea";
        ctx.lineWidth = 6;
        ctx.moveTo(600+x11, 400-y11);
        let x12 = barraGrande*Math.cos(theta11+theta12);
        let y12 = barraGrande*Math.sin(theta11+theta12);
        ctx.lineTo(600+x11+x12, 400-y11-y12);
        ctx.closePath();
        ctx.stroke();
            //barra izquierda
        ctx.beginPath(); 
        ctx.strokeStyle= "#6200ea";
        ctx.lineWidth = 6;
        ctx.moveTo(900+x21, 400-y21);
        let x22 = barraGrande*Math.cos(theta21+theta22);
        let y22 = barraGrande*Math.sin(theta21+theta22);
        ctx.lineTo(900+x21+x22, 400-y21-y22);
        ctx.closePath();
        ctx.stroke();


}
export default dibujarMecanismo;