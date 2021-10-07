import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  banner:{
    marginTop:'4rem',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
