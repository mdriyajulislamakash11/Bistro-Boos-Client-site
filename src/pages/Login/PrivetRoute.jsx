import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../../Firebase/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } =  useContext(AuthContex)
  const location = useLocation()  


  if (loading) {
    return <p>loading....</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivetRoute;
