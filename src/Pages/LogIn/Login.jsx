import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

// Styled container with animation for fade-in effect
const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(135deg, #eef2f3, #cfd9df)",
  animation: "fadeIn 1s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

// Styled paper for the login form
const LoginForm = styled(Paper)({
  padding: "40px",
  width: "400px",
  textAlign: "center",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  animation: "slideIn 0.5s ease-in-out",
  "@keyframes slideIn": {
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
  },
});

// Custom button for login actions
const CustomButton = styled(Button)({
  marginTop: "20px",
  padding: "12px",
  width: "100%",
  backgroundColor: "#1e3a8a",
  color: "#fff",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#007bff",
  },
});

const BackButton = styled(Button)({
  marginTop: "20px",
  color: "#1e3a8a",
  "&:hover": {
    color: "#007bff",
  },
});

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userRole = location.state?.userRole || "member"; // Default to 'member'

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <Container>
      <LoginForm elevation={3}>
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: "bold", color: "#1e3a8a" }}
        >
          {userRole === "admin" ? "Admin Login" : "Member Login"}
        </Typography>
        <form>
          <TextField
            label={userRole === "admin" ? "Admin Username" : "Member Username"}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <CustomButton type="submit">
            {userRole === "admin" ? "Login as Admin" : "Login as Member"}
          </CustomButton>
        </form>
        <BackButton onClick={handleBack}>Go Back</BackButton>
      </LoginForm>
    </Container>
  );
};

export default Login;
