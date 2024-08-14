import { useCuenta } from "../context/CuentaContext"
import Sidebar from "./Sidebar";

function CuentaCard ({cuenta}) {

    const {deleteCuenta} = useCuenta();

    return (
            <div>
                <div className=' h-[calc(100vh-100px)] items-center justify-center'>
                    <div className="bg-primary max-w-md w-full p-10 rounded-md">
                        <header className="flex justify-between">
                            <h1 className="text-2xl font-bold text-white">{cuenta.tipocuenta}</h1>
                            <div className="flex gap-x-4 ml-8 items-center">
                                <button className="text-lg bg-cafe hover:bg-secondary hover:text-black  p-2 text-white font-bold px-4 my-2 rounded" onClick={() =>{
                                    deleteCuenta(cuenta.idcuenta)
                                }}>Eliminar</button>
                                
                            </div>
                        </header>
                        <p className="text-white text-lg">{cuenta.saldo}</p>
                        <p className="text-white text-lg">{new Date(cuenta.fechaapertura).toLocaleDateString()}</p>
                    </div>
                </div>
                
            </div>
        
    )
}

export default CuentaCard