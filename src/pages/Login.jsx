import { Link } from "react-router-dom";

export function Login() {

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
                            type="password"
                            id="senha"
                            className="p-3 w-full bg-azulEscuro rounded-md"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <Link to="/Painel" className="text-roxoClaro mt-2 hover:text-white cursor-pointer">
                        Não tem conta? Clique aqui
                    </Link>
                </div>
                <button className="bg-verde mt-8 p-3 w-10/12 rounded-md text-white">ENTRAR</button>
            </form>
        </div>
    );
}
