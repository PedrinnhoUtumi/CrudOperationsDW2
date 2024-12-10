import { useNavigate } from "react-router-dom";
import { Pagina } from "../components/Pagina";
import { CircleArrowLeft } from "lucide-react"

export function Estudantes() {
    const navigate = useNavigate()  

    const handleLogin = (e) => {
        e.preventDefault() 
        navigate("/Home")
    }
    return (
        <Pagina>
            <div className="flex flex-row justify-evenly p-2 bg-cinzaClaro">
                <header className="w-full h-10 flex justify-between items-center">
                    <CircleArrowLeft onClick={handleLogin} className="cursor-pointer"/>
                    <input type="text" placeholder="Search" className="p-2 border border-solid border-gray-300 rounded"/>
                </header>
                <div>

                </div>
            </div>
        </Pagina>)
}