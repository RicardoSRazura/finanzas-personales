import { useEffect } from "react";
import { useCuenta } from "../context/CuentaContext";
import CuentaCard from "../components/CuentaCard";

function CuentaPage () {
    const {getCuenta, cuenta} = useCuenta();

    useEffect(() => {
        getCuenta()
    }, [])

    if(cuenta.length === 0) return (<h1>No hay cuentas existentes</h1>);

    return (
        <div className="grid grid-cols-3 gap-2">
            {
                cuenta.map(cuenta => (
                    <CuentaCard cuenta ={cuenta} key={cuenta.idcuenta}/>
                ))
            }
        </div>
    )
}

export default CuentaPage;