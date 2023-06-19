import { useLocation, Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

const RequiredAuth = () => {
  const token = localStorage.getItem("token");
  let role = "";

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      role = decodedToken.role;
      // Use the extracted username and role variables as needed
    } catch (error) {
      console.error("Error decoding token:", error);
      // Handle the error (e.g., show an error message, redirect the user, etc.)
    }
  } else {
    console.error("No token found in localStorage");
    // Handle the case where there is no token (e.g., show an error message, redirect the user, etc.)
  }

  const location = useLocation();

  // Check if the user's role matches the allowed role for the current route
  const isUserAuthorized =
    location.pathname === "/DonarProfile" && role === "donor";
  const isProviderAuthorized =
    location.pathname === "/DonarProfile" && role === "student";
  const isUserAuthorized1 =
    location.pathname === "/EditProfile" && role === "donor";
  const isProviderAuthorized1 =
    location.pathname === "/EditProfile" && role === "student";
  const istundent = location.pathname === "/Students" && role === "student";
  // Check if the user is authorized for the current route
  const isAuthorized =
    isUserAuthorized ||
    isProviderAuthorized ||
    isProviderAuthorized1 ||
    isUserAuthorized1 ||
    istundent;

  return token && isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default RequiredAuth;
