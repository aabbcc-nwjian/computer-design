import { BrowserRouter } from "react-router-dom";
import Tobline from "./components/Tobline";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Tobline />
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
