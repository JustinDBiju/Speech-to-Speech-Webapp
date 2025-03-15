import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroPage from "./IntroPage";
import MenuPage from "./MenuPage";
import QAChatPage from "./QAChatPage";
import LMSPage from "./LMSPage";
import roboBackground from "./assets/Robo.jpg";

const backgroundStyle = {
  backgroundImage: `url(${roboBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
};

function App() {
  return (
    <div style={backgroundStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/qa-chat" element={<QAChatPage />} />
          <Route path="/lms" element={<LMSPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
