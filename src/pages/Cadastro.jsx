import { useState } from "react";


export function Cadastro() {
    const [responseMessage, setResponseMessage] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const enviaFormulario = async (event) =>  {
        event.preventDefault()
        
        const formData = {
            nome: nome,
            email: email,
            senha: senha,
        }

        try {
            const response = await fetch('http://localhost:3333/usuarios', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                console.error("erro ao enviar dados!", response.status)
                return
            }
            const data = await response.json()
            setResponseMessage(data.message);
        } catch (error) {
            // 
            console.error('Erro na requisição', error)
            setResponseMessage('Erro ao enviar dados.')
          }
        }
    return (
        <div className=" w-screen h-screen bg-azulEscuro flex flex-row justify-evenly items-center">
            <div className="w-1/2 h-full flex ">
                <img src="vector-cadastro.svg" alt="imagem aqui" />
            </div>
            <form action="" className="bg-azulMedio text-white w-1/3 h-[80%] flex flex-col items-center justify-center rounded-3xl">
                <h1 className="text-verde text-3xl font-bold">Cadastro</h1>
                <div className="w-full flex flex-col items-center mb-4">
                    <div className="relative w-10/12">
                        <label htmlFor="" className="text-2xl">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            className="p-3 w-full bg-azulEscuro rounded-md"
                            placeholder="Digite seu suário"
                            value = {nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center mb-4">
                    <div className="relative w-10/12">
                        <label htmlFor="" className="text-2xl">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="p-3 w-full bg-azulEscuro rounded-md"
                            placeholder="Digite seu email"
                            value = {email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center mb-4">
                    <div className="relative w-10/12">
                        <label htmlFor="" className="text-2xl">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            className="p-3 w-full bg-azulEscuro rounded-md"
                            placeholder="Digite sua senha"
                            value = {senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                </div>
                <button className="bg-verde mt-8 p-3 w-10/12 rounded-md text-white">CADASTRE-SE</button>
            </form>
        </div>
    )
}
