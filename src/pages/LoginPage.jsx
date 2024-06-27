import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const FormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  gap: "1rem",
});

const InputContainer = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "300px",
});

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Submitted data:", data);
    try {
      const response = await fetch("https://2254982670026ae2.mokky.dev/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
    } catch (error) {
      console.error("Login error:", error);
    }
    navigate("/home")
  };

  return (
    <FormContainer>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          
        />
        <Button type="submit" variant="contained" color="primary">
          Войти
        </Button>
      </InputContainer>
    </FormContainer>
  );
};

export default LoginPage;
