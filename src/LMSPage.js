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
        <iframe
          src="https://drive.google.com/file/d/18wYewQtGn1EJlF3RxATOTTj0Prm8Fsaf/preview"
          width="100%"
          height="450"
          style={{
            border: "none",
            borderRadius: "10px",
          }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LMSPage;
