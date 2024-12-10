import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagina } from "../components/Pagina";
import { ArrowUpDown, CircleArrowLeft } from "lucide-react";

export function Estudantes() {
    const navigate = useNavigate();
    const [dados, setDados] = useState([
        { id: "1", nome: "Pedro", email: "Pedroutumi@gmail.com" },
        { id: "2", nome: "Sara", email: "Sarautumi@gmail.com" },
    ]);

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/Home");
    };

    const handleExcluir = (id) => {
        setDados(dados.filter((item) => item.id !== id));
    };

    return (
        <Pagina>
            <div className="flex flex-col">
                <header className="w-full h-10 p-8 flex flex-row justify-between items-center bg-verde">
                    <CircleArrowLeft onClick={handleLogin} className="cursor-pointer text-azulMedio" />
                    <input type="text" placeholder="Search" className="p-2 border border-solid border-azulMedio bg-azulMedio text-verde rounded" />
                </header>
                <div className="bg-cinzaClaro flex flex-col w-full h-[90vh]">
                    <header className="flex flex-row justify-between w-full">
                        <h1 className="p-3 flex flex-row items-center text-3xl">Lista de Estudantes</h1>
                        <div className="p-3 flex flex-row items-center gap-5">
                            <ArrowUpDown className="border border-black bg-azulMedio w-10 h-10 p-2 text-verde rounded-full" />
                            <button className="w-52 h-10 bg-azulMedio text-verde rounded-md">Adicionar Novo Estudante</button>
                        </div>
                    </header>
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">ID</th>
                                <th className="border px-4 py-2">Nome</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((item) => (
                                <tr key={item.id}>
                                    <td className="border px-4 py-2">{item.id}</td>
                                    <td className="border px-4 py-2">{item.nome}</td>
                                    <td className="border px-4 py-2">{item.email}</td>
                                    <td className="border px-4 py-2 flex justify-center">
                                        <button className="bg-blue-500 text-white px-4 py-1 rounded">Editar</button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-1 rounded ml-2"
                                            onClick={() => handleExcluir(item.id)}
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Pagina>
    );
}
