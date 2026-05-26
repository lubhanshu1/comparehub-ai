import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Comparison from "./pages/Comparison"

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/comparison/:slug"
          element={<Comparison />}
        />
      </Routes>

    </BrowserRouter>

  )
}