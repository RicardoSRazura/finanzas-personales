import { useCuenta } from "../context/CuentaContext"
import { useTransaccion } from "../context/TransaccionContex";
import { useEffect } from "react";

function ResumenPerfil ({cuenta}) {

    const { getTransaccion, transaccion } = useTransaccion();

    useEffect(() => {
        getTransaccion();
    }, []);

    if (transaccion.length === 0) return (<h1>No hay Transacciones existentes</h1>);

    return (
        <div className="">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <header className="flex justify-between">
                    <h1 className="text-2xl font-bold">{cuenta.tipocuenta}</h1>
                    
                </header>
                <p className="text-slate-300">{cuenta.saldo}</p>
            </div>

            <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
                <div className="overflow-x-auto">
                    <table className="table-auto min-w-max">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Concepto</th>
                                <th className="px-4 py-2">Cantidad</th>
                                <th className="px-4 py-2">Fecha</th>
                                {/* Agrega más encabezados según los detalles de tu transacción */}
                            </tr>
                        </thead>
                        <tbody>
                            {transaccion.map(transaccion => (
                                <tr key={transaccion.idtransaccion}>
                                    <td className="border px-4 py-2">{transaccion.idtransaccion}</td>
                                    <td className="border px-4 py-2">{transaccion.tipotransaccion}</td>
                                    <td className="border px-4 py-2">{transaccion.cantidad}</td>
                                    <td className="border px-4 py-2">{new Date(transaccion.fecha).toLocaleDateString()}</td>
                                    {/* Agrega más celdas según los detalles de tu transacción */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ResumenPerfil