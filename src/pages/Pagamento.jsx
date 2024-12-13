import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Pagina } from "../components/Pagina"
import { ArrowUpDown, CircleArrowLeft, Eye } from "lucide-react"

export function Pagamento() {
    const navigate = useNavigate()
    const [dados, setDados] = useState([
        { nome: "Pedro", pagamento: "R$ 100,00", numero: "1234", equilibrio: "R$ 50,00", data: "10/12/2024" },
        { nome: "Sara", pagamento: "R$ 200,00", numero: "5678", equilibrio: "R$ 100,00", data: "11/12/2024" },
    ])

    const handleLogin = (e) => {
        e.preventDefault()
        navigate("/Home")
    }

    return (
        <Pagina>
            <div className="flex flex-col">
                <header className="w-full h-10 p-8 flex flex-row justify-between items-center bg-roxoClaro">
                    <CircleArrowLeft onClick={handleLogin} className="cursor-pointer text-azulMedio" />
                    <input type="text" placeholder="Search" className="p-2 border border-solid border-azulMedio bg-azulMedio text-verde rounded" />
                </header>
                <div className="bg-cinzaClaro flex flex-col w-full h-[90vh]">
                    <header className="flex flex-row justify-between w-full">
                        <h1 className="p-3 flex flex-row items-center text-4xl text-azulMedio">Pagamentos</h1>
                        <div className="p-3 flex flex-row items-center gap-5">
                            <ArrowUpDown className="border border-black bg-azulMedio w-10 h-10 p-2 text-verde rounded-full" />
                        </div>
                    </header>
                    <table className="min-w-full table-auto border border-white">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Nome</th>
                                <th className="border px-4 py-2">Pagamento</th>
                                <th className="border px-4 py-2">Número</th>
                                <th className="border px-4 py-2">Equilibrio</th>
                                <th className="border px-4 py-2">Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((item, index) => (
                                <tr key={index}>  
                                    <td className="border px-4 py-2">{item.nome}</td>
                                    <td className="border px-4 py-2">{item.pagamento}</td>
                                    <td className="border px-4 py-2">{item.numero}</td>
                                    <td className="border px-4 py-2">{item.equilibrio}</td>
                                    <td className="border px-4 py-2">{item.data}</td>
                                    <td className="border px-4 py-2 flex justify-center">
                                        <button>
                                            <Eye className="text-verde" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Pagina>
    )
}