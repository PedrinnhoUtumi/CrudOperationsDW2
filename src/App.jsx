import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login"; 
import { Cadastro } from "./pages/Cadastro"; 
import { Painel } from "./pages/Painel"; 
import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";

function App() {
    return (
        <Router> 
            <div className="flex">
                <Menu/>
                <div className="flex-1 p-4">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Cadastro" element={<Cadastro />} />
                    <Route path="/Painel" element={<Painel />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
                </div>
            </div>
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
