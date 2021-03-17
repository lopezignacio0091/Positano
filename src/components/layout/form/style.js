import { makeStyles} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
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
      grid:{
          marginTop:'5%'
      },
      gridBotton:{
          marginLeft:'10%',
          marginTop:'10%',
          marginBottom:'10%'
      },
      img:{
          marginLeft:'30%',
          marginTop:'5%'
      }, 
      Botton:{
          backgroundColor:teal[400],
          width:'75%',
          marginLeft:'10%'
      }   
})