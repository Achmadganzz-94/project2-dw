import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddShow from "./pages/AddShow";
import EditShow from "./pages/EditShow";
import AddEpisode from "./pages/AddEpisode";
import EditEpisode from "./pages/EditEpisode";
import Detail from "./pages/detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AddShow" element={<AddShow />} />
        <Route path="EditShow/:id" element={<EditShow />} />
        <Route path="AddEpisode/:id" element={<AddEpisode />} />
        <Route path="EditEpisode/:idMovie/:idEpisode" element={<EditEpisode />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
