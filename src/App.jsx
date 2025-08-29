import { BrowserRouter, Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { ForumPage } from "./pages/ForumPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forum" element={<ForumPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
