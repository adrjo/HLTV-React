import { BrowserRouter, Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { ForumPage } from "./pages/ForumPage";
import { ArticlePage } from "./pages/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
