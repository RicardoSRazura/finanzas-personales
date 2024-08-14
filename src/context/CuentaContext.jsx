import { useContext, useState } from "react";
import { createContext } from "react";
import {createCuentaRequest, getCuentaRequest, deleteCuentaRequest} from '../api/cuenta.js'

const cuentaContext = createContext();

export const useCuenta = () => {
    const context = useContext(cuentaContext);

    if(!context) {
        throw new Error('useCuenta must be used within a taskProvider');
    }
    return context;
}

export function CuentaProvider({children}) {
    const [cuenta, setCuenta] = useState([]);

    const getCuenta = async () => {
        try{
            const res = await getCuentaRequest();
            setCuenta(res.data)
        }catch (error){
            console.error(error);
        }
    }

    const createCuenta = async (cuenta) => {
        const res = await createCuentaRequest(cuenta)
        console.log(res)
    }

    const deleteCuenta = async(id) => {
        try {
            const res = await deleteCuentaRequest(id);
            if(res.status === 200) setCuenta(cuenta.filter(cuenta => cuenta.idcuenta != id))
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <cuentaContext.Provider value={{cuenta, createCuenta, getCuenta, deleteCuenta}}>
            {children}
        </cuentaContext.Provider>
    );
}