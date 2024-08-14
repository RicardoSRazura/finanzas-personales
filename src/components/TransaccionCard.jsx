import { useTransaccion } from "../context/TransaccionContex";

function TransaccionCard({ transaccion }) {
    const { deleteTransaccion } = useTransaccion();

    return (
        <div className="flex justify-center items-center h-full">
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <table className="table-auto w-full">
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2 font-bold">Descripción:</td>
                            <td className="border px-4 py-2">{transaccion.descripcion}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 font-bold">Fecha:</td>
                            <td className="border px-4 py-2">{new Date(transaccion.fecha).toLocaleDateString()}</td>
                        </tr>
                        {/* Agrega más filas según los detalles de tu transacción */}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <button onClick={() => deleteTransaccion(transaccion.idtransaccion)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4">Editar</button>
                </div>
            </div>
        </div>
    );
}

export default TransaccionCard;

