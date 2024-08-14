import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
    const { logout, user } = useAuth();
    const [cuentasOpen, setCuentasOpen] = useState(false);
    const [transaccionesOpen, setTransaccionesOpen] = useState(false);

    return (
        <div className="sidebar bg-primary p-4 rounded-lg">
            <ul className="my-6 p-4">
                <li className="mb-4">
                    <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg>

                        <button onClick={() => setCuentasOpen(!cuentasOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                            Cuentas
                        </button>
                    </div>
                    {cuentasOpen && (
                        <ul className="my-2">
                            <li>
                                <Link to="/profile/cuentas" className="text-gray-300 hover:text-white ">
                                    Create Cuenta
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile/getcuenta" className="text-gray-300 hover:text-white ">
                                    Obtener cuentas
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mb-4">
                    <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                        <button onClick={() => setTransaccionesOpen(!transaccionesOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                            Transacciones
                        </button>
                    </div>
                    
                    {transaccionesOpen && (
                        <ul className="my-2">
                            <li>
                                <Link to="/profile/transaccion" className="text-gray-300 hover:text-white ">
                                    Create Transacción
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile/gettransaccion" className="text-gray-300 hover:text-white ">
                                    Obtener Transacciones
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="mb-4">
                    <Link to="/" onClick={() => { logout(); }} className="text-gray-300 hover:text-white">Logout</Link>
                </li>
                <li>
                    <Link to={`/profile/update/${user.id}`} className="text-gray-300 hover:text-white">Actualizar</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
