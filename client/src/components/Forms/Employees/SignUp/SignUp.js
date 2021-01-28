import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Alert from '@material-ui/lab/Alert'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { useFormik } from 'formik'

import { useStyles } from "./UseStyles"

import { validationSchema } from './SignUpValidationSchema'
import { useHttp } from "../../../../hooks/useHttp";
import { Spiner } from "../../../Spiner/Spiner";


export const SignUp = () => {
  const [success, setSuccess] = useState(false)
  const { loading, request, error } = useHttp();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
      firstName: '',
      lastName: ''
    },
    onSubmit: (values) => {
     request('/auth/register','POST', values)
     .then(() => setSuccess(true))
     .catch(e => alert.e)
    },
    validationSchema
  })
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid className={classes.signInContainer} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {loading ? <Spiner/> :
          <form className={classes.form} onSubmit={formik.handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                className={classes.signInInput}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  value={formik.values.firstName}
                  required
                  onChange={formik.handleChange}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                className={classes.signInInput}
                  variant="outlined"
                  required
                  value={formik.values.lastName}
                  fullWidth
                  onChange={formik.handleChange}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.signInInput}
                  variant="outlined"
                  required
                  value={formik.values.email}
                  fullWidth
                  id="email"
                  onChange={formik.handleChange}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.signInInput}
                  variant="outlined"
                  required
                  value={formik.values.password}
                  fullWidth
                  name="password"
                  onChange={formik.handleChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
          }
          { success && <Alert severity="success">Успіх — Користувача створено!</Alert>}
          { error && <Alert severity="error">{`Увага виникла помилка! — ${error}`}</Alert>}
        </div>
      </Grid>
    </Grid>
  );
};
