import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    width: "100vw",
    background: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay
  }}
>
  <img
    src={logo}
    alt="Logo"
    style={{
      width: "500px",
      marginBottom: "20px",
    }}
  />
  
  <button
    onClick={() => navigate("/menu")}
    style={{
      background: "#6200ea",
      color: "white",
      padding: "12px 24px",
      border: "none",
      borderRadius: "8px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "0.3s",
      marginTop: "-150px",
      marginBottom:"80px",
      width: "200px",
    }}
  >
    Touch Me
  </button>
</div>

  );
};

export default IntroPage;
