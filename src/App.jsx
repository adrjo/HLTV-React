import { BrowserRouter, Route, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { ForumPage } from "./pages/ForumPage";
import { create } from "zustand";
import { ArticlePage } from "./pages/ArticlePage";
import { useEffect } from "react";
import { getNewsFromStorage } from "./api/posts";

export const adminStore = create((set) => (
  {
    adminModeToggled: false,
    toggleAdminMode: () => set((state) => ({ adminModeToggled: !state.adminModeToggled })),
    setAdminMode: (isAdmin) => set((state) => ({ adminModeToggled: isAdmin }))
  }
))

export const postsStore = create((set, get) => ({
  posts: getNewsFromStorage(),
  getPost: (id) => get().posts.find(post => post.id == id),
  setPosts: (posts) => set((state) => ({ posts: posts })),
  addPost: (post) => set((state) => ({
    posts: [...state.posts, post]
  })),
  removePost: (id) => set((state) => ({
    posts: state.posts.filter(p => p.id !== id)
  })),
  updatePost: (id, data) => set((state) => ({
    posts: state.posts.map(p => p.id === id ? { ...p, ...data } : p)
  }))
}))

export const toastsStore = create((set) => ({
  toasts: [],
  addToast: (toast) => set((state) => ({
    toasts: [...state.toasts, toast]
  })),
  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter(t => t.id !== id)
  })),
}))

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
