import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";

import { useHttp } from "../../../../hooks/useHttp";
import { validationSchema } from "./SignInValidationSchema";

import { user } from "../../../../store/User";
import { useStyles } from "./UseStyles";
import Spinner from "../../../Spinner";

export const SignIn = () => {
  const classes = useStyles();
  const [remrmber, setRemember] = useState(false);
  const { loading, request, error } = useHttp();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await request("/auth/login", "POST", values);
        user.login(res.token, res.id, res.role, remrmber);
      } catch (e) {
        alert(e.message + error);
        //from dev
      }
    },
    validationSchema,
  });
  const onRemember = (e) => {
    setRemember(e.target.checked);
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        className={classes.signInContainer}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {loading ? (
            <Spinner />
          ) : (
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                className={classes.signInInput}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {formik.errors.email && (
                <Alert severity="warning">
                  Зауважте Email має містити "@", "."! —{" "}
                  <strong>Первеврте це поле!</strong>
                </Alert>
              )}
              <TextField
                className={classes.signInInput}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {formik.errors.password && (
                <Alert severity="warning">
                  Зауважте Password має містити не менше шести символів! —{" "}
                  <strong>Первеврте це поле!</strong>
                </Alert>
              )}
              <FormControlLabel
                control={
                  <Checkbox name="remember" value="remember" color="primary" />
                }
                label="Remember me"
                onClick={onRemember}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Sign In
              </Button>
            </form>
          )}
          {error && (
            <Alert severity="error">{`Увага виникла помилка! — ${error}`}</Alert>
          )}
        </div>
      </Grid>
    </Grid>
  );
};
