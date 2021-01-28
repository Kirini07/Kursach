import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: "100%",
    width: '80%'
  },
  signInContainer:{
    backgroundColor: '#93628F'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#472747',
    color:'#F3DECD'
  },
  signInInput: {
    backgroundColor: '#F3DECD',
    opacity: '.5',
    transition: '.4s',
    '&:focus-within': {
      opacity: '1',
    }
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#492848',
    color:'#F3DECD',
    '&:hover':{
      backgroundColor: '#271526'
    }
  }
}));
