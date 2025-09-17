import { create } from "zustand"
import { getNewsFromStorage } from "../api/posts"

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