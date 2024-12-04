import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";  // Certifique-se de que o caminho está correto
import { Cadastro } from "./pages/Cadastro"; // Substitua com o componente de Cadastro
import { Painel } from "./pages/Painel";

function App() {
    return (
        <Router> {/* Envolva toda a aplicação com o BrowserRouter */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Painel" element={<Painel />} />



            </Routes>
        </Router>
    );
}

export default App;
