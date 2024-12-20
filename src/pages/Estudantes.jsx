import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Pagina } from "../components/Pagina"
import { CircleArrowLeft, Pencil, Trash2 } from "lucide-react"

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
                const response = await fetch("https://trabalhofinal-pqt8.onrender.com/usuarios")
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
    }, [usuarios])

    async function deleteBD(id) {
        try {
            const response = await fetch(`https://trabalhofinal-pqt8.onrender.com/usuarios/${id}`, {
                method: "DELETE",
            })

            if (!response.ok) {
                console.log(response)
            }

            setUsuarios((prevUsuarios) => prevUsuarios.filter((user) => user.id !== id))
        } catch (error) {
            console.error(error)
        }
    }
    async function createBD(e) {
        e.preventDefault()

        try {
            if (!novoUsuario.nome || !novoUsuario.email || !novoUsuario.celular) {
                alert("Preencha todos os campos!")
                return
            }

            console.log(novoUsuario)

            const response = await fetch(`https://trabalhofinal-pqt8.onrender.com/usuarios`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoUsuario),
            })

            if (!response.ok) {
                throw new Error(`Erro ao criar usuário: ${response.statusText}`)
            }


            const dados = await response.json()
            console.log(dados)

            setUsuarios((prevUsuarios) => [...prevUsuarios, dados])

            setCadastroAberto(false)
            setNovoUsuario({ nome: "", email: "", celular: "" })
        } catch (error) {
            console.error(error)
        }
    }

    async function updateBD() {
        try {
            const response = await fetch(`https://trabalhofinal-pqt8.onrender.com/usuarios/${editaUsuario.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoUsuario),
            })

            if (!response.ok) {
                throw new Error(`Erro ao editar usuário: ${response.statusText}`)
            }

            setUsuarios((prevUsuarios) =>
                prevUsuarios.map((usuario) =>
                    usuario.id === editaUsuario.id ? { ...usuario, ...novoUsuario } : usuario
                )
            )

            setEditaUsuario(null)
        } catch (error) {
            console.error(error)
            alert("Erro ao criar o usuário.")
        }
    }

    const selectBD = usuarios.filter(usuario =>
        usuario.nome.toLowerCase().includes(procura.toLowerCase())
    )

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
                    <CircleArrowLeft onClick={voltaParaHome} className="cursor-pointer text-azulMedio hover:text-white" />
                    <input type="text" placeholder="Search" className="p-2 border border-solid border-azulMedio bg-azulMedio text-verde rounded" onChange={(e) => setProcura(e.target.value)} />
                </header>
                <div className="bg-cinzaClaro flex flex-col w-full h-[90vh]">
                    <header className="flex flex-row justify-between w-full">
                        <h1 className="p-3 flex flex-row items-center text-3xl">Lista de Estudantes</h1>
                        <div className="p-3 flex flex-row items-center gap-5">
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
                            <div className="p-4">
                                <h2 className="text-xl mb-4">Editar Usuário</h2>
                                <div className="flex gap-4">

                                    <input
                                        type="text"
                                        value={novoUsuario.nome}
                                        onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
                                        className="p-2 border border-gray-300 rounded w-1/3"
                                        placeholder="Digite seu nome"
                                    />
                                    <input
                                        type="email"
                                        value={novoUsuario.email}
                                        onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                                        className="p-2 border border-gray-300 rounded w-1/3"
                                        placeholder="Digite seu email"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Digite seu celular (44-12345-6789)"
                                        pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                                        value={novoUsuario.celular}
                                        onChange={(e) => setNovoUsuario({ ...novoUsuario, celular: e.target.value })}
                                        className="p-2 border border-gray-300 rounded w-1/3"
                                    />
                                    <button type="submit" className="bg-verde text-white px-4 py-2 rounded w-[106px]" onClick={updateBD}>Salvar</button>
                                </div>
                            </div>
                        )}
                    {
                        cadastroAberto && (

                            <form onSubmit={createBD} className="p-4">
                                <h2 className="text-xl mb-4">Adicionar Novo Estudante</h2>
                                <div className="flex gap-4">
                                    <input
                                        type="tel"
                                        placeholder="Digite seu celular (44 12345-6789)"
                                        pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"

                                        value={novoUsuario.celular}
                                        onChange={(e) => setNovoUsuario({ ...novoUsuario, celular: e.target.value })}
                                        className="p-2 border border-gray-300 rounded w-1/3"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Digite seu nome"
                                        value={novoUsuario.nome}
                                        onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
                                        className="p-2 border border-gray-300 rounded w-1/3"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Digite seu email"
                                        value={novoUsuario.email}
                                        onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                                        className="p-2 border border-gray-300 rounded w-1/3"
                                    />
                                    <button
                                        className="bg-verde text-white px-4 py-2 rounded w-24"
                                    >
                                        Adicionar
                                    </button>
                                </div>
                            </form>
                        )
                    }

                    <div className="overflow-x-auto max-h-96">
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
                                        <td className="border px-4 py-2 flex justify-evenly">
                                            <Pencil className="cursor-pointer" onClick={() => podeEditar(user)} />
                                            <Trash2 className="cursor-pointer" onClick={() => deleteBD(user.id)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </Pagina>
    )
}