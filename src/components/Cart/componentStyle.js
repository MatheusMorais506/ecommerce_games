import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  list:{
    paddingRight: 12,
  },
  confirmButton:{
    marginLeft:'12rem',
    marginTop:'-6rem',
  },
  listButton:{
    marginLeft:'1rem',
    marginTop:'0.8rem'
  },
  img:{
    height:"8rem",
    marginTop:'0.5rem',
  },
  Itens:{
    marginBottom:'3rem',
    width: '29rem',
    marginTop:'2rem',
    marginLeft:'1.5rem'
  },
  pagamento:{
    marginBottom:'5rem',
    marginLeft:'5rem',
    width: '22rem',
    height: '10rem',
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  quantProducts:{
    paddingRight: 10,
    height:'1rem',
    width: '3rem',
  },
  emptyButton: {
    minWidth: '100px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  media: {
    paddingRight: 1,
    heigth:150,
    width: 150,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
