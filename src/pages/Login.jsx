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
import { object, string } from "yup";

import { TextField } from "@mui/material";

const Login = () => {
  const [show, setShow] = useState(false);
  const loginSchema = object({
    email: string().required("Bu alan boş kırakılamaz"),
    password: string()
      .email("Lütfen geçerli bir e-posta adresi giriniz!")
      .required("Bu alan boş kırakılamaz")
      .min(8, "Şifreniz 8 karakretden küçük olamaz")
      .max(20, "Şifreniz 20 karakretden büyük olamaz")
      .matches(/\d+/, "En az bir rakam içermelidir.")
      .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
      .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
      .matches(/[!,?{}><%&$#*£+-.]+/, "En az bir özel karekter içermelidir."),
  });

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
            {({ handleChange, handleBlur, values, touched, errors }) => (
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                  />

                  <TextField
                    xs={12}
                    type={show ? "text" : "password"}
                    name="password"
                    label="Password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment sx={{}} position="end">
                          <IconButton onClick={togglePasswordVisibility}>
                            {show ? (
                              <Visibility sx={{ color: "red" }} />
                            ) : (
                              <VisibilityOff x={{ color: "green" }} />
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

          <Button type="p" sx={{ color: "black", marginTop: "1rem" }}>
            Hesabınız yok mu? Kaydolun
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
