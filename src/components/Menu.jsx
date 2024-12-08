import {CreditCard, FileSliders, GraduationCap, Home, School, Settings} from "lucide-react";
import { NavLink } from "react-router-dom";

export function Menu() {
    let estilo = `flex items-center gap-4 px-3 py-3 w-full text-sm text-roxoClaro hover:bg-verde hover:text-white `
    
    return (
        <aside className="w-96 h-screen bg-azulMedio">
            <header className=" flex justify-center items-center gap-2 bg-azulMedio text-white px-1 py-5 h-16 text-2xl font-black">
                Menu
            </header>

            <div className="mt-10 h-32 w-22 flex flex-col items-center">
                <img src="vite.svg" alt="" className="h-10"/>
                <p className="h-10 mt-2 text-white">Sara Guaiume</p>
            </div>
            <nav className={`flex flex-col justify-start items-center gap-2`}>
                <NavLink to="Home" className={estilo}>
                    <Home />
                    Home
                </NavLink>
                <NavLink to="Curso" className={estilo}>
                    <School/>
                    Curso
                </NavLink>
                <NavLink to="Estudantes" className={estilo}>
                    <GraduationCap />
                    Estudantes
                </NavLink>
                <NavLink to="Pagamento" className={estilo}>
                    <CreditCard />
                    Pagamento
                </NavLink>
                <NavLink to="Forms" className={estilo}>
                    <FileSliders />
                    Forms
                </NavLink>
                <NavLink to="Configuracoes" className={estilo}>
                    <Settings />
                    Configurações
                </NavLink>
            </nav>
        </aside>


    )
}