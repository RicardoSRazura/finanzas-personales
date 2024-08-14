import { useEffect } from "react";
import { useTransaccion } from "../context/TransaccionContex";
import Sidebar from "../components/Sidebar";

function TransaccionPage () {
    const { getTransaccion, transaccion } = useTransaccion();

    useEffect(() => {
        getTransaccion();
    }, []);

    if (transaccion.length === 0) return (<h1>No hay Transacciones existentes</h1>);

    return (
        <div className="container w-full flex gap-x-6">
            <Sidebar/>
            <div className="bg-primary max-w-full w-full p-10 rounded-md">
                <div className='  flex h-[calc(120vh-100px)] items-center justify-center'>
                    <div className="overflow-x-auto bg-secondary rounded-md h-[calc(100vh-100px)]">
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
        </div>
        
        
    );
}

export default TransaccionPage;
