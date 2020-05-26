import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => {
  return {
    root:{
      /** Box */
      display: 'flex',
      flexDirection: 'column',
      // marginBlockEnd:'20px',
      width: '100%',
      justifyContent: 'center',

      /** Misc */
      '& label.Mui-focused':{
        color: 'white',
      },
      '& .MuiInput-underline:after':{
        borderBottomColor: 'yellow',
      },
    },
    button: {
      marginBlockStart: '15px',
      marginBlockEnd: '10px',
    },
  }
}, {name: 'SearchInput'})