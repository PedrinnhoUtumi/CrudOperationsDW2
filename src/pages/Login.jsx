import { Link, useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate()  

    const handleLogin = (e) => {
        e.preventDefault() 
        navigate("/Home")
    }
    
    return (
        <div className="w-screen h-screen bg-azulEscuro flex flex-row justify-evenly items-center">
            <div className="w-1/2 h-full flex ">
                <img src="Login.svg" alt="imagem aqui" />
            </div>
            <form action="" className="bg-azulMedio text-white w-1/3 h-[80%] flex flex-col items-center justify-center rounded-3xl">
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
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col items-center mb-4">
                    <div className="relative w-10/12">
                        <label htmlFor="" className="text-2xl">Senha</label>
                        <input
                            required
                            type="password"
                            id="senha"
                            className="p-3 w-full bg-azulEscuro rounded-md"
                            placeholder="Digite sua senha"
                          
                        />
                    </div>
                    <Link to="/Cadastro" className="text-roxoClaro mt-2 hover:text-white cursor-pointer">
                        Não tem conta? Clique aqui
                    </Link>
                </div>
                <button onClick={handleLogin} className="bg-verde mt-8 p-3 w-10/12 rounded-md text-white">ENTRAR</button>
            </form>
        </div>
    );
}

// import { Link, useNavigate } from "react-router-dom";
// import bcrypt from "bcrypt"
// import { useEffect, useState } from "react";

// export function Login() {
//     const navigate = useNavigate()
//     const [usuario, setUsuario] = useState('')
//     const [senha, setSenha] = useState('')
//     const [senhaHash, setSenhaHash] = useState('')  

//     useEffect(() => {
//         const hashearSenha = async () => {
//             const hash = await bcrypt.hash('Senha123', 10)
//             setSenhaHash(hash)
//             console.log('Senha hasheada:', hash)
//         }
//         hashearSenha()
//     }, [])

//     async function verificarLogin() {
//         if (senha.length >= 8 &&
//             temMaiusculas(senha) &&
//             temNumeros(senha) &&
//             !temEspacos(senha) &&
//             usuario === "pedroutumi@gmail.com" || usuario === "Sara.cipriano@gmail.com") {
//             console.log('Verificando senha...')
//             const isCorrect = await bcrypt.compare(senha, senhaHash)

//             if (isCorrect) {
//                 console.log('Senha correta')
//                 navigate('/Home')
//             } else {
//                 alert("Senha incorreta!")
//             }
//         } else {
//             alert("Impossível cadastrar!")
//         }
//     }

//     function temMaiusculas(texto) {
//         return /[A-Z]/.test(texto)
//     }

//     function temNumeros(texto) {
//         return /[0-9]/.test(texto)
//     }

//     function temEspacos(texto) {
//         return texto.includes(' ')
//     }
    
//     return (
//         <div className="w-screen h-screen bg-azulEscuro flex flex-row justify-evenly items-center">
//             <div className="w-1/2 h-full flex ">
//                 <img src="Login.svg" alt="imagem aqui" />
//             </div>
//             <form action="" className="bg-azulMedio text-white w-1/3 h-[80%] flex flex-col items-center justify-center rounded-3xl">
//                 <h1 className="text-verde text-3xl font-bold">Login</h1>
//                 <div className="w-full flex flex-col items-center mb-4">
//                     <div className="relative w-10/12">
//                         <label htmlFor="" className="text-2xl">Usuário</label>
//                         <input
//                             required
//                             type="text"
//                             id="usuario"
//                             value={usuario}
//                             onChange={(e) => {setUsuario(e.target.value)}}
//                             className="p-3 w-full bg-azulEscuro rounded-md"
//                             placeholder="Digite seu usuário"
//                         />
//                     </div>
//                 </div>

//                 <div className="w-full flex flex-col items-center mb-4">
//                     <div className="relative w-10/12">
//                         <label htmlFor="" className="text-2xl">Senha</label>
//                         <input
//                             required
//                             type="password"
//                             id="senha"
//                             value={senha}
//                             onChange={(e) => {setSenha(e.target.value)}}
//                             className="p-3 w-full bg-azulEscuro rounded-md"
//                             placeholder="Digite sua senha"
                          
//                         />
//                     </div>
//                     <Link to="/Cadastro" className="text-roxoClaro mt-2 hover:text-white cursor-pointer">
//                         Não tem conta? Clique aqui
//                     </Link>
//                 </div>
//                 <button onClick={verificarLogin} className="bg-verde mt-8 p-3 w-10/12 rounded-md text-white">ENTRAR</button>
//             </form>
//         </div>
//     );
// }
