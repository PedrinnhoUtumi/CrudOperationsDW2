import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";  // Certifique-se de que o caminho está correto
import { Cadastro } from "./pages/Cadastro"; // Substitua com o componente de Cadastro

function App() {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    );
}

export default App;

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import "./index.css";


// const rotas = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="home" element={<Home />} />
//       <Route path="contato" element={<Contato />} />
//       <Route path="sobre" element={<Sobre />} />
//       <Route path="SemEstado" element={<SemEstado />} />
//       <Route path="ComEstado" element={<ComEstado />} />
//       <Route path="CampoTexto" element={<CampoTexto />} />
//       <Route path="Contador" element={<Contador />} />
//       <Route path="ComunicacaoDireta" element={<ComunicacaoDireta />} />
//       <Route path="ComunicacaoIndireta" element={<ComunicacaoIndireta />} />
//       <Route path="Tradutor" element={<Tradutor />} />
//       <Route path="UseRef" element={<UseRef />} />
//       <Route path="UseEffect" element={<UseEffect />} />
//       <Route path="*" element={<Pagina404 />} />
//     </Route>
//   )
// );

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={rotas} />
//   </StrictMode>
// );
