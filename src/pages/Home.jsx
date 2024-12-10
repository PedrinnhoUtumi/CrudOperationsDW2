import { CreditCard, GraduationCap, School, User } from "lucide-react";
import { Pagina } from "../components/Pagina";

export function Home() {

    return (
        <Pagina>
            <div className="flex flex-row justify-evenly mt-12 gap-2 m-2">
                <span className="w-64 h-40 flex flex-col items-start rounded-xl bg-blue-100">
                    <GraduationCap size={50} className="mb-2 text-blue-500 m-2" />
                    <p className="ml-2">Estudantes</p>
                    <div className="text-bold text-black flex w-52 justify-end m-5 font-bold text-xl"><p>243</p></div>
                </span>

                <span className="w-64 h-40 flex flex-col items-start rounded-xl bg-purple-200">
                    <School size={50} className="mb-2 text-purple-500 m-2" />
                    <p className="ml-2">Cursos</p>
                    <div className="text-bold text-black flex w-52 justify-end m-5 font-bold text-xl"><p>13</p></div>
                </span>

                <span className="w-64 h-40 flex flex-col items-start rounded-xl bg-green-100">
                    <CreditCard size={50} className="mb-2 text-green-500 m-2" />
                    <p className="ml-2">Pagamentos</p>
                    <div className="text-bold text-black flex w-52 justify-end m-5 font-bold text-xl"><p>556,00</p></div>
                </span>

                <span className="w-64 h-40  flex flex-col items-start rounded-xl bg-gradient-to-tl from-pink-400 to-orange-500">
                    <User size={50} className="mb-2 text-white m-2" />
                    <p className="ml-2 text-white">Usuários</p>
                    <div className="text-bold text-black flex w-52 justify-end m-5 font-bold text-xl"><p>3</p></div>
                </span>
            </div>
        </Pagina>

    )
}