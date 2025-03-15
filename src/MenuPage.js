import { useNavigate } from "react-router-dom";

const MenuPage = () => {
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
    background: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay for readability
  }}
>
  <h1 style={{ color: "white", marginBottom: "20px" }}>Select an Option</h1>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    }}
  >
    <button
      onClick={() => navigate("/qa-chat")}
      style={{
        background: "#6200ea",
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "8px",
        fontSize: "18px",
        cursor: "pointer",
        transition: "0.3s",
        width: "200px",
      }}
    >
      Q&A
    </button>
    <button
      onClick={() => navigate("/lms")}
      style={{
        background: "#03dac5",
        color: "black",
        padding: "12px 24px",
        border: "none",
        borderRadius: "8px",
        fontSize: "18px",
        cursor: "pointer",
        transition: "0.3s",
        width: "200px",
      }}
    >
      LMS
    </button>
  </div>
</div>

  );
};

export default MenuPage;
