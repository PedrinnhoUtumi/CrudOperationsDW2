import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Pagina } from "../components/Pagina"
import { ArrowUpDown, CircleArrowLeft, Pencil, Trash2 } from "lucide-react"

export function Estudantes() {
    const navigate = useNavigate()
    const [usuarios, setUsuarios] = useState([])
    const [cadastroAberto, setCadastroAberto] = useState(false)
    const [editaUsuario, setEditaUsuario] = useState(null)
    const [procura, setProcura] = useState("")
    const [novoUsuario, setNovoUsuario] = useState({ nome: "", email: "", celular: "" })

    const voltaParaHome = (e) => {
        e.preventDefault()
        navigate("/Home")
    }

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch("http://localhost:3333/usuarios")
                if (!response.ok) {
                    throw new Error("Erro ao buscar os usuários")
                }
                const data = await response.json()
                setUsuarios(data)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchUsuarios()
    }, [])

    async function deleteBD(id) {
        try {
            const response = await fetch(`http://localhost:3333/usuarios/${id}`, {
                method: "DELETE",
            })

            if (!response.ok) {
                console.log(response);
                // ("Erro ao excluir o estudante.")
            }

            setUsuarios((prevUsuarios) => prevUsuarios.filter((user) => user.id !== id))
            alert("Usuário excluído com sucesso!")
        } catch (error) {
            console.error(error)
            alert("Erro ao excluir o usuário.")
        }
    }
    async function createBD() {
        try {
            const response = await fetch(`http://localhost:3333/usuarios`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoUsuario),
            })

            if (!response.ok) {
                console.log(response);

            }

            const dados = await response.json()
            console.log(dados);

            setUsuarios((prevUsuarios) => [...prevUsuarios, dados])
            setNovoUsuario({ nome: "", email: "", celular: "" })
            alert("Usuário adicionado com sucesso!")
        } catch (error) {
            console.error(error)
            alert("Erro ao criar o usuário.")
        }
    }

    async function updateBD() {
        try {
            const response = await fetch(`http://localhost:3333/usuarios/${editaUsuario.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoUsuario),
            })

            if (!response.ok) {
                console.log(response);

            }

            setUsuarios((prevUsuarios) =>
                prevUsuarios.map((usuario) =>
                    usuario.id === editaUsuario.id ? { ...usuario, ...novoUsuario } : usuario
                )
            )

            setEditaUsuario(null)
            alert("Usuário adicionado com sucesso!")
        } catch (error) {
            console.error(error)
            alert("Erro ao criar o usuário.")
        }
    }

    const selectBD = usuarios.filter(usuario => 
        usuario.nome.toLowerCase().includes(procura.toLowerCase())
    );

    function podeCriar() {
        setCadastroAberto(true)
    }
    function podeEditar(usuario) {
        setEditaUsuario(usuario)
        setNovoUsuario({ nome: usuario.nome, email: usuario.email, celular: usuario.celular })
    }

    return (
        <Pagina>
            <div className="flex flex-col">
                <header className="w-full h-10 p-8 flex flex-row justify-between items-center bg-verde">
                    <CircleArrowLeft onClick={voltaParaHome} className="cursor-pointer text-azulMedio" />
                    <input type="text" placeholder="Search" className="p-2 border border-solid border-azulMedio bg-azulMedio text-verde rounded" onChange={(e) => setProcura(e.target.value)} />
                </header>
                <div className="bg-cinzaClaro flex flex-col w-full h-[90vh]">
                    <header className="flex flex-row justify-between w-full">
                        <h1 className="p-3 flex flex-row items-center text-3xl">Lista de Estudantes</h1>
                        <div className="p-3 flex flex-row items-center gap-5">
                            <ArrowUpDown className="border border-black bg-azulMedio w-10 h-10 p-2 text-verde rounded-full" />
                            <button
                                className="w-52 h-10 bg-azulMedio text-verde rounded-md"
                                onClick={podeCriar}
                            >
                                Adicionar Novo Estudante
                            </button>
                        </div>
                    </header>
                    {
                    editaUsuario && (
                        <div>
                            <h2 className="text-xl mb-4">Editar Usuário</h2>
                            <input
                                type="text"
                                value={novoUsuario.nome}
                                onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
                                className="p-2 border border-gray-300 rounded w-1/4 m-3"
                                placeholder="Nome"
                            />
                            <input
                                type="email"
                                value={novoUsuario.email}
                                onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                                className="p-2 border border-gray-300 rounded w-1/4 m-3"
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                value={novoUsuario.celular}
                                onChange={(e) => setNovoUsuario({ ...novoUsuario, celular: e.target.value })}
                                className="p-2 border border-gray-300 rounded w-1/4 m-3"
                                placeholder="Celular"
                            />
                            <button className="bg-verde text-white px-4 py-2 m-3 rounded" onClick={updateBD}>Salvar</button>
                        </div>
                    )}
                    {
                        cadastroAberto && (

                            <div className="p-4">
                                <h2 className="text-xl mb-4">Adicionar Novo Estudante</h2>
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Celular"
                                        value={novoUsuario.celular}
                                        onChange={(e) => setNovoUsuario({ ...novoUsuario, celular: e.target.value })}
                                        className="p-2 border border-gray-300 rounded w-1/3"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Nome"
                                        value={novoUsuario.nome}
                                        onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
                                        className="p-2 border border-gray-300 rounded w-1/3"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={novoUsuario.email}
                                        onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                                        className="p-2 border border-gray-300 rounded w-1/3"
                                    />
                                    <button
                                        onClick={createBD}
                                        className="bg-verde text-white px-4 py-2 rounded"
                                    >
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        )
                    }

                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Nome</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Celular</th>
                                <th className="border px-4 py-2">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectBD.map((user) => (
                                <tr key={user.id}>
                                    <td className="border px-4 py-2">{user.nome}</td>
                                    <td className="border px-4 py-2">{user.email}</td>
                                    <td className="border px-4 py-2">{user.celular}</td>
                                    <td className="border px-4 py-2 flex justify-evenly ">
                                        <Pencil className="cursor-pointer" onClick={() => podeEditar(user)} />
                                        <Trash2 className="cursor-pointer" onClick={() => deleteBD(user.id)} />
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