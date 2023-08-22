import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { object, string } from "yup";

import { TextField } from "@mui/material";

const Register = () => {
  const [show, setShow] = useState(false);
  const RegisterSchema = object({
    email: string()
      .email("Lütfen geçerli bir e-posta adresi giriniz!")
      .required("Bu alan boş kırakılamaz"),
    username: string().required("Bu alan boş kırakılamaz"),
    image: string().url("Bir resim veya icon baglantı adresi giriniz"),

    password: string()
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
            <HowToRegIcon sx={{ width: "3rem", height: "3rem" }} />
          </Avatar>
          <Typography variant="h3" color="darkgreen" marginY={5}>
            Kayıt Ol
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={RegisterSchema}
            onSubmit={(values, actions) => {
              //Register işlemi
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
                    width: "25rem",
                  }}
                >
                  <TextField
                    type="text"
                    name="username"
                    label="User Name"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    error={touched.username && Boolean(errors.username)}
                    helperText={errors.username}
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    type="email"
                    name="email"
                    label="Email Address"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                  />
                  <TextField
                    type="url"
                    name="image"
                    label="Resim"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.image}
                    error={touched.image && Boolean(errors.image)}
                    helperText={errors.image}
                  />
                  <TextField
                    type="text"
                    name="bio"
                    label="Bio"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bio}
                    helperText={
                      touched.bio
                        ? "Bu alan zorunlu degildir"
                        : "Kendinizden kısaca tanıtınız"
                    }
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
                    GÖNDER
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Button type="p" sx={{ color: "black", marginTop: "1rem" }}>
            Hesabınız var mı? Giriş yapın
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;