import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { Estudantes } from "./pages/Estudantes";
import { Layout } from "./pages/_Layout";
import "./index.css"; 
import { Pagamento } from "./pages/Pagamento";

const rotas = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/Cadastro", element: <Cadastro /> },
  { 
    path: "/Estudantes", 
    element: <Layout />, 
    children: [
      { path: "", element: <Estudantes /> },
    ], 
  },
  { 
    path: "/Pagamento", 
    element: <Layout />, 
    children: [
      { path: "", element: <Pagamento /> },
    ], 
  },
  {
    path: "/Home",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);
