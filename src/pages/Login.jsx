import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { TextField } from "@mui/material";

const Login = () => {
  const [show, setShow] = useState(false);
  const loginSchema = () => {};
  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Avatar
            sx={{
              color: "green",
              backgroundColor: "lightgrey",
              m: "auto",
              width: "5rem",
              height: "5rem",
            }}
          >
            <LockPersonRoundedIcon sx={{ width: "3rem", height: "3rem" }} />
          </Avatar>
          <Typography variant="h3" color="darkgreen" marginY={5}>
            Sing In
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              //login işlemi
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                  />

                  <TextField
                    xs={12}
                    type={show ? "text" : "password"}
                    name="password"
                    label="Password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment sx={{}} position="end">
                          <IconButton onClick={togglePasswordVisibility}>
                            {show ? (
                              <Visibility sx={{ fontSize: "20px" }} />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
