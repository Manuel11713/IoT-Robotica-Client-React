import bg1 from './img/bg1.jpg'

const cssSideBar ={
    drawer:{
        width:250
    },
    drawerPaper: {
        width: 250,
        backgroundImage:`url(${bg1})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
    },
    drawerContent:{
        height:'100%',
        background:'rgb(0,0,0,0.9)'

    },
    link:{
        textDecoration:'none'
    },
    list:{
        color:'#fff',
        padding:'0.5em',
        textDecoration:'none'
    },
    img:{
        height:40
    },
    divider:{
        backgroundColor:'rgba(255,255,255,0.3)'
    },
    config:{
        cursor:'pointer'
    }
}
export default cssSideBar;