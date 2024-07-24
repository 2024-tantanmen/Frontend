import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import AddSchedule from "./pages/AddSchedule";
import CarbCounting from "./pages/CarbCounting";
import CarbCountingResult from "./pages/CarbCountingResult";
import DietRecommend from "./pages/DietRecommend";
import DietRecommendResult from "./pages/DietRecommendResult";
import Mypage from "./pages/Mypage";
import CarbTest from "./pages/CarbTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="add-schedule" element={<AddSchedule />} />
      <Route path="carb-counting" element={<CarbCounting/>} />
      <Route path="carb-counting-result" element={<CarbCountingResult/>}/>
      <Route path="diet-recommend" element={<DietRecommend/>} />
      <Route path="diet-recommend-result" element={<DietRecommendResult/>} />
      <Route path="mypage" element={<Mypage/>} />
      <Route path="carb-test" element={<CarbTest/>}/>
    </Routes>
  );
}

export default App;
