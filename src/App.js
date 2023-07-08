import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ResDetails from "./components/ResDetails/ResDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:resId" element={<ResDetails />} />
      </Routes>
    </div>
  );
}

export default App;
