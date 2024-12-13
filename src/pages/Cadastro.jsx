import { useState } from "react"
import { useNavigate } from "react-router-dom"


export function Cadastro() {
    const [usuarios, setUsuarios] = useState([])
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')
    const [novoUsuario, setNovoUsuario] = useState({ nome: '', email: '', celular: '' })
    async function enviaFormulario(e) {
        e.preventDefault()
        setNovoUsuario({ nome, email, celular })
        try {
            const response = await fetch("http://localhost:3333/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nome, email, celular }),
            })

            if (!response.ok) {
                console.log(response)

            }

            const textoResposta = await response.text()
            const dados = textoResposta ? JSON.parse(textoResposta) : null

            if (dados) {
                setUsuarios((prevUsuarios) => [...prevUsuarios, dados])
                setNome("")  
                setEmail("")
                setCelular("")
                navigate('/home')
            }

            navigate('/home')
            alert("Usuário adicionado com sucesso!")
        } catch (error) {
            console.error(error)
            alert("Erro ao criar o usuário.")
        }
    }
    return (
        <div className=" w-screen h-screen bg-azulEscuro flex flex-row justify-evenly items-center">
            <div className="w-1/2 h-full flex ">
                <img src="vector-cadastro.svg" alt="imagem aqui" />
            </div>
            <form onSubmit={enviaFormulario} action="" method='POST' className="bg-azulMedio text-white w-1/3 h-[80%] flex flex-col items-center justify-center rounded-3xl">
                <h1 className="text-verde text-3xl font-bold">Cadastro</h1>
                <div className="w-full flex flex-col items-center mb-4">
                    <div className="relative w-10/12">
                        <label htmlFor="" className="text-2xl">Usuário</label>
                        <input
                            required
                            type="text"
                            id="usuario"
                            className="p-3 w-full bg-azulEscuro rounded-md"
                            placeholder="Digite seu usuário"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center mb-4">
                    <div className="relative w-10/12">
                        <label htmlFor="" className="text-2xl">Email</label>
                        <input
                            required
                            type="email"
                            id="email"
                            className="p-3 w-full bg-azulEscuro rounded-md"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center mb-4">
                    <div className="relative w-10/12">
                        <label htmlFor="" className="text-2xl">Celular</label>
                        <input
                            required
                            type="tel"
                            placeholder="Digite seu celular (44 12345-6789)"
                            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                            id="celular"
                            className="p-3 w-full bg-azulEscuro rounded-md"
                            value={celular}
                            onChange={(e) => setCelular(e.target.value)}
                        />
                    </div>
                </div>
                <button className="bg-verde mt-8 p-3 w-10/12 rounded-md text-white" type="submit" >CADASTRE-SE</button>
            </form>
        </div>
    )
}