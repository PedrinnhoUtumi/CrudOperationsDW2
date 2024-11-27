

export function Login() {
    return (
        <div className=" w-screen h-screen bg-orange-400 flex flex-col justify-center items-center">
            <form action="get" className="bg-white w-80 h-1/2 flex flex-col justify-around items-center rounded-2xl">
                <div className="p-4 m-1 mb-10 flex flex-col justify-around items-center">
                    <label htmlFor="" className="mr-40">Usuário</label>
                    <input type="text" className="m-2 p-1 w-52 bg-gray-100"/>
            
                    <label htmlFor="" className="mr-40">Senha</label>
                    <input type="password" className="m-2 p-1 w-52 bg-gray-100" />
                    <button className="bg-red-500 mt-8 p-3 rounded-md text-white">CLIQUE AQUI</button>

                    <p className="mt-10">Não tenho conta. <a href="Cadastro.jsx" className="mt-12 text-orange-400">Cadastrar agora</a></p>
                </div>
            </form>
        </div>
    )
}