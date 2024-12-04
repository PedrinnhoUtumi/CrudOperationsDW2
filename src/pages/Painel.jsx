import { Link } from "react-router-dom";

export function Painel() {
    return(
        <div className=" w-screen h-screen bg-azulEscuro">
            <div className=" w-screen h-screen flex justify-around">
                <aside className="w-96 h-screen bg-azulMedio">

                </aside>

                <div className="w-60 h-60 bg-verde"></div>
                <div className="w-60 h-60 bg-verde"></div>
                <div className="w-60 h-60 bg-verde"></div>
                <div className="w-60 h-60 bg-verde"></div>

            </div>
        </div>
    )
}