import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bem-vindo à Home</h1>
      <p>Você está logado e pode acessar o sistema.</p>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => navigate("/dashboard")}>Ir para Dashboard</button>
        <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
          Logout
        </button>
      </div>
    </div>
  );
}
