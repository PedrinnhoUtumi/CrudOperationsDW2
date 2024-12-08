import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout } from './pages/_Layout'
import { Painel } from './pages/Painel'
import { Home } from './pages/Home'


const rotas = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Rotas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      {/* Rotas com Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Painel />} /> {/* Rota padrão (/) */}
        <Route path="home" element={<Home />} /> {/* Rota para /home */}
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);