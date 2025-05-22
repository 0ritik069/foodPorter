import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://192.168.1.68:5000/api/userLogin", {
        email,
        password,
      });


      console.log("Login response:", response.data);

      const { token, role, message } = response.data;

      // Save token and role
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      toast.success(message || "Login successful!");

      // Navigate based on role
      if (role === "Super Admin") {
        navigate("/admin");
      } else if (role === "Restaurant") {
        navigate("/restaurant/dashboard");
      } else {
        toast.error("Unknown role. Access denied.");
      }

    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else if (error.message === "Network Error") {
        toast.error("Cannot connect to the server. Please check your network.");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
            {/* {/* build the login Page basis of the logo design the login page theme according to logo use the core css and this is my old code  
            now build the beautifult ui for*/}
      <Box
        width="400px"
        p={4}
        boxShadow={3}
        borderRadius={4}
        bgcolor="#fff"
        component="form"
        onSubmit={submitData}
      >
        <Typography variant="h5" align="center" mb={3}>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
