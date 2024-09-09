import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import "./App.css";

// Styled container with animation for fade-in effect
const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "linear-gradient(135deg, #f3f4f6, #dbeafe)",
  animation: "fadeIn 1s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

// Styled button for a sleek look
const CustomButton = styled(Button)({
  width: "200px",
  margin: "13px",
  padding: "12px 20px",
  borderRadius: "8px",
  fontSize: "16px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#007bff",
  },
});

function App() {
  const navigate = useNavigate();
  const [hoveredRole, setHoveredRole] = useState("");

  const handleLogin = (role) => {
    navigate(`/login`, { state: { userRole: role } });
  };

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ mb: 4, color: "#1e3a8a", fontWeight: "bold" }}
      >
        Welcome to the Task Management
      </Typography>
      <Box>
        <CustomButton
          variant="contained"
          color="primary"
          onClick={() => handleLogin("admin")}
          onMouseEnter={() => setHoveredRole("admin")}
        >
          Login as Admin
        </CustomButton>
        <CustomButton
          variant="contained"
          color="secondary"
          onClick={() => handleLogin("member")}
          onMouseEnter={() => setHoveredRole("member")}
        >
          Login as Member
        </CustomButton>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ mt: 4, color: "#64748b", transition: "opacity 0.7s" }}
        style={{ opacity: hoveredRole ? 1 : 0 }}
      >
        {hoveredRole === "admin"
          ? "Log in to manage the platform"
          : hoveredRole === "member"
          ? "Log in to access your dashboard"
          : ""}
      </Typography>
    </Container>
  );
}

export default App;
