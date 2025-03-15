import LMSVideo from "./assets/LMS.mp4";

const LMSPage = () => {
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
    color: "white",
    padding: "20px",
  }}
>
  <h1 style={{ marginBottom: "20px", fontSize: "2rem" }}>Learning Management System</h1>
  <div
    style={{
      width: "100%",
      maxWidth: "800px",
      background: "rgba(255, 255, 255, 0.1)", // Semi-transparent background for the video container
      borderRadius: "15px",
      padding: "15px",
    }}
  >
    <video
      controls
      style={{
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <source src={LMSVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

  );
};

export default LMSPage;
