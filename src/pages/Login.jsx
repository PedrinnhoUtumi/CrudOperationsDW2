import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export function Login() {
    const navigate = useNavigate()  
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')
    const handleLogin = async (e) => {
        e.preventDefault()
    
        try {
            const queryParams = new URLSearchParams({ nome, email, celular }).toString()
            const response = await fetch(`http://localhost:3333/usuarios?${queryParams}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
    
            if (!response.ok) {
                if (response.status === 404) {
                    alert("Usuário não encontrado")
                } else {
                    alert("Erro ao conectar ao servidor.")
                }
                return
            }
    
            const data = await response.json()
            console.log(data)
            
            if (data.length > 0) {
                navigate('/home')
            } else {
                e.preventDefault()
                alert("Erro ao encontrar usuário! Tente novamente")
            }

        } catch (error) {
            console.error(error)
            alert("Erro ao conectar ao servidor.")
        }
    }
    

    return (
        <div className="w-screen h-screen bg-azulEscuro flex flex-row justify-evenly items-center">
            <div className="w-1/2 h-full flex ">
                <img src="Login.svg" alt="imagem aqui" />
            </div>
            <form onSubmit={handleLogin} action="" method="GET" className="bg-azulMedio text-white w-1/3 h-[80%] flex flex-col items-center justify-center rounded-3xl">
                <h1 className="text-verde text-3xl font-bold">Login</h1>
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

                <div className="w-full flex flex-col items-center mb-4">
                    <div className="relative w-10/12">
                        <label htmlFor="" className="text-2xl">Email</label>
                        <input
                            required
                            type="email"
                            id="email"
                            className="p-3 w-full bg-azulEscuro rounded-md"
                            placeholder="Digite sua email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          
                        />
                    </div>
                    <Link to="/Cadastro" className="text-roxoClaro mt-2 hover:text-white cursor-pointer">
                        Não tem conta? Clique aqui
                    </Link>
                </div>
                <button className="bg-verde mt-8 p-3 w-10/12 rounded-md text-white">ENTRAR</button>
            </form>
        </div>
    )
}