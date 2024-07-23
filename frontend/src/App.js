import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddSchedule from "./pages/AddSchedule";
import CarbCounting from "./pages/CarbCounting";
import DietRecommend from "./pages/DietRecommend";
import DietRecommendResult from "./pages/DietRecommendResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="add-schedule" element={<AddSchedule />} />
      <Route path="carb-counting" element={<CarbCounting/>} />
      <Route path="diet-recommend" element={<DietRecommend/>} />
      <Route path="diet-recommend-result" element={<DietRecommendResult/>} />
    </Routes>
  );
}

export default App;
