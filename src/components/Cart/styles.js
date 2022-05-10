import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  title: {
    marginTop: '5%',
    marginBottom: '20px',
  },
  emptyButton: {
    minWidth: '150px',
    margin: "0 20px 0 0"
    
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
}));