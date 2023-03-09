import { Redirect } from "react-router-dom";

export default function Protected({ children }) {
  const token = sessionStorage.getItem("user");

  if (!token || token === undefined) {
    return <Redirect to="/login" />;
  }
  return <>{children}</>;
}
