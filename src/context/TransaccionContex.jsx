import { useContext, useState } from "react";
import { createContext } from "react";
import {createTransaccionRequest, getTransaccionRequest, deleteTransaccionRequest} from '../api/transaccion.js'

const transaccionContext = createContext();

export const useTransaccion = () => {
    const context = useContext(transaccionContext);

    if(!context) {
        throw new Error('useTransaccion must be used within a transaccionProvider');
    }
    return context;
}

export function TransaccionProvider({children}) {
    const [transaccion, setTransaccion] = useState([]);

    const getTransaccion = async () => {
        try{
            const res = await getTransaccionRequest();
            console.log(res.data)
            setTransaccion(res.data)
        }catch (error){
            console.error(error);
        }
    }

    const createTransaccion = async (idcuenta, tipoTransaccion, cantidad) => {
        console.log(idcuenta)
        const res = await createTransaccionRequest(idcuenta, tipoTransaccion, cantidad)
        console.log(res)
    }

    const deleteTransaccion = async(id) => {
        try {
            const res = await deleteTransaccionRequest(id);
            if(res.status === 200) setTransaccion(transaccion.filter(transaccion => transaccion.idtransaccion != id))
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <transaccionContext.Provider value={{transaccion, createTransaccion, getTransaccion, deleteTransaccion}}>
            {children}
        </transaccionContext.Provider>
    );
}