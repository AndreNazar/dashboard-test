import { MainPage } from "@pages/MainPage"
import { Route, Routes } from "react-router"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}
