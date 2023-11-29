import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import store from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Esta etiqueta hace que sea posible acceder a cualquier componente que necesitemos de react-redux. */}
    <BrowserRouter>
    {/* Con esta etiqueta poderemos usar las rutas para navegar en nuestra app, gracias a las herramientas porporcionadas por react-router-dom. */}
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
