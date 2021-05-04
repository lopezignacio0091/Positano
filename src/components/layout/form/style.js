import { makeStyles} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
export default makeStyles({
    root: {
        display: 'flex',
      },
      container: {
        marginTop: 100,
        alignContent:'center',
        alignItems:'center'
      },
      inputs:{
          width:'75%',
          marginLeft:'10%'
      },
      chips:{
        width:'75%',
        marginLeft:'10%',
        marginTop:'3%'
    },
      grid:{
          marginTop:'5%'
      },
      gridBotton:{
          marginLeft:'10%',
          marginTop:'10%',
          marginBottom:'10%'
      },
      img:{
          marginLeft:'25%',
          marginTop:'2%'
      }, 
      Botton:{
          backgroundColor:blueGrey[400],
          width:'75%',
          marginLeft:'10%'
      },
      header:{
            backgroundColor:grey[100]
      }  
})