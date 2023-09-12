import Typography from "@mui/material/Typography";

import { Formik, Form, Field } from "formik";
import { Box, Button, Card, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { object, string } from "yup";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";

const newBlog = () => {
  const { newBlog } = useAuthCall();
  const [show, setShow] = useState(false);
  const newBlogSchema = object({
    email: string()
      .email("Lütfen geçerli bir e-posta adresi giriniz!")
      .required("Bu alan boş kırakılamaz"),
    password: string()
      .required("Bu alan boş kırakılamaz")
      .min(8, "Şifreniz 8 karakretden küçük olamaz")
      .max(20, "Şifreniz 20 karakretden büyük olamaz")
      .matches(/\d+/, "En az bir rakam içermelidir.")
      .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
      .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
      .matches(/[!,?{}><%&$#*£+-.]+/, "En az bir özel karekter içermelidir."),
  });
  const categories = [
    "Please choose",
    "Trivia",
    "Travel",
    "Web Development",
    "Al",
    "Science",
    "Fashion",
  ];
  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  return (
    <Card sx={{ height: "35rem" }}>
      <Formik
        initialValues={{ email: "", password: "", category: "" }}
        validationSchema={newBlogSchema}
        onSubmit={(values, actions) => {
          newBlog(values);
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
                margin: "auto",
                gap: 2,
                width: "25rem",
                height: "1.5rem",
              }}
            >
              <Typography
                variant="h4"
                color="darkgreen"
                marginX={15}
                marginY={5}
              >
                Üye Girişi
              </Typography>
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
                    <InputAdornment position="end">
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
              <InputLabel htmlFor="category">Kategori</InputLabel>

              <Select
                id="category"
                name="category"
                label="category"
                onChange={handleChange}
                variant="outlined"
              >
                {categories.map((category, i) => (
                  <MenuItem key={i} value={i == 0 ? "" : category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              <TextField component="select">
                <Field name="color" variant="select">
                  {categories.map((category, i) => (
                    <option
                      sx={{ height: "15rem" }}
                      key={i}
                      value={i == 0 ? "" : category}
                    >
                      {category}{" "}
                    </option>
                  ))}
                </Field>
              </TextField>

              <Button variant="contained" type="submit">
                Giriş
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default newBlog;
