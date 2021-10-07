import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    root:{
        Width:'100%',
        Height:'100%',
    },
    media:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    imageMedia: {
        height: '300px',
        marginTop:'2rem'
      },
}));