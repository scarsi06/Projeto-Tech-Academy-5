import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem("token");

  // Se não houver token, redireciona para login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
