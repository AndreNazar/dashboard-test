import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.scss"
import App from "./app"
import { HashRouter } from "react-router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
