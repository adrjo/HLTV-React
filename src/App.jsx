import { BrowserRouter, Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { ForumPage } from "./pages/ForumPage";
import { create } from "zustand";

export const adminStore = create((set) => (
  {
    adminModeToggled: false,
    toggleAdminMode: () => set((state) => ({ adminModeToggled: !state.adminModeToggled })),
    setAdminMode: (isAdmin) => set((state) => ({ adminModeToggled: isAdmin }))
  }
))

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
