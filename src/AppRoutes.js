import { Route, Routes } from "react-router-dom"
import  App  from "./App"
import Feed from "./Feed"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/credentials" element={<App />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  )
}
