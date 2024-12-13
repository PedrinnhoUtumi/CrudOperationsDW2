import { CreditCard, GraduationCap, School, User } from "lucide-react"
import { Pagina } from "../components/Pagina"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export function Home() {
    const [usuarios, setUsuarios] = useState(0)

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch("http://localhost:3333/usuarios")
                if (!response.ok) {
                    throw new Error("Erro ao buscar os usuários")
                }
                const data = await response.json()
                setUsuarios(data.length)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchUsuarios()
    }, [])



    return (
        <Pagina>
            <div className="flex flex-row justify-evenly gap-2 h-screen w-full bg-cinzaClaro">
                <Link to="/Estudantes" className="w-64 h-40 flex flex-col mt-12 items-start rounded-xl bg-blue-100">
                    <GraduationCap size={50} className="mb-2 text-blue-500 m-2" />
                    <p className="ml-2">Estudantes</p>
                    <div className="text-bold text-black flex w-52 justify-end m-5 font-bold text-xl"><p>{usuarios}</p></div>
                </Link>

                <span className="w-64 h-40 flex flex-col mt-12 items-start rounded-xl bg-purple-200">
                    <School size={50} className="mb-2 text-purple-500 m-2" />
                    <p className="ml-2">Cursos</p>
                    <div className="text-bold text-black flex w-52 justify-end m-5 font-bold text-xl"><p>13</p></div>
                </span>

                <Link to="/Pagamento" className="w-64 h-40 flex flex-col mt-12 items-start rounded-xl bg-green-100">
                    <CreditCard size={50} className="mb-2 text-green-500 m-2" />
                    <p className="ml-2">Pagamentos</p>
                    <div className="text-bold text-black flex w-52 justify-end m-5 font-bold text-xl"><p>556,00</p></div>
                </Link>

                <span className="w-64 h-40  flex flex-col mt-12 items-start rounded-xl bg-gradient-to-tl from-pink-400 to-orange-500">
                    <User size={50} className="mb-2 text-white m-2" />
                    <p className="ml-2 text-white">Usuários</p>
                    <div className="text-bold text-black flex w-52 justify-end m-5 font-bold text-xl"><p>{usuarios}</p></div>
                </span>
            </div>
        </Pagina>

    )
}