import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import "aos/dist/aos.css"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/store.ts"
import {MantineProvider} from "@mantine/core"



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Provider store={store}>
          <App />
        </Provider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
)
